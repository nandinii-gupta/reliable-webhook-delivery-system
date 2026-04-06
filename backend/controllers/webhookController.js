const Webhook = require("../models/Webhook");
const { sendWebhook } = require("../services/webhookService");

// ✅ Create Webhook
exports.createWebhook = async (req, res) => {
  try {
    const webhook = new Webhook({
      ...req.body,
      idempotencyKey: req.body.idempotencyKey || Date.now().toString(),
      status: "pending",
      attempts: 0,
      maxAttempts: 5,
      nextRetryAt: new Date()
    });

    await webhook.save();

    // 🔥 send webhook (non-blocking)
    sendWebhook(webhook);

    res.json({ message: "Webhook queued & processing started" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get All Webhooks (Logs)
exports.getWebhooks = async (req, res) => {
  try {
    const data = await Webhook.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Stats API
exports.getStats = async (req, res) => {
  try {
    const total = await Webhook.countDocuments();
    const delivered = await Webhook.countDocuments({ status: "delivered" });
    const failed = await Webhook.countDocuments({ status: "failed" });
    const pending = await Webhook.countDocuments({ status: "pending" });

    res.json({ total, delivered, failed, pending });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};