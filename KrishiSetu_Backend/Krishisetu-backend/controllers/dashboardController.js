const mongoose = require("mongoose");
const Crop = require("../models/Crop");
const Request = require("../models/Request");
const Contract = require("../models/Contract");
const Requirement = require("../models/Requirement");
const { calculateTrustScore } = require("../utils/trustScore");
const { getRecentActivity } = require("../utils/recentActivity");

// Single aggregation per dashboard call: counts active/completed/cancelled
// contracts AND sums the completed-contract value, all in one round trip
// via $facet, instead of four separate queries.
const getContractFacets = async (matchField, userId) => {
  const result = await Contract.aggregate([
    { $match: { [matchField]: new mongoose.Types.ObjectId(userId) } },
    {
      $facet: {
        active: [{ $match: { status: "active" } }, { $count: "count" }],
        completed: [{ $match: { status: "completed" } }, { $count: "count" }],
        cancelled: [{ $match: { status: "cancelled" } }, { $count: "count" }],
        valueSum: [
          { $match: { status: "completed" } },
          {
            $group: {
              _id: null,
              total: { $sum: { $multiply: ["$agreedPrice", "$quantity"] } },
            },
          },
        ],
      },
    },
  ]);

  const facet = result[0] || {};

  return {
    active: facet.active?.[0]?.count || 0,
    completed: facet.completed?.[0]?.count || 0,
    cancelled: facet.cancelled?.[0]?.count || 0,
    value: facet.valueSum?.[0]?.total || 0,
  };
};

// Farmer Dashboard
const getFarmerDashboard = async (req, res) => {
  try {
    const farmerId = req.user.id;

    const [totalCrops, activeRequests, acceptedRequests, contractStats, recentActivity] =
      await Promise.all([
        Crop.countDocuments({ farmer: farmerId }),
        Request.countDocuments({ farmer: farmerId, status: "pending" }),
        Request.countDocuments({ farmer: farmerId, status: "accepted" }),
        getContractFacets("farmer", farmerId),
        getRecentActivity({
          requestQuery: { farmer: farmerId },
          contractQuery: { farmer: farmerId },
          notificationQuery: { user: farmerId },
        }),
      ]);

    const trustScore = calculateTrustScore({
      completedContracts: contractStats.completed,
      cancelledContracts: contractStats.cancelled,
      activeContracts: contractStats.active,
      acceptedRequests,
    });

    res.status(200).json({
      success: true,
      data: {
        totalCrops,
        activeRequests,
        activeContracts: contractStats.active,
        completedContracts: contractStats.completed,
        earnings: contractStats.value,
        trustScore,
        recentActivity,
      },
    });
  } catch (error) {
    console.error("Farmer Dashboard Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Buyer Dashboard
const getBuyerDashboard = async (req, res) => {
  try {
    const buyerId = req.user.id;

    const [totalRequirements, pendingFarmerRequests, contractStats, recentActivity] =
      await Promise.all([
        Requirement.countDocuments({ buyer: buyerId }),
        Request.countDocuments({ buyer: buyerId, status: "pending" }),
        getContractFacets("buyer", buyerId),
        getRecentActivity({
          requestQuery: { buyer: buyerId },
          contractQuery: { buyer: buyerId },
          notificationQuery: { user: buyerId },
        }),
      ]);

    res.status(200).json({
      success: true,
      data: {
        totalRequirements,
        pendingFarmerRequests,
        activeContracts: contractStats.active,
        completedContracts: contractStats.completed,
        spending: contractStats.value,
        recentActivity,
      },
    });
  } catch (error) {
    console.error("Buyer Dashboard Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getFarmerDashboard,
  getBuyerDashboard,
};
