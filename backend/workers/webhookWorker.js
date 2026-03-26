const axios = require("axios");
const Event = require("../models/Event");

const WEBHOOK_URL = "http://localhost:5000/test-webhook";

const processWebhooks = async () => {

  const events = await Event.find({ status: "pending" });

  for (let event of events) {

    try {

      await axios.post(WEBHOOK_URL, event.payload);

      event.status = "delivered";

      await event.save();

      console.log("Webhook delivered:", event._id);

    } catch (error) {

      event.retries += 1;

      if (event.retries >= 3) {
        event.status = "failed";
      }

      await event.save();

      console.log("Webhook retry:", event._id);

    }

  }

};

setInterval(processWebhooks, 4000);