const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createCrop,
  getAllCrops,
  getCropById,
  updateCrop,
  deleteCrop,
} = require("../controllers/cropController");

// Create Crop
router.post("/", protect, createCrop);

// Get All Crops
router.get("/", protect, getAllCrops);
router.get("/:id", protect, getCropById);
router.put("/:id", protect, updateCrop);
router.delete("/:id", protect, deleteCrop);

module.exports = router;