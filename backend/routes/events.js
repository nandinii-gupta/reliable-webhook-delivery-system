const express = require("express");
const router = express.Router();
const axios = require("axios");
const Event = require("../models/Event");

const WEBHOOK_URL = "http://localhost:5000/test-webhook";

router.post("/trigger", async (req, res) => {
  try {
    const event = new Event({
      payload: { message: "Webhook triggered!" },
    });

    await event.save();

    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const events = await Event.find().sort({ createdAt: -1 });
  res.json(events);
});

router.post("/retry/:id", async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (!event) return res.status(404).json({ error: "Event not found" });

  try {
    await axios.post(WEBHOOK_URL, event.payload);

    event.status = "delivered";
    await event.save();

    res.json(event);
  } catch (error) {
    event.retries += 1;
    event.status = "failed";

    await event.save();

    res.json(event);
  }
});

module.exports = router;