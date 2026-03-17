import { useContext } from "react";
import { WebhookContext } from "../context/WebhookContext";
import { retryWebhook } from "../services/api";

const FailedTable = () => {
  const { events, loadEvents } = useContext(WebhookContext);

  const failedEvents = events.filter((event) => event.status === "failed");

  const handleRetry = async (id) => {
    await retryWebhook(id);
    loadEvents();
  };

  return (
    <div className="table-card">
      <h3>Recent Failed Deliveries</h3>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Event</th>
            <th>Endpoint</th>
            <th>Retry</th>
          </tr>
        </thead>

        <tbody>
          {failedEvents.length === 0 ? (
            <tr>
              <td colSpan="4">No failed deliveries</td>
            </tr>
          ) : (
            failedEvents.map((event) => (
              <tr key={event._id}>
                <td>{event._id.slice(0, 6)}</td>
                <td>{event.payload?.message || "Webhook Event"}</td>
                <td>/test-webhook</td>

                <td>
                  <button
                    onClick={() => handleRetry(event._id)}
                    style={{
                      background: "#6366f1",
                      color: "#fff",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      fontSize: "12px",
                    }}
                  >
                    Retry
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FailedTable;