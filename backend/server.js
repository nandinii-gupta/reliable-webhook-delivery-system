require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors()); 
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Reliable Webhook Delivery System API is running...");
});


app.use("/api/webhooks", require("./routes/webhookRoutes"));


const PORT = process.env.PORT || 5000;

process.on("SIGINT", () => {
  console.log("Server shutting down gracefully...");
  process.exit();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
