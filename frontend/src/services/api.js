const BASE_URL = "http://localhost:5000";

export const fetchEvents = async () => {
  const res = await fetch(`${BASE_URL}/events`);
  return res.json();
};

export const triggerWebhook = async () => {
  const res = await fetch(`${BASE_URL}/events/trigger`, {
    method: "POST",
  });
  return res.json();
};

export const retryWebhook = async (id) => {
  const res = await fetch(`${BASE_URL}/events/retry/${id}`, {
    method: "POST",
  });
  return res.json();
};