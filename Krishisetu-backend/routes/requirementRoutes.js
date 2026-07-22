const express = require("express");

const {
  createRequirement,
  getRequirements,
} = require("../controllers/requirementController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("buyer"),
  createRequirement
);

router.get(
  "/",
  protect,
  authorizeRoles("farmer", "buyer"),
  getRequirements
);

module.exports = router;