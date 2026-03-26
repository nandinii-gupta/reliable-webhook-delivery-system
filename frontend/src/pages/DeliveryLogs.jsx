import { useContext } from "react";
import { WebhookContext } from "../context/WebhookContext";
import { deleteEvent } from "../services/api";

const DeliveryLogs = () => {

  const { events, retryWebhook, refreshEvents } = useContext(WebhookContext);

  const completed = events.filter(
    (e) => e.status === "delivered" || e.status === "failed"
  );

  const handleDelete = async (id) => {
    await deleteEvent(id);
    refreshEvents(); 
  };


  const handleRetry = async (id) => {
    await retryWebhook(id);
  };

  return (
    <div className="page">

      {/* <h2>Delivery Logs</h2> */}
      <p className="page-desc">
        Historical webhook delivery results with retry actions.
      </p>

      <div className="card">
        <table className="table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Endpoint</th>
              <th>Status</th>
              <th>Retries</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {completed.map((event) => (
              <tr key={event._id}>

                <td>{event._id.slice(-5)}</td>

                <td>{event.endpoint || "/test-webhook"}</td>

                <td className={`status-text ${event.status}`}>
                  {event.status.toUpperCase()}
                </td>

                <td>{event.retries}</td>

                <td>
                  {new Date(event.createdAt).toLocaleString()}
                </td>

                <td>
                  <div className="action-group">

                    {event.status === "failed" && (
                      <button
                        className="retry-btn"
                        onClick={() => handleRetry(event._id)}
                      >
                        Retry
                      </button>
                    )}

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(event._id)}
                    >
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default DeliveryLogs;