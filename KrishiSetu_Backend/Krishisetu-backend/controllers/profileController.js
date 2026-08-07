const User = require("../models/User");
const Contract = require("../models/Contract");
const Requirement = require("../models/Requirement");
// Get User Profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select("-password")
      .populate("crops");

    // User not found
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Buyer Stats
    const completedOrders = await Contract.countDocuments({
      buyer: user._id,
      status: "completed",
    });

    const activeRequirements = await Requirement.countDocuments({
      buyer: user._id,
      status: "open",
    });

    const connectedFarmers = await Contract.distinct("farmer", {
      buyer: user._id,
    });

    const profileData = {
      ...user.toObject(),
      completedOrders,
      activeRequirements,
      connectedFarmers: connectedFarmers.length,
      averageRating: "N/A",
    };

    res.status(200).json({
      success: true,
      data: profileData,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Update User Profile
const updateProfile = async (req, res) => {
  try {

    const {
      name,
      phone,
      village,
      district,
      state,
      address,
      landSize,
      waterAvailability,
      farmingExperience,
      companyName,
      businessType,
    } = req.body;


    const user = await User.findById(req.user.id);


    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }


    // Common Fields

    user.name = name || user.name;
    user.phone = phone || user.phone;
    user.village = village || user.village;
    user.district = district || user.district;
    user.state = state || user.state;
    user.address = address || user.address;


    // Farmer Fields

    if (landSize !== undefined) {
      user.landSize = landSize;
    }

    if (waterAvailability) {
      user.waterAvailability = waterAvailability;
    }

    if (farmingExperience !== undefined) {
      user.farmingExperience = farmingExperience;
    }


    // Buyer Fields

    user.companyName = companyName || user.companyName;
    user.businessType = businessType || user.businessType;


    await user.save();


    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: user,
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
  getProfile,
  updateProfile,
};

