const Crop = require("../models/Crop");

// Create Crop
const createCrop = async (req, res) => {
  try {
    const { name, areaSize, harvestDate } = req.body;

    const crop = await Crop.create({
      farmer: req.user.id,
      name,
      areaSize,
      harvestDate,
    });

    res.status(201).json({
      success: true,
      message: "Crop added successfully",
      data: crop,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// Get All Crops
const getAllCrops = async (req, res) => {
  try {
    const crops = await Crop.find({
      farmer: req.user.id,
    });

    res.status(200).json({
      success: true,
      count: crops.length,
      data: crops,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// Get Single Crop by ID
const getCropById = async (req, res) => {
  try {
    const crop = await Crop.findOne({
      _id: req.params.id,
      farmer: req.user.id,
    });


    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found",
      });
    }


    res.status(200).json({
      success: true,
      data: crop,
    });


  } catch (error) {

    console.error("Get Crop By ID Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// Update Crop
const updateCrop = async (req, res) => {
  try {

    const {
      name,
      areaSize,
      harvestDate,
      growthPercentage,
      healthStatus,
    } = req.body;


    const crop = await Crop.findOne({
      _id: req.params.id,
      farmer: req.user.id,
    });


    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found",
      });
    }


    crop.name = name || crop.name;
    crop.areaSize = areaSize || crop.areaSize;
    crop.harvestDate = harvestDate || crop.harvestDate;


    if (growthPercentage !== undefined) {
      crop.growthPercentage = growthPercentage;
    }


    if (healthStatus) {
      crop.healthStatus = healthStatus;
    }


    await crop.save();


    res.status(200).json({
      success: true,
      message: "Crop updated successfully",
      data: crop,
    });


  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// Delete Crop
const deleteCrop = async (req, res) => {
  try {

    const crop = await Crop.findOne({
      _id: req.params.id,
      farmer: req.user.id,
    });


    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found",
      });
    }


    await crop.deleteOne();


    res.status(200).json({
      success: true,
      message: "Crop deleted successfully",
    });


  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// Export Controllers
module.exports = {
  createCrop,
  getAllCrops,
  getCropById,
  updateCrop,
  deleteCrop,
};