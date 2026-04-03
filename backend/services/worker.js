// services/worker.js

const axios = require("axios");
const Webhook = require("../models/Webhook");

const processWebhooks = async () => {
  const jobs = await Webhook.find({
    status: "pending",
    nextRetryAt: { $lte: new Date() }
  });

  for (let job of jobs) {
    try {
      await axios.post(job.targetUrl, job.payload);

      job.status = "delivered";
    } catch (err) {
      job.attempts += 1;

      if (job.attempts >= job.maxAttempts) {
        job.status = "failed";
      } else {
        job.nextRetryAt = new Date(Date.now() + 5000); // retry after 5 sec
      }
    }

    await job.save();
  }
};
// server.js
const processWebhooks = require("./services/worker");

setInterval(() => {
  processWebhooks();
}, 5000);
module.exports = processWebhooks;