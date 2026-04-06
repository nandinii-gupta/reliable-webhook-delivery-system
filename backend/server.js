require("dotenv").config();
const { startWorker } = require("./workers/worker");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb+srv://nikki:00000000@cluster0.sqfvor7.mongodb.net/webhookDB")
  .then(() => {
    console.log("MongoDB Connected ✅");

    // 👇 IMPORTANT FIX
    startWorker();
  })
  .catch(err => console.log("DB Error:", err));
// ✅ IMPORT ROUTES
const webhookRoutes = require("./routes/webhookRoutes");

// ✅ USE ROUTES
app.use("/api/webhooks", webhookRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend working 🚀");
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});