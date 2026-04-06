const axios = require("axios");

const sendWebhook = async (event) => {
  try {
    const res = await axios.post(event.targetUrl, event.payload);

    event.status = "delivered";
    event.response = res.data;

    await event.save();

    console.log("✅ Webhook sent");

  } catch (err) {
    event.attempts += 1;

    if (event.attempts >= event.maxAttempts) {
      console.log("⛔ Max attempts reached");
      event.status = "failed";
    } else {
      event.status = "failed";
      event.nextRetryAt = new Date(Date.now() + 5000);
    }

    await event.save();

    console.log("❌ Webhook failed:", err.message);
  }
};

module.exports = { sendWebhook };