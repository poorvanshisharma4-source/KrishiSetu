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

const buildDemandForecastPrompt = (data) => {
  return `You are an agricultural demand forecasting AI expert. Predict future demand for the following crop:

  Crop: ${data.crop}
  Location: ${data.location}

  Return a JSON object with this exact structure:
  {
    "demandLevel": "string (high/medium/low)",
    "expectedDemandPeriod": "string",
    "demandTrend": "string",
    "recommendation": "string"
  }`;
};

const buildProfitEstimationPrompt = (data) => {
  return `You are an agricultural profit estimation expert.

Crop: ${data.crop}
Area: ${data.quantity} acres
Location: ${data.location}
Budget: ₹${data.budget}

Return a JSON object with this exact structure:
{
  "estimation": {
    "totalInvestment": "string",
    "expectedYield": "string",
    "grossIncome": "string",
    "netProfit": "string",
    "profitMargin": "string",
    "breakEven": "string"
  },
  "factors": [
    "string",
    "string",
    "string"
  ],
  "tips": [
    "string",
    "string",
    "string"
  ]
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
  buildDemandForecastPrompt,
  buildBuyerAnalyticsPrompt,
  buildChatPrompt,
};
