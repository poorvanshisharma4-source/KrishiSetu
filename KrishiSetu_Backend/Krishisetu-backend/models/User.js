const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // Common Fields

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
  type: String,
  required: true,
  unique: true,
  trim: true,
  lowercase: true,
},

    phone: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["farmer", "buyer", "admin"],
      required: true,
    },

    // Account status — controls admin approval/suspension workflow.
    // New farmer/buyer signups default to "pending" and must be
    // approved by an admin before they can log in. Accounts created
    // before this field existed have no value here and are treated
    // as approved for backward compatibility (see authController.login).
    status: {
      type: String,
      enum: ["pending", "approved", "suspended"],
      default: "pending",
    },

    // Location Fields

    village: {
      type: String,
    },

    district: {
      type: String,
    },

    state: {
      type: String,
    },

    address: {
      type: String,
    },

    // Farmer Fields

    landSize: {
      type: Number,
    },

    waterAvailability: {
      type: String,
    },

    farmingExperience: {
      type: Number,
    },

    crops: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Crop",
      },
    ],

    // Buyer Fields

    companyName: {
      type: String,
    },

    businessType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
