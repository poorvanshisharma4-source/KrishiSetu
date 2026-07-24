const swaggerJSDoc = require("swagger-jsdoc");

// Reads @swagger JSDoc comment blocks out of the route files and turns
// them into a single OpenAPI 3.0 spec — no route/controller code is
// touched or executed, this is purely doc generation.
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "KrishiSetu Backend API",
    version: "2.0.0",
    description:
      "AI-powered Demand-Driven Contract Farming platform — REST API for farmers, buyers, and admins. Phase 7 includes Gemini AI integration and multi-language support.",
  },
  servers: [
  {
    url: "/api",
    description: "Base API path",
  },
],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      ApiResponse: {
        type: "object",
        properties: {
          success: { type: "boolean" },
          message: { type: "string" },
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
};

const options = {
  swaggerDefinition,
  // Glob path(s) to the files containing @swagger JSDoc annotations.
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
