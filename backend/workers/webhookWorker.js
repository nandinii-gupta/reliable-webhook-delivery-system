const axios = require("axios");
const Event = require("../models/Event");

const WEBHOOK_URL = "http://localhost:5000/test-webhook";

const processEvents = async () => {

  const events = await Event.find({ status: "pending" });

  for (let event of events) {

    try {

      await axios.post(WEBHOOK_URL, event.payload);

      event.status = "delivered";

      await event.save();

    } catch (error) {

      event.retries += 1;

      const delay = Math.pow(2, event.retries) * 1000;

      console.log(
        `Retrying event ${event._id} after ${delay}ms`
      );

      setTimeout(async () => {

        if (event.retries >= 3) {
          event.status = "failed";
        }

        await event.save();

      }, delay);

    }

  }

};

module.exports = processEvents;