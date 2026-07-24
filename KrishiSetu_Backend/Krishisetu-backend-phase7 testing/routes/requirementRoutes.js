const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const {
  createRequirement,
  getRequirements,
  getRequirementById,
} = require("../controllers/requirementController");

/**
 * @swagger
 * tags:
 *   name: Requirements
 *   description: Buyer-posted crop requirements
 */

/**
 * @swagger
 * /requirements:
 *   post:
 *     summary: Create a crop requirement (buyer only)
 *     tags: [Requirements]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       201: { description: Requirement created }
 *   get:
 *     summary: Get requirements (farmer or buyer)
 *     tags: [Requirements]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: List of requirements }
 */
router.post("/", protect, authorizeRoles("buyer"), createRequirement);
router.get("/", protect, authorizeRoles("farmer", "buyer"), getRequirements);

/**
 * @swagger
 * /requirements/{id}:
 *   get:
 *     summary: Get a single requirement by ID
 *     tags: [Requirements]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Requirement details }
 *       404: { description: Requirement not found }
 */
router.get("/:id", protect, authorizeRoles("farmer", "buyer"), getRequirementById);

module.exports = router;
