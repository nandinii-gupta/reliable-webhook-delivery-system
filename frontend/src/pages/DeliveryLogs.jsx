import { useContext } from "react";
import { WebhookContext } from "../context/WebhookContext";

const DeliveryLogs = () => {

  const { events } = useContext(WebhookContext);

  return (
    <div className="page">

      <p className="page-desc">
        Track webhook delivery attempts and retry activity across endpoints.
      </p>

      <div className="card">

        <table className="table">

          <thead>
            <tr>
              <th>Event ID</th>
              <th>Endpoint</th>
              <th>Status</th>
              <th>Retries</th>
              <th>Timestamp</th>
            </tr>
          </thead>

          <tbody>

            {events.length === 0 ? (
              <tr>
                <td colSpan="5">No delivery logs yet</td>
              </tr>
            ) : (
              events.map((event) => (
                <tr key={event._id}>

                  <td>{event._id.slice(0,6)}</td>

                  <td>/test-webhook</td>

                  <td
                    className={
                      event.status === "delivered"
                        ? "status-green"
                        : event.status === "failed"
                        ? "status-red"
                        : "status-blue"
                    }
                  >
                    {event.status}
                  </td>

                  <td>{event.retries}</td>

                  <td>
                    {event.createdAt
                      ? new Date(event.createdAt).toLocaleString()
                      : "-"}
                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default DeliveryLogs;