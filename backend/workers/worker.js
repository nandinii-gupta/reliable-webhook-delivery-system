const Webhook = require("../models/Webhook");
const { sendWebhook } = require("../services/webhookService");

const startWorker = () => {
  setInterval(async () => {
    console.log("🔄 Checking retries...");

    const events = await Webhook.find({
      status: "failed",
      attempts: { $lt: 5 },
      nextRetryAt: { $lte: new Date() }
    });

    for (let event of events) {
      await sendWebhook(event);
    }

  }, 5000);
};

module.exports = { startWorker };