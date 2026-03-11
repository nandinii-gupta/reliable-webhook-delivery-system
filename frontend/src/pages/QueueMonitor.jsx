import { useContext } from "react";
import { WebhookContext } from "../context/WebhookContext";

const QueueMonitor = () => {

  const { queue } = useContext(WebhookContext);

  return (
    <div className="page">

      <p className="page-desc">
        Monitor live webhook events waiting to be processed by delivery workers.
      </p>


      {/* Queue Stats */}
      <div className="queue-stats">

        <div className="queue-card">
          <span>Queue Size</span>
          <h2>{queue.length}</h2>
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

            {queue.map((item) => (
              <tr key={item.id}>

                <td>{item.id}</td>

                <td>{item.endpoint}</td>

                <td className="status-blue">
                  {item.status}
                </td>

                <td>{item.attempts}</td>

                <td>{item.time}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default QueueMonitor;