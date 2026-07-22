const express = require("express");

const router = express.Router();

const {
  createNotification,
  getNotifications,
  readNotification,
} = require("../controllers/notificationController");

const protect = require("../middleware/authMiddleware");

// Create Notification
router.post("/", protect, createNotification);


// Get Notifications
router.get("/", protect, getNotifications);

// Mark Notification as Read
router.put("/:id/read", protect, readNotification);

module.exports = router;