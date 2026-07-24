const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User
const register = async (req, res) => {
  try {
    const {
  name,
  email,
  phone,
  password,
  role,
  village,
  district,
  state,
} = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ phone });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
  name,
  email,
  phone,
  password: hashedPassword,
  role,
  village,
  district,
  state,
});

    res.status(201).json({
      success: true,
      message:
        "User registered successfully. Your account is pending admin approval.",
      data: user,
    });
  } catch (error) {
    console.error(error);

    // Duplicate key (e.g. a race condition past the findOne check above)
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // Mongoose schema validation error
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: Object.values(error.errors)[0]?.message || "Invalid input",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Login User
const login = async (req, res) => {
  try {
    const { phone, password } = req.body;

    // Find user by phone
    const user = await User.findOne({ phone });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number or password",
      });
    }

    // Compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number or password",
      });
    }

    // Block accounts awaiting admin approval or that have been suspended.
    // Accounts created before the "status" field existed have no value
    // here (undefined) and are treated as approved.
    if (user.status === "pending") {
      return res.status(403).json({
        success: false,
        message: "Your account is pending admin approval.",
      });
    }

    if (user.status === "suspended") {
      return res.status(403).json({
        success: false,
        message: "Your account has been suspended. Please contact support.",
      });
    }

    const token = jwt.sign(
  {
    id: user._id,
    role: user.role,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d",
  }
);

console.log("JWT SECRET:", process.env.JWT_SECRET);
console.log("TOKEN:", token);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get Current User Profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  register,
  login,
  getProfile,
};
