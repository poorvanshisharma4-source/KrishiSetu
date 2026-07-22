const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const {
  createRequirement,
  getRequirements,
  getRequirementById,
} = require("../controllers/requirementController");

router.post("/", protect, authorizeRoles("buyer"), createRequirement);
router.get("/", protect, authorizeRoles("farmer", "buyer"), getRequirements);
router.get("/:id", protect, authorizeRoles("farmer", "buyer"), getRequirementById);

module.exports = router;
