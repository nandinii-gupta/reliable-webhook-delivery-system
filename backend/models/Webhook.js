const mongoose = require("mongoose");

const webhookSchema = new mongoose.Schema({
  targetUrl: {
    type: String,
    required: true,
  },
  payload: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "delivered", "failed"],
    default: "pending",
  },
  attempts: {
    type: Number,
    default: 0,
  },
  maxAttempts: {
    type: Number,
    default: 5,
  },
  nextRetryAt: {
    type: Date,
    default: Date.now,
  },
  idempotencyKey: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Webhook", webhookSchema);
