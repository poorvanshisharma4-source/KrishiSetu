const express = require("express");
const router = express.Router();
const { register, login, getProfile } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Login User
router.post("/login", login);

// Get Current User Profile
router.get("/profile", protect, getProfile);

// Farmer Only Route
router.get(
  "/farmer-only",
  protect,
  authorizeRoles("farmer"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome Farmer! You have access to this route.",
    });
  }
);

// Register User
router.post("/register", register);

module.exports = router;