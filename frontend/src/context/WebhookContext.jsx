import { createContext, useState, useEffect } from "react";
import { fetchEvents, triggerWebhook as triggerAPI } from "../services/api";

export const WebhookContext = createContext();

export const WebhookProvider = ({ children }) => {

  const [events, setEvents] = useState([]);
  const [notification, setNotification] = useState("");

  const loadEvents = async () => {
    try {
      const data = await fetchEvents();
      setEvents(data);
    } catch (err) {
      console.error("Failed to fetch events", err);
    }
  };

  const triggerWebhook = async () => {
    try {
      await triggerAPI();

      setNotification("Webhook event triggered!");

      loadEvents();

      setTimeout(() => {
        setNotification("");
      }, 3000);

    } catch (error) {
      console.error("Trigger failed", error);
    }
  };

  useEffect(() => {
    loadEvents();

    const interval = setInterval(loadEvents, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <WebhookContext.Provider
      value={{
        events,
        triggerWebhook,
        notification
      }}
    >
      {children}
    </WebhookContext.Provider>
  );
};