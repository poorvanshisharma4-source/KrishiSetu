// const Requirement = require("../models/Requirement");

// const createRequirement = async (req, res) => {
//   try {
//     const {
//       cropName,
//       grade,
//       quantity,
//       unit,
//       expectedPrice,
//       requiredBy,
//       location,
//       description,
//     } = req.body;

//     if (!req.user || !req.user.id) {
//       return res.status(401).json({
//         success: false,
//         message: "Not authorized. Please log in and try again.",
//       });
//     }

//     if (!cropName || !quantity || !requiredBy || !location) {
//       return res.status(400).json({
//         success: false,
//         message: "Missing required fields: cropName, quantity, requiredBy, or location.",
//       });
//     }

//     const requiredDate = new Date(requiredBy);
//     if (Number.isNaN(requiredDate.getTime())) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid requiredBy date format.",
//       });
//     }

//     const requirement = await Requirement.create({
//       buyer: req.user.id,
//       cropName,
//       grade,
//       quantity,
//       unit,
//       expectedPrice,
//       requiredBy: requiredDate,
//       location,
//       description,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Requirement created successfully.",
//       data: requirement,
//     });
//   } catch (error) {
//     console.error("Create Requirement Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error while creating requirement.",
//     });
//   }
// };

// const getRequirements = async (req, res) => {
//   try {
//     const requirements = await Requirement.find().sort({ createdAt: -1 });

//     return res.status(200).json({
//       success: true,
//       count: requirements.length,
//       data: requirements,
//     });
//   } catch (error) {
//     console.error("Get Requirements Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error while fetching requirements.",
//     });
//   }
// };

// const getRequirementById = async (req, res) => {
//   try {
//     const requirement = await Requirement.findById(req.params.id);

//     if (!requirement) {
//       return res.status(404).json({
//         success: false,
//         message: "Requirement not found.",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: requirement,
//     });
//   } catch (error) {
//     console.error("Get Requirement By ID Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error while fetching requirement.",
//     });
//   }
// };

// module.exports = {
//   createRequirement,
//   getRequirements,
//   getRequirementById,
// };

// const Requirement = require("../models/Requirement");

// const createRequirement = async (req, res) => {
//   try {
//     const {
//       cropName,
//       grade,
//       quantity,
//       unit,
//       expectedPrice,
//       requiredBy,
//       location,
//       description,
//     } = req.body;

//     // Fix 1: req.user._id aur req.user.id dono check karo
//     const userId = req.user?.id || req.user?._id;

//     if (!userId) {
//       return res.status(401).json({
//         success: false,
//         message: "Not authorized. Please log in and try again.",
//       });
//     }

//     if (!cropName || !quantity || !requiredBy || !location) {
//       return res.status(400).json({
//         success: false,
//         message: "Missing required fields: cropName, quantity, requiredBy, or location.",
//       });
//     }

//     const requiredDate = new Date(requiredBy);
//     if (Number.isNaN(requiredDate.getTime())) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid requiredBy date format.",
//       });
//     }

//     // Fix 2: Explicitly Number conversion and optional defaults
//     const requirement = await Requirement.create({
//       buyer: userId,
//       cropName,
//       grade: grade || "Grade A",
//       quantity: Number(quantity),
//       unit: unit || "Quintals",
//       expectedPrice: Number(expectedPrice) || 0,
//       requiredBy: requiredDate,
//       location,
//       description: description || "",
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Requirement created successfully.",
//       data: requirement,
//     });
//   } catch (error) {
//     console.error("Create Requirement Error:", error);
//     // Exact error message frontend tak bhejein taaki debug easy ho
//     return res.status(500).json({
//       success: false,
//       message: error.message || "Server error while creating requirement.",
//     });
//   }
// };

// const getRequirements = async (req, res) => {
//   try {
//     const requirements = await Requirement.find().sort({ createdAt: -1 });

//     return res.status(200).json({
//       success: true,
//       count: requirements.length,
//       data: requirements,
//     });
//   } catch (error) {
//     console.error("Get Requirements Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error while fetching requirements.",
//     });
//   }
// };

// const getRequirementById = async (req, res) => {
//   try {
//     const requirement = await Requirement.findById(req.params.id);

//     if (!requirement) {
//       return res.status(404).json({
//         success: false,
//         message: "Requirement not found.",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: requirement,
//     });
//   } catch (error) {
//     console.error("Get Requirement By ID Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error while fetching requirement.",
//     });
//   }
// };

// module.exports = {
//   createRequirement,
//   getRequirements,
//   getRequirementById,
// };


const Requirement = require("../models/Requirement");

const createRequirement = async (req, res) => {
  try {
    const {
      cropName,
      grade,
      quantity,
      unit,
      expectedPrice,
      requiredBy,
      location,
      description,
    } = req.body;

    // Fix 1: req.user._id aur req.user.id dono check karo
    const userId = req.user?.id || req.user?._id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Not authorized. Please log in and try again.",
      });
    }

    if (!cropName || !quantity || !requiredBy || !location) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: cropName, quantity, requiredBy, or location.",
      });
    }

    const requiredDate = new Date(requiredBy);
    if (Number.isNaN(requiredDate.getTime())) {
      return res.status(400).json({
        success: false,
        message: "Invalid requiredBy date format.",
      });
    }

    // Fix 2: Explicitly Number conversion and optional defaults
    const requirement = await Requirement.create({
      buyer: userId,
      cropName,
      grade: grade || "Grade A",
      quantity: Number(quantity),
      unit: unit || "Quintals",
      expectedPrice: Number(expectedPrice) || 0,
      requiredBy: requiredDate,
      location,
      description: description || "",
    });

    return res.status(201).json({
      success: true,
      message: "Requirement created successfully.",
      data: requirement,
    });
  } catch (error) {
    console.error("Create Requirement Error:", error);
    // Exact error message frontend tak bhejein taaki debug easy ho
    return res.status(500).json({
      success: false,
      message: error.message || "Server error while creating requirement.",
    });
  }
};

const getRequirements = async (req, res) => {
  try {
    const requirements = await Requirement.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: requirements.length,
      data: requirements,
    });
  } catch (error) {
    console.error("Get Requirements Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching requirements.",
    });
  }
};

const getRequirementById = async (req, res) => {
  try {
    const requirement = await Requirement.findById(req.params.id);

    if (!requirement) {
      return res.status(404).json({
        success: false,
        message: "Requirement not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: requirement,
    });
  } catch (error) {
    console.error("Get Requirement By ID Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching requirement.",
    });
  }
};

module.exports = {
  createRequirement,
  getRequirements,
  getRequirementById,
};
