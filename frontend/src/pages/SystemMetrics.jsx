import { useContext } from "react";
import { WebhookContext } from "../context/WebhookContext";

const SystemMetrics = () => {
  const { events } = useContext(WebhookContext);

  const total = events.length;
  const delivered = events.filter(e => e.status === "delivered").length;
  const failed = events.filter(e => e.status === "failed").length;
  const pending = events.filter(e => e.status === "pending").length;

  const successRate = total ? ((delivered / total) * 100).toFixed(1) : 0;

  return (
    <div className="page">

      {}
      {/* <h2>System Performance</h2> */}
      <p className="page-desc">
        Real-time insights of webhook delivery system.
      </p>

      {}
      <div className="metrics-grid">

        <div className="metric-box">
          <span>Total Events</span>
          <h2>{total}</h2>
        </div>

        <div className="metric-box">
          <span>Success Rate</span>
          <h2 className="green">{successRate}%</h2>
        </div>

        <div className="metric-box">
          <span>Failures</span>
          <h2 className="red">{failed}</h2>
        </div>

        <div className="metric-box">
          <span>Pending</span>
          <h2 className="orange">{pending}</h2>
        </div>

      </div>

      {}
      <div className="card">
        <h3>Delivery Performance</h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${successRate}%` }}
          ></div>
        </div>

        <p className="progress-text">
          {successRate}% successful deliveries
        </p>
      </div>

      {}
      <div className="card insight-card">
        <h3>System Insight</h3>

        <p>
          {failed > 0
            ? "⚠️ Some webhook deliveries are failing. Retry mechanism is active."
            : "✅ System operating smoothly with high delivery success rate."}
        </p>
      </div>

    </div>
  );
};

export default SystemMetrics;