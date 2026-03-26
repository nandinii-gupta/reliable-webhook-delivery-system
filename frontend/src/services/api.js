const BASE_URL = "http://127.0.0.1:5000";

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

export const deleteEvent = async (id) => {
  const res = await fetch(`${BASE_URL}/events/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

export const clearEvents = async () => {
  const res = await fetch(`${BASE_URL}/events`, {
    method: "DELETE",
  });
  return res.json();
};

export const retryEvent = async (id) => {
  const res = await fetch(`http://localhost:5000/events/retry/${id}`, {
    method: "POST",
  });
  return res.json();
};