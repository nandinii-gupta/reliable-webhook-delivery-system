const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const eventRoutes = require("./routes/events");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Webhook backend running");
});


app.post("/test-webhook", (req, res) => {
  console.log("Webhook received:", req.body);

  if (Math.random() < 0.6) {
    return res.status(500).send("Webhook failed");
  }

  res.send("Webhook delivered successfully");
});

app.use("/events", eventRoutes);
require("./workers/webhookWorker");

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});