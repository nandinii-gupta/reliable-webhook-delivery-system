const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  payload: Object,
  status: {
    type: String,
    enum: ["pending", "delivered", "failed"],
    default: "pending",
  },
  retries: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Event", eventSchema);