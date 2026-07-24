const mongoose = require("mongoose");

const transportationSchema = new mongoose.Schema(
  {
    contract: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contract",
      required: true,
    },

    farmer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    pickupLocation: {
      type: String,
      required: true,
    },

    deliveryLocation: {
      type: String,
      required: true,
    },

    transporterName: {
      type: String,
    },

    transporterPhone: {
      type: String,
    },

    vehicleNumber: {
      type: String,
    },

    status: {
      type: String,
      enum: ["pending", "assigned", "in_transit", "delivered"],
      default: "pending",
    },

    estimatedCost: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transportation", transportationSchema);