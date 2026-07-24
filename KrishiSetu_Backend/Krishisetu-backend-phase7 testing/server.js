require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const connectDB = require("./config/db");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const authRoutes = require("./routes/authRoutes");
const requirementRoutes = require("./routes/requirementRoutes");
const cropRoutes = require("./routes/cropRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const requestRoutes = require("./routes/requestRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const contractRoutes = require("./routes/contractRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Request logging — concise in production, verbose ("dev") locally.
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// API Documentation (Swagger / OpenAPI)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);
app.use("/api/requirements", requirementRoutes);
app.use("/api/crops", cropRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contracts", contractRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/ai", aiRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 KrishiSetu Backend is Running...");
});

// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "KrishiSetu Backend is Healthy",
    timestamp: new Date().toISOString(),
  });
});

// 404 handler — must come after all routes, before the error handler.
app.use(notFound);

// Centralized error handler — must be registered last (4-arg signature).
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  console.log(`📘 API docs available at /api-docs`);
});
