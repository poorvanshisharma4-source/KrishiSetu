const express = require("express");
const router = express.Router();
const {
  cropRecommendation,
  profitEstimation,
  marketTrends,
  buyerAnalytics,
  chat,
} = require("../controllers/aiController");
const protect = require("../middleware/authMiddleware");
const { detectLanguage } = require("../middleware/language");
const { rateLimiter } = require("../middleware/rateLimiter");

const aiRateLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: "Too many AI requests, please try again later",
});

router.use(detectLanguage);

/**
 * @swagger
 * /ai/crop-recommendation:
 *   post:
 *     summary: Get AI-powered crop recommendations
 *     tags: [AI]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - soilType
 *               - season
 *               - state
 *               - district
 *             properties:
 *               soilType:
 *                 type: string
 *                 example: "loamy"
 *               season:
 *                 type: string
 *                 example: "kharif"
 *               state:
 *                 type: string
 *                 example: "Maharashtra"
 *               district:
 *                 type: string
 *                 example: "Pune"
 *               language:
 *                 type: string
 *                 enum: [en, hi, mr, ta, bn, te]
 *                 example: "en"
 *     responses:
 *       200:
 *         description: Crop recommendation generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     recommendedCrop:
 *                       type: string
 *                     confidenceScore:
 *                       type: number
 *                     strategyTitle:
 *                       type: string
 *                     reasoning:
 *                       type: string
 *                     soilCompatibility:
 *                       type: string
 *                     demandTrend:
 *                       type: string
 */
router.post("/crop-recommendation", protect, aiRateLimiter, cropRecommendation);

/**
 * @swagger
 * /ai/profit-estimation:
 *   post:
 *     summary: Estimate profit for farming
 *     tags: [AI]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - crop
 *               - areaAcres
 *               - budget
 *               - location
 *             properties:
 *               crop:
 *                 type: string
 *                 example: "wheat"
 *               areaAcres:
 *                 type: number
 *                 example: 5
 *               budget:
 *                 type: number
 *                 example: 50000
 *               location:
 *                 type: string
 *                 example: "Punjab"
 *               language:
 *                 type: string
 *                 enum: [en, hi, mr, ta, bn, te]
 *                 example: "en"
 *     responses:
 *       200:
 *         description: Profit estimation generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     estimatedYield:
 *                       type: number
 *                     marketPrice:
 *                       type: number
 *                     revenue:
 *                       type: number
 *                     netProfit:
 *                       type: number
 *                     roi:
 *                       type: number
 *                     riskAlert:
 *                       type: string
 */
router.post("/profit-estimation", protect, aiRateLimiter, profitEstimation);

/**
 * @swagger
 * /ai/market-trends:
 *   post:
 *     summary: Analyze market trends for crops
 *     tags: [AI]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - crop
 *               - location
 *             properties:
 *               crop:
 *                 type: string
 *                 example: "rice"
 *               location:
 *                 type: string
 *                 example: "Andhra Pradesh"
 *               language:
 *                 type: string
 *                 enum: [en, hi, mr, ta, bn, te]
 *                 example: "en"
 *     responses:
 *       200:
 *         description: Market trends analyzed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     demandStatus:
 *                       type: string
 *                     priceForecast:
 *                       type: string
 *                     pestAlert:
 *                       type: string
 *                     logisticsTip:
 *                       type: string
 */
router.post("/market-trends", protect, aiRateLimiter, marketTrends);

/**
 * @swagger
 * /ai/buyer-analytics:
 *   post:
 *     summary: Get buyer procurement analytics
 *     tags: [AI]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - buyerId
 *               - targetCrops
 *             properties:
 *               buyerId:
 *                 type: string
 *                 example: "507f1f77bcf86cd799439011"
 *               targetCrops:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["wheat", "rice"]
 *               language:
 *                 type: string
 *                 enum: [en, hi, mr, ta, bn, te]
 *                 example: "en"
 *     responses:
 *       200:
 *         description: Buyer analytics generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     procurementSavings:
 *                       type: string
 *                     optimalSourcingWindow:
 *                       type: string
 *                     supplyVolatility:
 *                       type: string
 *                     priceForecast:
 *                       type: string
 *                     qualityAdvice:
 *                       type: string
 */
router.post("/buyer-analytics", protect, aiRateLimiter, buyerAnalytics);

/**
 * @swagger
 * /ai/chat:
 *   post:
 *     summary: Chat with KrishiSetu AI Assistant
 *     tags: [AI]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userRole
 *               - pageContext
 *               - question
 *             properties:
 *               userRole:
 *                 type: string
 *                 enum: [farmer, buyer, admin]
 *                 example: "farmer"
 *               pageContext:
 *                 type: string
 *                 example: "dashboard"
 *               question:
 *                 type: string
 *                 example: "What crops should I plant this season?"
 *               language:
 *                 type: string
 *                 enum: [en, hi, mr, ta, bn, te]
 *                 example: "en"
 *     responses:
 *       200:
 *         description: Chat response generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     answer:
 *                       type: string
 *                     decisionMatrix:
 *                       type: array
 *                       items:
 *                         type: string
 *                     suggestedQuestions:
 *                       type: array
 *                       items:
 *                         type: string
 */
router.post("/chat", protect, aiRateLimiter, chat);

module.exports = router;
