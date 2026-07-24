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

/**
 * @swagger
 * tags:
 *   name: Crops
 *   description: Farmer crop profile management
 */

/**
 * @swagger
 * /crops:
 *   post:
 *     summary: Create a crop profile
 *     tags: [Crops]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       201: { description: Crop created }
 *   get:
 *     summary: Get all crops for the logged-in farmer
 *     tags: [Crops]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: List of crops }
 */
// Create Crop
router.post("/", protect, createCrop);

// Get All Crops
router.get("/", protect, getAllCrops);

/**
 * @swagger
 * /crops/{id}:
 *   get:
 *     summary: Get a single crop by ID
 *     tags: [Crops]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Crop details }
 *       404: { description: Crop not found }
 *   put:
 *     summary: Update a crop
 *     tags: [Crops]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Crop updated }
 *       404: { description: Crop not found }
 *   delete:
 *     summary: Delete a crop
 *     tags: [Crops]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Crop deleted }
 *       404: { description: Crop not found }
 */
router.get("/:id", protect, getCropById);
router.put("/:id", protect, updateCrop);
router.delete("/:id", protect, deleteCrop);

module.exports = router;