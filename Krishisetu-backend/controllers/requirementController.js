const Requirement = require("../models/Requirement");

// Create a new requirement
const createRequirement = async (req, res) => {
  try {
    const {
      cropName,
      quantity,
      unit,
      expectedPrice,
      requiredBy,
      location,
      description,
    } = req.body;

    const requirement = await Requirement.create({
      buyer: req.user.id,
      cropName,
      quantity,
      unit,
      expectedPrice,
      requiredBy,
      location,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Requirement created successfully",
      data: requirement,
    });
  } catch (error) {
    console.error("Create Requirement Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get all open requirements
const getRequirements = async (req, res) => {
  try {
    const requirements = await Requirement.find({
      status: "open",
    })
      .populate("buyer", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: requirements.length,
      data: requirements,
    });
  } catch (error) {
    console.error("Get Requirements Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createRequirement,
  getRequirements,
};