const express = require("express");

const router = express.Router();

const {
  createNotification,
  getNotifications,
  readNotification,
  markAllAsRead,
  deleteNotification,
  getNotificationCounts,
} = require("../controllers/notificationController");

const protect = require("../middleware/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: User notifications
 */

/**
 * @swagger
 * /notifications:
 *   post:
 *     summary: Create a notification
 *     tags: [Notifications]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       201: { description: Notification created }
 *   get:
 *     summary: Get notifications for the logged-in user (supports type/isRead filters and pagination)
 *     tags: [Notifications]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: query
 *         name: type
 *         schema: { type: string }
 *       - in: query
 *         name: isRead
 *         schema: { type: string, enum: ["true", "false"] }
 *       - in: query
 *         name: page
 *         schema: { type: integer }
 *       - in: query
 *         name: limit
 *         schema: { type: integer }
 *     responses:
 *       200: { description: List of notifications }
 */
// Create Notification
router.post("/", protect, createNotification);


// Get Notifications
router.get("/", protect, getNotifications);

/**
 * @swagger
 * /notifications/count:
 *   get:
 *     summary: Get total/unread notification counts (for badge display)
 *     tags: [Notifications]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Notification counts }
 */
// Get Notification Counts (total/unread) — for badge display
router.get("/count", protect, getNotificationCounts);

/**
 * @swagger
 * /notifications/{id}/read:
 *   put:
 *     summary: Mark a notification as read
 *     tags: [Notifications]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Notification marked as read }
 */
// Mark Notification as Read
router.put("/:id/read", protect, readNotification);

/**
 * @swagger
 * /notifications/read-all:
 *   put:
 *     summary: Mark all notifications as read
 *     tags: [Notifications]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: All notifications marked as read }
 */
// Mark All Notifications as Read
router.put("/read-all", protect, markAllAsRead);

/**
 * @swagger
 * /notifications/{id}:
 *   delete:
 *     summary: Delete a notification
 *     tags: [Notifications]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Notification deleted }
 */
// Delete Notification
router.delete("/:id", protect, deleteNotification);

module.exports = router;