const Contract = require("../models/Contract");
const { sendNotification } = require("../utils/notificationService");

// Get contracts for the logged-in user
const getContracts = async (req, res) => {
  try {
    let query = {};

    if (req.user.role === "buyer") {
      query.buyer = req.user.id;
    } else if (req.user.role === "farmer") {
      query.farmer = req.user.id;
    }

    const contracts = await Contract.find(query)
      .populate("farmer", "name phone")
      .populate("buyer", "name phone")
      .populate("requirement")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contracts.length,
      data: contracts,
    });
  } catch (error) {
    console.error("Get Contracts Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get a single contract by ID
const getContractById = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id)
      .populate("farmer", "name phone")
      .populate("buyer", "name phone")
      .populate("requirement");

    if (!contract) {
      return res.status(404).json({
        success: false,
        message: "Contract not found",
      });
    }

    const isParty =
      contract.buyer._id.toString() === req.user.id ||
      contract.farmer._id.toString() === req.user.id;

    if (!isParty) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to view this contract",
      });
    }

    res.status(200).json({
      success: true,
      data: contract,
    });
  } catch (error) {
    console.error("Get Contract By ID Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Update contract status (only the buyer or farmer on the contract)
const updateContractStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = ["pending", "active", "completed", "cancelled"];

    if (!status || !allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Status must be one of: ${allowedStatuses.join(", ")}`,
      });
    }

    const contract = await Contract.findById(req.params.id);

    if (!contract) {
      return res.status(404).json({
        success: false,
        message: "Contract not found",
      });
    }

    const isBuyer = contract.buyer.toString() === req.user.id;
    const isFarmer = contract.farmer.toString() === req.user.id;

    if (!isBuyer && !isFarmer) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this contract",
      });
    }

    contract.status = status;
    await contract.save();

    // Notify whichever party did not make the change.
    const otherPartyId = isBuyer ? contract.farmer : contract.buyer;

    await sendNotification({
      user: otherPartyId,
      title: "Contract Status Updated",
      message: `Your contract status has been updated to "${status}".`,
      type: "contract",
    });

    res.status(200).json({
      success: true,
      message: "Contract status updated successfully",
      data: contract,
    });
  } catch (error) {
    console.error("Update Contract Status Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getContracts,
  getContractById,
  updateContractStatus,
};
