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
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["farmer", "buyer"],
      required: true,
    },

    phone: {
      type: String,
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