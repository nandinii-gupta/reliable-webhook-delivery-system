// controllers/webhookController.js
const Webhook = require("../models/Webhook");

exports.createWebhook = async (req, res) => {
  try {
    const webhook = new Webhook(req.body);
    await webhook.save();

    res.json({ message: "Webhook queued" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWebhooks = async (req, res) => {
  const data = await Webhook.find().sort({ createdAt: -1 });
  res.json(data);
};