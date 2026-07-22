require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const requirementRoutes = require("./routes/requirementRoutes");
const requestRoutes = require("./routes/requestRoutes");

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/requirements", requirementRoutes);
app.use("/api/requests", requestRoutes);

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

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});