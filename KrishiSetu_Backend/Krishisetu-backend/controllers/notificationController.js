const mongoose = require("mongoose");
const Notification = require("../models/Notification");


// Get User Notifications
const getNotifications = async (req, res) => {
  try {
    const { type, isRead, page, limit } = req.query;

    const userId = new mongoose.Types.ObjectId(req.user.id);

    // Filters are opt-in: omitting them returns everything, same as before.
    const filterMatch = { user: userId };
    if (type) {
      filterMatch.type = type;
    }
    if (isRead === "true") {
      filterMatch.isRead = true;
    } else if (isRead === "false") {
      filterMatch.isRead = false;
    }

    // Pagination is also opt-in: if neither page nor limit is supplied,
    // every matching notification is returned, exactly like before.
    const paginate = page !== undefined || limit !== undefined;
    const pageNum = Math.max(parseInt(page, 10) || 1, 1);
    const limitNum = Math.max(parseInt(limit, 10) || 20, 1);

    const dataPipeline = [{ $match: filterMatch }, { $sort: { createdAt: -1 } }];

    if (paginate) {
      dataPipeline.push({ $skip: (pageNum - 1) * limitNum }, { $limit: limitNum });
    }

    // Single aggregation covering the (optionally paginated) list, the
    // total count for the current filter, and the user's overall unread
    // count — one round trip instead of three separate queries.
    const [result] = await Notification.aggregate([
      {
        $facet: {
          data: dataPipeline,
          totalFiltered: [{ $match: filterMatch }, { $count: "count" }],
          unread: [{ $match: { user: userId, isRead: false } }, { $count: "count" }],
        },
      },
    ]);

    const data = result.data;
    const total = result.totalFiltered[0]?.count || 0;
    const unreadCount = result.unread[0]?.count || 0;

    const response = {
      success: true,
      count: data.length,
      data,
      unreadCount,
    };

    if (paginate) {
      response.total = total;
      response.page = pageNum;
      response.totalPages = Math.ceil(total / limitNum);
    }

    res.status(200).json(response);
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

// Mark All Notifications as Read
const markAllAsRead = async (req, res) => {
  try {
    const result = await Notification.updateMany(
      { user: req.user.id, isRead: false },
      { isRead: true }
    );

    res.status(200).json({
      success: true,
      message: "All notifications marked as read",
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Delete Notification
const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Notification deleted successfully",
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

// Get Notification Counts (total / unread) — lightweight, for badges
const getNotificationCounts = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.user.id);

    const [result] = await Notification.aggregate([
      { $match: { user: userId } },
      {
        $facet: {
          total: [{ $count: "count" }],
          unread: [{ $match: { isRead: false } }, { $count: "count" }],
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: {
        total: result.total[0]?.count || 0,
        unread: result.unread[0]?.count || 0,
      },
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
  markAllAsRead,
  deleteNotification,
  getNotificationCounts,
};