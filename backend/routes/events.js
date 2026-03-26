const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed" });
  }
});


router.post("/retry/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    // simulate retry
    const success = Math.random() > 0.4;

    event.status = success ? "delivered" : "failed";
    event.retries += 1;

    await event.save();

    res.json(event);

  } catch (error) {
    res.status(500).json({ error: "Retry failed" });
  }
});

router.post("/trigger", async (req, res) => {
  try {
    const endpoints = [
      "/api/payments",
      "/api/orders",
      "/api/users"
    ];

    const isFailed = Math.random() < 0.3;

    const event = new Event({
      payload: { message: "Webhook triggered!" },
      endpoint: endpoints[Math.floor(Math.random() * endpoints.length)],
      status: "pending",
      retries: 0,
    });

    await event.save();

    setTimeout(async () => {
      event.status = isFailed ? "failed" : "delivered";
      event.retries = isFailed ? Math.floor(Math.random() * 3) + 1 : 0;
      await event.save();
    }, 9000);

    res.json(event);

  } catch (err) {
    res.status(500).json({ error: "Trigger failed" });
  }
});

router.delete("/:id", async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

router.delete("/", async (req, res) => {
  await Event.deleteMany({});
  res.json({ message: "Cleared" });
});

module.exports = router;