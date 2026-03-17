import { useContext } from "react";
import { WebhookContext } from "../context/WebhookContext";

const QueueTable = () => {
  const { events } = useContext(WebhookContext) || { events: [] };

  return (
    <div className="table-card">
      <h3>Webhook Queue</h3>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Retries</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>
          {!events || events.length === 0 ? (
            <tr>
              <td colSpan="4">No events yet</td>
            </tr>
          ) : (
            events.map((event) => (
              <tr key={event._id}>
                <td>{event._id?.slice(0, 6)}</td>
                <td>{event.status}</td>
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
  );
};

export default QueueTable;