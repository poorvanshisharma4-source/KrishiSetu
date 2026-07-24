const Request = require("../models/Request");
const Requirement = require("../models/Requirement");
const Contract = require("../models/Contract");
const { sendNotification } = require("../utils/notificationService");

// Farmer sends a request for a requirement
const createRequest = async (req, res) => {
  try {
    const { requirementId, message } = req.body;

    const requirement = await Requirement.findById(requirementId);

    if (!requirement) {
      return res.status(404).json({
        success: false,
        message: "Requirement not found",
      });
    }

    if (requirement.status !== "open") {
      return res.status(400).json({
        success: false,
        message: "This requirement is no longer open",
      });
    }

    if (requirement.buyer.toString() === req.user.id) {
      return res.status(400).json({
        success: false,
        message: "You cannot send a request to your own requirement",
      });
    }

    const existingRequest = await Request.findOne({
      requirement: requirementId,
      farmer: req.user.id,
    });

    if (existingRequest) {
      return res.status(400).json({
        success: false,
        message: "You have already sent a request for this requirement",
      });
    }

    const request = await Request.create({
      requirement: requirementId,
      farmer: req.user.id,
      buyer: requirement.buyer,
      message,
    });

    await sendNotification({
      user: requirement.buyer,
      title: "New Request Received",
      message: `You have received a new request for your requirement "${requirement.cropName}".`,
      type: "request",
    });

    res.status(201).json({
      success: true,
      message: "Request sent successfully",
      data: request,
    });
  } catch (error) {
    console.error("Create Request Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get requests for the logged-in user
const getRequests = async (req, res) => {
  try {
    let query = {};

    if (req.user.role === "buyer") {
      query.buyer = req.user.id;
    } else if (req.user.role === "farmer") {
      query.farmer = req.user.id;
    }

    const requests = await Request.find(query)
      .populate("farmer", "name email phone")
      .populate("buyer", "name email")
      .populate("requirement")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: requests.length,
      data: requests,
    });
  } catch (error) {
    console.error("Get Requests Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Buyer accepts a farmer's request and creates a contract
const acceptRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const request = await Request.findById(id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found",
      });
    }

    if (request.buyer.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to accept this request",
      });
    }

    if (request.status !== "pending") {
      return res.status(400).json({
        success: false,
        message: "This request has already been processed",
      });
    }

    const requirement = await Requirement.findById(request.requirement);

    if (!requirement) {
      return res.status(404).json({
        success: false,
        message: "Requirement not found",
      });
    }

    if (requirement.status !== "open") {
      return res.status(400).json({
        success: false,
        message: "This requirement has already been fulfilled or is no longer open",
      });
    }

    // Defensive check against duplicate contracts (e.g. a race condition
    // between two near-simultaneous accept calls on the same requirement).
    const existingContract = await Contract.findOne({
      requirement: request.requirement,
    });

    if (existingContract) {
      return res.status(400).json({
        success: false,
        message: "A contract already exists for this requirement",
      });
    }

    request.status = "accepted";
    await request.save();

    const contract = await Contract.create({
      requirement: request.requirement,
      buyer: request.buyer,
      farmer: request.farmer,
      agreedPrice: requirement.expectedPrice,
      quantity: requirement.quantity,
      deliveryDate: requirement.requiredBy,
    });

    requirement.status = "fulfilled";
    await requirement.save();

    // Auto-reject every other pending request for the same requirement,
    // and notify each of those farmers.
    const otherPendingRequests = await Request.find({
      requirement: request.requirement,
      _id: { $ne: request._id },
      status: "pending",
    });

    if (otherPendingRequests.length > 0) {
      await Request.updateMany(
        {
          requirement: request.requirement,
          _id: { $ne: request._id },
          status: "pending",
        },
        { status: "rejected" }
      );

      await Promise.all(
        otherPendingRequests.map((otherRequest) =>
          sendNotification({
            user: otherRequest.farmer,
            title: "Request Not Accepted",
            message: `Your request for "${requirement.cropName}" was not accepted because the buyer accepted another farmer's request.`,
            type: "request",
          })
        )
      );
    }

    await sendNotification({
      user: request.farmer,
      title: "Request Accepted",
      message: `Your request for "${requirement.cropName}" has been accepted and a contract has been created.`,
      type: "contract",
    });

    res.status(200).json({
      success: true,
      message: "Request accepted and contract created successfully",
      data: {
        request,
        contract,
      },
    });
  } catch (error) {
    console.error("Accept Request Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Buyer rejects a farmer's request
const rejectRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const request = await Request.findById(id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found",
      });
    }

    if (request.buyer.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to reject this request",
      });
    }

    if (request.status !== "pending") {
      return res.status(400).json({
        success: false,
        message: "This request has already been processed",
      });
    }

    request.status = "rejected";
    await request.save();

    const requirement = await Requirement.findById(request.requirement);

    await sendNotification({
      user: request.farmer,
      title: "Request Rejected",
      message: `Your request for "${requirement ? requirement.cropName : "a requirement"}" was rejected by the buyer.`,
      type: "request",
    });

    res.status(200).json({
      success: true,
      message: "Request rejected successfully",
      data: request,
    });
  } catch (error) {
    console.error("Reject Request Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createRequest,
  getRequests,
  acceptRequest,
  rejectRequest,
};