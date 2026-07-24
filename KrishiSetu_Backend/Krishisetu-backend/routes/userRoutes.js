const express = require("express");

const router = express.Router();

const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");

const protect = require("../middleware/authMiddleware");


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User profile management
 */

/**
 * @swagger
 * /users/profile:
 *   get:
 *     summary: Get the logged-in user's profile
 *     tags: [Users]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: User profile }
 *   put:
 *     summary: Update the logged-in user's profile
 *     tags: [Users]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Profile updated }
 */
// Get Profile
router.get("/profile", protect, getProfile);

// Update Profile
router.put("/profile", protect, updateProfile);


module.exports = router;