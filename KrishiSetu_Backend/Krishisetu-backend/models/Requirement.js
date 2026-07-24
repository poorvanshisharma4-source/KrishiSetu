const mongoose = require("mongoose");

const requirementSchema = new mongoose.Schema(
  {
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    cropName: {
      type: String,
      required: true,
      trim: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    grade: {
      type: String,
      required: true,
      trim: true,
    },

    unit: {
      type: String,
      default: "kg",
      required: true,
    },

    expectedPrice: {
      type: Number,
      required: true,
    },

    requiredBy: {
      type: Date,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    status: {
      type: String,
      enum: ["open", "fulfilled", "cancelled"],
      default: "open",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Requirement", requirementSchema);