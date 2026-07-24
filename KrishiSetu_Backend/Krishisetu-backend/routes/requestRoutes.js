const express = require("express");

const {
  createRequest,
  getRequests,
  acceptRequest,
  rejectRequest,
} = require("../controllers/requestController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Requests
 *   description: Farmer requests against buyer requirements
 */

/**
 * @swagger
 * /requests:
 *   post:
 *     summary: Farmer sends a request for a requirement
 *     tags: [Requests]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       201: { description: Request created }
 *   get:
 *     summary: Get requests for the logged-in farmer or buyer
 *     tags: [Requests]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: List of requests }
 */
// Farmer sends a request for a requirement
router.post(
  "/",
  protect,
  authorizeRoles("farmer"),
  createRequest
);

// Get requests
router.get(
  "/",
  protect,
  authorizeRoles("farmer", "buyer"),
  getRequests
);

/**
 * @swagger
 * /requests/{id}/accept:
 *   put:
 *     summary: Buyer accepts a request
 *     tags: [Requests]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Request accepted, contract generated }
 *       404: { description: Request not found }
 */
// Buyer accepts a request
router.put(
  "/:id/accept",
  protect,
  authorizeRoles("buyer"),
  acceptRequest
);

/**
 * @swagger
 * /requests/{id}/reject:
 *   put:
 *     summary: Buyer rejects a request
 *     tags: [Requests]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Request rejected }
 *       404: { description: Request not found }
 */
// Buyer rejects a request
router.put(
  "/:id/reject",
  protect,
  authorizeRoles("buyer"),
  rejectRequest
);

module.exports = router;