const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("🚀 KrishiSetu Backend is Running...");
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "KrishiSetu Backend is Healthy",
    timestamp: new Date().toISOString(),
  });
});