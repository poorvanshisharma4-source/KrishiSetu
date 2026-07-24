const User = require("../models/User");
const Requirement = require("../models/Requirement");
const Request = require("../models/Request");
const Contract = require("../models/Contract");
const Crop = require("../models/Crop");
const { getRecentActivity } = require("../utils/recentActivity");
const { sendNotification } = require("../utils/notificationService");

// Shared helper: fetch a user by ID and role, used by all
// approve/suspend actions below to avoid duplicating the same
// lookup + validation logic four times.
const findUserByRole = async (id, role) => {
  return User.findOne({ _id: id, role });
};

// ---------------------------------------------------------------
// Farmer Approval / Suspension
// ---------------------------------------------------------------

const approveFarmer = async (req, res) => {
  try {
    const farmer = await findUserByRole(req.params.id, "farmer");

    if (!farmer) {
      return res.status(404).json({
        success: false,
        message: "Farmer not found",
      });
    }

    farmer.status = "approved";
    await farmer.save();

    await sendNotification({
      user: farmer._id,
      title: "Account Approved",
      message: "Your farmer account has been approved. You can now log in.",
      type: "account",
    });

    res.status(200).json({
      success: true,
      message: "Farmer approved successfully",
      data: farmer,
    });
  } catch (error) {
    console.error("Approve Farmer Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const suspendFarmer = async (req, res) => {
  try {
    const farmer = await findUserByRole(req.params.id, "farmer");

    if (!farmer) {
      return res.status(404).json({
        success: false,
        message: "Farmer not found",
      });
    }

    farmer.status = "suspended";
    await farmer.save();

    await sendNotification({
      user: farmer._id,
      title: "Account Suspended",
      message: "Your farmer account has been suspended. Please contact support.",
      type: "account",
    });

    res.status(200).json({
      success: true,
      message: "Farmer suspended successfully",
      data: farmer,
    });
  } catch (error) {
    console.error("Suspend Farmer Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ---------------------------------------------------------------
// Buyer Approval / Suspension
// ---------------------------------------------------------------

const approveBuyer = async (req, res) => {
  try {
    const buyer = await findUserByRole(req.params.id, "buyer");

    if (!buyer) {
      return res.status(404).json({
        success: false,
        message: "Buyer not found",
      });
    }

    buyer.status = "approved";
    await buyer.save();

    await sendNotification({
      user: buyer._id,
      title: "Account Approved",
      message: "Your buyer account has been approved. You can now log in.",
      type: "account",
    });

    res.status(200).json({
      success: true,
      message: "Buyer approved successfully",
      data: buyer,
    });
  } catch (error) {
    console.error("Approve Buyer Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const suspendBuyer = async (req, res) => {
  try {
    const buyer = await findUserByRole(req.params.id, "buyer");

    if (!buyer) {
      return res.status(404).json({
        success: false,
        message: "Buyer not found",
      });
    }

    buyer.status = "suspended";
    await buyer.save();

    await sendNotification({
      user: buyer._id,
      title: "Account Suspended",
      message: "Your buyer account has been suspended. Please contact support.",
      type: "account",
    });

    res.status(200).json({
      success: true,
      message: "Buyer suspended successfully",
      data: buyer,
    });
  } catch (error) {
    console.error("Suspend Buyer Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ---------------------------------------------------------------
// Search, Pagination & Filters — reused by both farmer and buyer
// listing endpoints below.
// ---------------------------------------------------------------

const buildUserListQuery = (role, { search, status }) => {
  const query = { role };

  if (status) {
    query.status = status;
  }

  if (search) {
    const regex = new RegExp(search, "i");
    query.$or = [{ name: regex }, { phone: regex }, { village: regex }];
  }

  return query;
};

const listFarmers = async (req, res) => {
  try {
    const { search, status, page = 1, limit = 10 } = req.query;

    const pageNum = Math.max(parseInt(page, 10) || 1, 1);
    const limitNum = Math.max(parseInt(limit, 10) || 10, 1);

    const query = buildUserListQuery("farmer", { search, status });

    const [farmers, total] = await Promise.all([
      User.find(query)
        .select("-password")
        .sort({ createdAt: -1 })
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum),
      User.countDocuments(query),
    ]);

    res.status(200).json({
      success: true,
      count: farmers.length,
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
      data: farmers,
    });
  } catch (error) {
    console.error("List Farmers Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const listBuyers = async (req, res) => {
  try {
    const { search, status, page = 1, limit = 10 } = req.query;

    const pageNum = Math.max(parseInt(page, 10) || 1, 1);
    const limitNum = Math.max(parseInt(limit, 10) || 10, 1);

    const query = buildUserListQuery("buyer", { search, status });

    const [buyers, total] = await Promise.all([
      User.find(query)
        .select("-password")
        .sort({ createdAt: -1 })
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum),
      User.countDocuments(query),
    ]);

    res.status(200).json({
      success: true,
      count: buyers.length,
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
      data: buyers,
    });
  } catch (error) {
    console.error("List Buyers Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ---------------------------------------------------------------
// Dashboard Statistics
// ---------------------------------------------------------------

const getDashboardStats = async (req, res) => {
  try {
    const [
      totalFarmers,
      totalBuyers,
      pendingFarmers,
      pendingBuyers,
      suspendedFarmers,
      suspendedBuyers,
      totalRequirements,
      openRequirements,
      totalRequests,
      contractFacets,
      totalCrops,
      recentActivity,
    ] = await Promise.all([
      User.countDocuments({ role: "farmer" }),
      User.countDocuments({ role: "buyer" }),
      User.countDocuments({ role: "farmer", status: "pending" }),
      User.countDocuments({ role: "buyer", status: "pending" }),
      User.countDocuments({ role: "farmer", status: "suspended" }),
      User.countDocuments({ role: "buyer", status: "suspended" }),
      Requirement.countDocuments(),
      Requirement.countDocuments({ status: "open" }),
      Request.countDocuments(),
      // Single aggregation covering total/active/completed contract
      // counts AND platform-wide completed-contract value, in one
      // round trip instead of four separate queries.
      Contract.aggregate([
        {
          $facet: {
            total: [{ $count: "count" }],
            active: [{ $match: { status: "active" } }, { $count: "count" }],
            completed: [
              { $match: { status: "completed" } },
              { $count: "count" },
            ],
            revenue: [
              { $match: { status: "completed" } },
              {
                $group: {
                  _id: null,
                  total: {
                    $sum: { $multiply: ["$agreedPrice", "$quantity"] },
                  },
                },
              },
            ],
          },
        },
      ]),
      Crop.countDocuments(),
      getRecentActivity({}),
    ]);

    const facet = contractFacets[0] || {};
    const totalContracts = facet.total?.[0]?.count || 0;
    const activeContracts = facet.active?.[0]?.count || 0;
    const completedContracts = facet.completed?.[0]?.count || 0;
    const totalRevenue = facet.revenue?.[0]?.total || 0;

    res.status(200).json({
      success: true,
      data: {
        farmers: {
          total: totalFarmers,
          pending: pendingFarmers,
          suspended: suspendedFarmers,
        },
        buyers: {
          total: totalBuyers,
          pending: pendingBuyers,
          suspended: suspendedBuyers,
        },
        requirements: {
          total: totalRequirements,
          open: openRequirements,
        },
        requests: {
          total: totalRequests,
        },
        contracts: {
          total: totalContracts,
          active: activeContracts,
          completed: completedContracts,
        },
        crops: {
          total: totalCrops,
        },
        // Gross transacted value across all completed contracts.
        // Note: there is no platform commission/fee field in the
        // schema, so this reflects total market volume, not a
        // company take-rate.
        revenue: {
          totalCompletedContractValue: totalRevenue,
        },
        recentActivity,
      },
    });
  } catch (error) {
    console.error("Dashboard Stats Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  approveFarmer,
  suspendFarmer,
  approveBuyer,
  suspendBuyer,
  listFarmers,
  listBuyers,
  getDashboardStats,
};
