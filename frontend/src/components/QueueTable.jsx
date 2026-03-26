import { useContext } from "react";
import { WebhookContext } from "../context/WebhookContext";

const QueueTable = () => {

  const { events, refreshEvents } = useContext(WebhookContext) || { events: [] };

  const handleDelete = async (id) => {
    try {

      await fetch(`http://localhost:5000/events/${id}`, {
        method: "DELETE"
      });

      refreshEvents(); 

    } catch (error) {
      console.error("Delete failed");
    }
  };

  const getStatusClass = (status) => {

    if (status === "delivered") return "status-green";

    if (status === "failed") return "status-red";

    return "status-yellow";

  };

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
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {!events || events.length === 0 ? (
            <tr>
              <td colSpan="5">No events yet</td>
            </tr>
          ) : (

            events.map((event) => (

              <tr key={event._id}>

                <td>{event._id?.slice(0,6)}</td>

                <td>
                  <span className={getStatusClass(event.status)}>
                    {event.status}
                  </span>
                </td>

                <td>{event.retries}</td>

                <td>
                  {event.createdAt
                    ? new Date(event.createdAt).toLocaleTimeString()
                    : "-"}
                </td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(event._id)}
                  >
                    Delete
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

export default QueueTable;