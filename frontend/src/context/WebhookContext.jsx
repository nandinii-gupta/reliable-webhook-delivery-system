import { createContext, useState, useEffect } from "react";
import {
  fetchEvents,
  triggerWebhook as triggerAPI,
  retryEvent
} from "../services/api";

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

      setNotification("Webhook event triggered ✅");

      loadEvents();

    } catch (error) {
      console.error("Trigger failed", error);
      setNotification("Failed to trigger webhook ❌");
    }

    setTimeout(() => setNotification(""), 2500);
  };


  const retryWebhook = async (id) => {
    try {
      await retryEvent(id);

      setNotification("Retry attempted 🔁");

      loadEvents();

    } catch (error) {
      console.error("Retry failed", error);
      setNotification("Retry failed ❌");
    }

    setTimeout(() => setNotification(""), 2500);
  };

  useEffect(() => {

    loadEvents();

    const interval = setInterval(() => {
      loadEvents();
    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (
    <WebhookContext.Provider
      value={{
        events,
        triggerWebhook,
        retryWebhook,   
        notification,
        refreshEvents: loadEvents
      }}
    >
      {children}
    </WebhookContext.Provider>
  );
};