const Notification = require("../models/Notification");


// Get User Notifications
const getNotifications = async (req, res) => {
  try {

    const notifications = await Notification.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });


    res.status(200).json({
      success: true,
      count: notifications.length,
      data: notifications,
    });


  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};




// Mark Notification as Read
const readNotification = async (req, res) => {
  try {

    const notification = await Notification.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found",
      });
    }

    notification.isRead = true;

    await notification.save();

    res.status(200).json({
      success: true,
      message: "Notification marked as read",
      data: notification,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Create Notification
const createNotification = async (req, res) => {
  try {
    const { title, message, type } = req.body;

    const notification = await Notification.create({
      user: req.user.id,
      title,
      message,
      type,
    });

    res.status(201).json({
      success: true,
      message: "Notification created successfully",
      data: notification,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createNotification,
  getNotifications,
  readNotification,
};