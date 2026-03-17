import { useContext } from "react";
import { WebhookContext } from "../context/WebhookContext";

const SystemMetrics = () => {

  const { events } = useContext(WebhookContext);

  const total = events.length;

  const delivered = events.filter(
    (e) => e.status === "delivered"
  ).length;

  const failed = events.filter(
    (e) => e.status === "failed"
  ).length;

  const pending = events.filter(
    (e) => e.status === "pending"
  ).length;

  const totalRetries = events.reduce(
    (sum, e) => sum + e.retries,
    0
  );

  const successRate =
    total === 0
      ? 0
      : Math.round((delivered / total) * 100);

  return (
    <div className="page">

      <p className="page-desc">
        Monitor system health and webhook delivery performance.
      </p>

      <div className="metrics-grid">

        <div className="metric-card">
          <span>Total Events</span>
          <h2>{total}</h2>
        </div>

        <div className="metric-card">
          <span>Delivered</span>
          <h2>{delivered}</h2>
        </div>

        <div className="metric-card">
          <span>Failed</span>
          <h2>{failed}</h2>
        </div>

        <div className="metric-card">
          <span>Pending</span>
          <h2>{pending}</h2>
        </div>

        <div className="metric-card">
          <span>Total Retries</span>
          <h2>{totalRetries}</h2>
        </div>

        <div className="metric-card">
          <span>Success Rate</span>
          <h2>{successRate}%</h2>
        </div>

      </div>

    </div>
  );
};

export default SystemMetrics;