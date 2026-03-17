import { useContext, useState } from "react";
import { WebhookContext } from "../context/WebhookContext";
import EventModal from "../components/EventModal";

const QueueMonitor = () => {
  const { events } = useContext(WebhookContext);

  const [filter, setFilter] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents =
    filter === "all" ? events : events.filter((e) => e.status === filter);

  return (
    <div className="page">
      <p className="page-desc">
        Monitor live webhook events waiting to be processed by delivery workers.
      </p>

      {/* Filter Buttons */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("delivered")}>Delivered</button>
        <button onClick={() => setFilter("failed")}>Failed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      {/* Queue Stats */}
      <div className="queue-stats">
        <div className="queue-card">
          <span>Queue Size</span>
          <h2>{filteredEvents.length}</h2>
        </div>

        <div className="queue-card">
          <span>Processing Rate</span>
          <h2>18 / sec</h2>
        </div>

        <div className="queue-card">
          <span>Active Workers</span>
          <h2>3</h2>
        </div>

        <div className="queue-card">
          <span>Oldest Job</span>
          <h2>12s</h2>
        </div>
      </div>

      {/* Queue Table */}
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Event ID</th>
              <th>Endpoint</th>
              <th>Status</th>
              <th>Attempts</th>
              <th>Queued</th>
            </tr>
          </thead>

          <tbody>
            {filteredEvents.length === 0 ? (
              <tr>
                <td colSpan="5">No events found</td>
              </tr>
            ) : (
              filteredEvents.map((event) => (
                <tr
                  key={event._id}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedEvent(event)}
                >
                  <td>{event._id.slice(0, 6)}</td>

                  <td>/test-webhook</td>

                  <td
                    className={
                      event.status === "delivered"
                        ? "status-green"
                        : event.status === "failed"
                          ? "status-red"
                          : "status-yellow"
                    }
                  >
                    {event.status}
                  </td>

                  <td>{event.retries}</td>

                  <td>
                    {event.createdAt
                      ? new Date(event.createdAt).toLocaleTimeString()
                      : "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Event Details Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
};

export default QueueMonitor;
