const express = require("express");

const {
  getContracts,
  getContractById,
  updateContractStatus,
} = require("../controllers/contractController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Contracts
 *   description: Generated contracts between farmers and buyers
 */

/**
 * @swagger
 * /contracts:
 *   get:
 *     summary: Get contracts for the logged-in farmer or buyer
 *     tags: [Contracts]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: List of contracts }
 */
// Get contracts for the logged-in farmer or buyer
router.get("/", protect, authorizeRoles("farmer", "buyer"), getContracts);

/**
 * @swagger
 * /contracts/{id}:
 *   get:
 *     summary: Get a single contract by ID
 *     tags: [Contracts]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Contract details }
 *       404: { description: Contract not found }
 */
// Get a single contract by ID
router.get("/:id", protect, authorizeRoles("farmer", "buyer"), getContractById);

/**
 * @swagger
 * /contracts/{id}/status:
 *   put:
 *     summary: Update contract status
 *     tags: [Contracts]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Contract status updated }
 *       404: { description: Contract not found }
 */
// Update contract status (buyer or farmer on the contract)
router.put(
  "/:id/status",
  protect,
  authorizeRoles("farmer", "buyer"),
  updateContractStatus
);

module.exports = router;
