const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    farmer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    areaSize: {
      type: Number,
      required: true,
    },

    harvestDate: {
      type: Date,
      required: true,
    },

    growthPercentage: {
      type: Number,
      default: 0,
    },

    healthStatus: {
      type: String,
      enum: ["Healthy", "Excellent", "Needs Attention"],
      default: "Healthy",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Crop", cropSchema);