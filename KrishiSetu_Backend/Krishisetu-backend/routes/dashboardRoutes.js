const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  getFarmerDashboard,
  getBuyerDashboard,
} = require("../controllers/dashboardController");

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Farmer and buyer dashboard summaries
 */

/**
 * @swagger
 * /dashboard/farmer:
 *   get:
 *     summary: Get the farmer dashboard (crops, requests, contracts, trust score, recent activity)
 *     tags: [Dashboard]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Farmer dashboard data }
 */
// Farmer Dashboard
router.get("/farmer", protect, authorizeRoles("farmer"), getFarmerDashboard);

/**
 * @swagger
 * /dashboard/buyer:
 *   get:
 *     summary: Get the buyer dashboard (requirements, requests, contracts, recent activity)
 *     tags: [Dashboard]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Buyer dashboard data }
 */
// Buyer Dashboard
router.get("/buyer", protect, authorizeRoles("buyer"), getBuyerDashboard);

module.exports = router;
