const { generateResponse } = require("../services/groqService");
const {
  buildCropRecommendationPrompt,
  buildProfitEstimationPrompt,
  buildMarketTrendsPrompt,
  buildBuyerAnalyticsPrompt,
  buildChatPrompt,
} = require("../utils/promptBuilder");

const cropRecommendation = async (req, res) => {
  try {
    const { soilType, season, state, district } = req.body;

    if (!soilType || !season || !state || !district) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: soilType, season, state, district",
      });
    }

    const prompt = buildCropRecommendationPrompt({ soilType, season, state, district });
    const result = await generateResponse(prompt, req.language);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Crop recommendation error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate crop recommendation",
    });
  }
};

const profitEstimation = async (req, res) => {
  try {
    const { crop, areaAcres, budget, location } = req.body;

    if (!crop || !areaAcres || !budget || !location) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: crop, areaAcres, budget, location",
      });
    }

    const prompt = buildProfitEstimationPrompt({ crop, areaAcres, budget, location });
    const result = await generateResponse(prompt, req.language);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Profit estimation error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to estimate profit",
    });
  }
};

const marketTrends = async (req, res) => {
  try {
    const { crop, location } = req.body;

    if (!crop || !location) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: crop, location",
      });
    }

    const prompt = buildMarketTrendsPrompt({ crop, location });
    const result = await generateResponse(prompt, req.language);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Market trends error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to analyze market trends",
    });
  }
};

const buyerAnalytics = async (req, res) => {
  try {
    const { buyerId, targetCrops } = req.body;

    if (!buyerId || !targetCrops || !Array.isArray(targetCrops)) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: buyerId, targetCrops (array)",
      });
    }

    const prompt = buildBuyerAnalyticsPrompt({ buyerId, targetCrops });
    const result = await generateResponse(prompt, req.language);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Buyer analytics error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate buyer analytics",
    });
  }
};

const chat = async (req, res) => {
  try {
    const { userRole, pageContext, language, question } = req.body;

    if (!userRole || !pageContext || !question) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: userRole, pageContext, question",
      });
    }

    const prompt = buildChatPrompt({ userRole, pageContext, question });
    const result = await generateResponse(prompt, language || req.language);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process chat request",
    });
  }
};

module.exports = {
  cropRecommendation,
  profitEstimation,
  marketTrends,
  buyerAnalytics,
  chat,
};
