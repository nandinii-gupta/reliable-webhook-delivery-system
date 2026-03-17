const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const eventRoutes = require("./routes/events");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Backend working");
});

app.use("/events", eventRoutes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});