const buildCropRecommendationPrompt = (data) => {
  return `You are an agricultural expert AI. Provide crop recommendations based on the following data:
  
  Soil Type: ${data.soilType}
  Season: ${data.season}
  State: ${data.state}
  District: ${data.district}
  
  Return a JSON object with this exact structure:
  {
    "recommendedCrop": "string",
    "confidenceScore": number (0-100),
    "strategyTitle": "string",
    "reasoning": "string",
    "soilCompatibility": "string",
    "demandTrend": "string"
  }`;
};

const buildProfitEstimationPrompt = (data) => {
  return `You are an agricultural economics expert. Estimate profit for the following farming scenario:
  
  Crop: ${data.crop}
  Area (acres): ${data.areaAcres}
  Budget: ${data.budget}
  Location: ${data.location}
  
  Return a JSON object with this exact structure:
  {
    "estimatedYield": number (in quintals),
    "marketPrice": number (per quintal),
    "revenue": number,
    "netProfit": number,
    "roi": number (percentage),
    "riskAlert": "string"
  }`;
};

const buildMarketTrendsPrompt = (data) => {
  return `You are an agricultural market analyst. Analyze market trends for:
  
  Crop: ${data.crop}
  Location: ${data.location}
  
  Return a JSON object with this exact structure:
  {
    "demandStatus": "string (high/medium/low)",
    "priceForecast": "string",
    "pestAlert": "string",
    "logisticsTip": "string"
  }`;
};

const buildBuyerAnalyticsPrompt = (data) => {
  return `You are a procurement analytics expert. Provide buyer analytics for:
  
  Buyer ID: ${data.buyerId}
  Target Crops: ${data.targetCrops.join(", ")}
  
  Return a JSON object with this exact structure:
  {
    "procurementSavings": "string",
    "optimalSourcingWindow": "string",
    "supplyVolatility": "string (high/medium/low)",
    "priceForecast": "string",
    "qualityAdvice": "string"
  }`;
};

const buildChatPrompt = (data) => {
  return `You are KrishiSetu AI Assistant, an agricultural expert helping farmers and buyers.
  
  User Role: ${data.userRole}
  Page Context: ${data.pageContext}
  
  User Question: ${data.question}
  
  Provide helpful, context-aware assistance. Return a JSON object with this exact structure:
  {
    "answer": "string",
    "decisionMatrix": ["string", "string"],
    "suggestedQuestions": ["string", "string", "string"]
  }`;
};

module.exports = {
  buildCropRecommendationPrompt,
  buildProfitEstimationPrompt,
  buildMarketTrendsPrompt,
  buildBuyerAnalyticsPrompt,
  buildChatPrompt,
};
