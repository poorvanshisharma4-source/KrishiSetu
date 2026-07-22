const express = require("express");

const {
  createRequest,
  getRequests,
  acceptRequest,
} = require("../controllers/requestController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

// Farmer sends a request for a requirement
router.post(
  "/",
  protect,
  authorizeRoles("farmer"),
  createRequest
);

// Get requests
router.get(
  "/",
  protect,
  authorizeRoles("farmer", "buyer"),
  getRequests
);

// Buyer accepts a request
router.put(
  "/:id/accept",
  protect,
  authorizeRoles("buyer"),
  acceptRequest
);

module.exports = router;