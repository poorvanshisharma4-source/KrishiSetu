const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  approveFarmer,
  suspendFarmer,
  approveBuyer,
  suspendBuyer,
  listFarmers,
  listBuyers,
  getDashboardStats,
} = require("../controllers/adminController");

// Every route below requires a valid JWT AND the "admin" role.
router.use(protect, authorizeRoles.isAdmin);

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin-only endpoints (all require role "admin")
 */

/**
 * @swagger
 * /admin/dashboard:
 *   get:
 *     summary: Get admin dashboard statistics
 *     tags: [Admin]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Dashboard stats }
 *       403: { description: Access denied }
 */
// Dashboard
router.get("/dashboard", getDashboardStats);

/**
 * @swagger
 * /admin/farmers:
 *   get:
 *     summary: List farmers (supports search/pagination/filter)
 *     tags: [Admin]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: List of farmers }
 */
/**
 * @swagger
 * /admin/farmers/{id}/approve:
 *   put:
 *     summary: Approve a pending farmer account
 *     tags: [Admin]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Farmer approved }
 *       404: { description: Farmer not found }
 */
/**
 * @swagger
 * /admin/farmers/{id}/suspend:
 *   put:
 *     summary: Suspend a farmer account
 *     tags: [Admin]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Farmer suspended }
 *       404: { description: Farmer not found }
 */
// Farmers — list (search/pagination/filter) + approve/suspend
router.get("/farmers", listFarmers);
router.put("/farmers/:id/approve", approveFarmer);
router.put("/farmers/:id/suspend", suspendFarmer);

/**
 * @swagger
 * /admin/buyers:
 *   get:
 *     summary: List buyers (supports search/pagination/filter)
 *     tags: [Admin]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: List of buyers }
 */
/**
 * @swagger
 * /admin/buyers/{id}/approve:
 *   put:
 *     summary: Approve a pending buyer account
 *     tags: [Admin]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Buyer approved }
 *       404: { description: Buyer not found }
 */
/**
 * @swagger
 * /admin/buyers/{id}/suspend:
 *   put:
 *     summary: Suspend a buyer account
 *     tags: [Admin]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Buyer suspended }
 *       404: { description: Buyer not found }
 */
// Buyers — list (search/pagination/filter) + approve/suspend
router.get("/buyers", listBuyers);
router.put("/buyers/:id/approve", approveBuyer);
router.put("/buyers/:id/suspend", suspendBuyer);

module.exports = router;
