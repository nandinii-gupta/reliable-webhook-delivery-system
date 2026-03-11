import { createContext, useState } from "react";

export const WebhookContext = createContext();

export const WebhookProvider = ({ children }) => {
  const [queue, setQueue] = useState([
    { id: "evt_1023", endpoint: "/payments", status: "Processing", attempts: 1, time: "2s ago" },
    { id: "evt_1022", endpoint: "/orders", status: "Queued", attempts: 0, time: "5s ago" }
  ]);

  const [notification, setNotification] = useState("");

  const triggerWebhook = () => {
    const newEvent = {
      id: "evt_" + Math.floor(Math.random() * 9000 + 1000),
      endpoint: "/payments",
      status: "Queued",
      attempts: 0,
      time: "Just now"
    };

    setQueue(prev => [newEvent, ...prev]);

    setNotification("Webhook triggered successfully");

    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  return (
    <WebhookContext.Provider
      value={{ queue, triggerWebhook, notification }}
    >
      {children}
    </WebhookContext.Provider>
  );
};