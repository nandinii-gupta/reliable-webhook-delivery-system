const express = require("express");
const router = express.Router();
const Webhook = require("../models/Webhook");

const {
  createWebhook,
  getWebhooks,
  getStats
} = require("../controllers/webhookController");

// ✅ Trigger webhook
router.post("/webhook", createWebhook);

// ✅ Logs
router.get("/logs", getWebhooks);

// ✅ Stats (🔥 important)
router.get("/stats", getStats);

// ✅ Queue API (optional advanced)
router.post("/queue", async (req, res) => {
  try {
    const { targetUrl, payload, idempotencyKey } = req.body;

    const existing = await Webhook.findOne({ idempotencyKey });
    if (existing) {
      return res.status(200).json({ message: "Duplicate webhook ignored" });
    }

    const webhook = new Webhook({
      targetUrl,
      payload,
      idempotencyKey,
      status: "pending",
      attempts: 0,
      maxAttempts: 5,
      nextRetryAt: new Date()
    });

    await webhook.save();

    res.status(201).json({
      message: "Webhook queued successfully",
      webhook,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ fallback logs
router.get("/", async (req, res) => {
  try {
    const webhooks = await Webhook.find().sort({ createdAt: -1 });
    res.json(webhooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;