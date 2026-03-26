import { useContext } from "react";
import { WebhookContext } from "../context/WebhookContext";

const QueueMonitor = () => {

  const { events } = useContext(WebhookContext);

  const queue = events.filter(e => e.status === "pending");
  const recent = events.slice(0, 5);

  return (
    <div className="page">

      {/* HEADER */}
      <div className="page-header">
        <div>
          {/* <h2>Webhook Queue Monitor</h2> */}
          <p className="page-desc">
            Live processing of webhook events
          </p>
        </div>

        <span className={`status-badge ${queue.length > 0 ? "active" : "idle"}`}>
          {queue.length > 0 ? "● Processing" : "● Idle"}
        </span>
      </div>

      {/* STATS */}
      <div className="stats-grid">

        <div className="stat-card">
          <h4>Queue Size</h4>
          <p>{queue.length}</p>
        </div>

        <div className="stat-card">
          <h4>Status</h4>
          <p>{queue.length > 0 ? "Active" : "Idle"}</p>
        </div>

        <div className="stat-card">
          <h4>Recent Events</h4>
          <p>{recent.length}</p>
        </div>

      </div>

      {/* TABLE */}
      <div className="card">
        <table className="table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Endpoint</th>
              <th>Retries</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {/* ACTIVE QUEUE */}
            {queue.length > 0 &&
              queue.map(event => (
                <tr key={event._id}>
                  <td>{event._id.slice(-5)}</td>
                  <td>{event.endpoint || "/test-webhook"}</td>
                  <td>{event.retries}</td>
                  <td className="status-text pending">
                    PROCESSING
                  </td>
                </tr>
              ))
            }

            {/* FALLBACK */}
            {queue.length === 0 &&
              recent.map(event => (
                <tr key={event._id}>
                  <td>{event._id.slice(-5)}</td>
                  <td>{event.endpoint || "/test-webhook"}</td>
                  <td>{event.retries}</td>
                  <td className={`status-text ${event.status}`}>
                    {event.status.toUpperCase()}
                  </td>
                </tr>
              ))
            }

          </tbody>

        </table>
      </div>

      {}
      {queue.length === 0 && (
        <div className="empty-state">
          <p>🚀 System is healthy</p>
          <span>No pending events in queue</span>
        </div>
      )}

    </div>
  );
};

export default QueueMonitor;