const Notification = require("../models/Notification");

/**
 * Internal helper for system-generated notifications (request/contract
 * lifecycle events, etc.). This is intentionally separate from
 * notificationController.createNotification, which is an Express route
 * handler (req, res) meant for direct API calls, not for reuse inside
 * other controllers.
 *
 * Notification creation is a secondary effect of the action that
 * triggers it (e.g. accepting a request). A failure here is logged but
 * swallowed so it never breaks the primary request/contract flow.
 */
const sendNotification = async ({ user, title, message, type = "general" }) => {
  try {
    await Notification.create({ user, title, message, type });
  } catch (error) {
    console.error("Notification creation failed:", error.message);
  }
};

module.exports = { sendNotification };
