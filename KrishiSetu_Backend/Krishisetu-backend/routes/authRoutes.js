const express = require("express");
const router = express.Router();
const { register, login, getProfile } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const { loginLimiter, registerLimiter } = require("../middleware/rateLimiter");
const {
  registerValidationRules,
  loginValidationRules,
} = require("../middleware/validators/authValidator");

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in with phone and password
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [phone, password]
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "9876543210"
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Login successful, returns JWT token and user summary
 *       400:
 *         description: Invalid credentials
 *       403:
 *         description: Account pending approval or suspended
 *       429:
 *         description: Too many login attempts
 */
// Login User
router.post("/login", loginLimiter, loginValidationRules, login);

/**
 * @swagger
 * /auth/profile:
 *   get:
 *     summary: Get the logged-in user's profile
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user profile
 *       401:
 *         description: Not authorized
 */
// Get Current User Profile
router.get("/profile", protect, getProfile);

/**
 * @swagger
 * /auth/farmer-only:
 *   get:
 *     summary: Sample route restricted to the farmer role
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Access granted for farmer role
 *       403:
 *         description: Access denied for non-farmer roles
 */
// Farmer Only Route
router.get(
  "/farmer-only",
  protect,
  authorizeRoles("farmer"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome Farmer! You have access to this route.",
    });
  }
);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new farmer or buyer account
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, phone, password, role]
 *             properties:
 *               name: { type: string }
 *               email: { type: string }
 *               phone: { type: string, example: "9876543210" }
 *               password: { type: string, format: password }
 *               role: { type: string, enum: [farmer, buyer] }
 *               village: { type: string }
 *               district: { type: string }
 *               state: { type: string }
 *     responses:
 *       201:
 *         description: Registered successfully, pending admin approval
 *       400:
 *         description: Validation error or user already exists
 *       429:
 *         description: Too many registration attempts
 */
// Register User
router.post("/register", registerLimiter, registerValidationRules, register);

module.exports = router;