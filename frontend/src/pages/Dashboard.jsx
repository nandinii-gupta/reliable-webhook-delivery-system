import { useContext } from "react";
import { WebhookContext } from "../context/WebhookContext";

import StatCard from "../components/StatCard";
import DeliveryChart from "../components/charts/DeliveryChart";
import RetryChart from "../components/charts/RetryChart";
import SuccessPieChart from "../components/charts/SuccessPieChart";
import RetryWorker from "../components/RetryWorker";
import QueueTable from "../components/QueueTable";
import FailedTable from "../components/FailedTable";

const Dashboard = () => {

  const { events, triggerWebhook, notification } = useContext(WebhookContext);

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

  return (
    <div className="dashboard">

      {}
      {notification && (
        <div className="toast">
          {notification}
        </div>
      )}

      {}
      <div className="simulator">
        <button onClick={triggerWebhook}>
          Trigger Webhook Event
        </button>
      </div>

      {}
      <div className="stats-grid">

        <StatCard
          title="Total Webhooks"
          value={total}
          color="#3b82f6"
        />

        <StatCard
          title="Successful Deliveries"
          value={delivered}
          color="#22c55e"
        />

        <StatCard
          title="Pending Retries"
          value={pending}
          color="#f59e0b"
        />

        <StatCard
          title="Failed Deliveries"
          value={failed}
          color="#ef4444"
        />

      </div>

      {}
      <div className="charts-grid">

        <div className="chart-card">
          <h3>Webhook Delivery Trend</h3>
          <DeliveryChart events={events} />
        </div>

        <div className="chart-card">
          <h3>Retry Attempts</h3>
          <RetryChart events={events} />
        </div>

        {}
        <div className="chart-card">
          <h3>Delivery Distribution</h3>
          <SuccessPieChart events={events} />
        </div>

      </div>

      {}
      <div className="worker-grid">
        <RetryWorker />
      </div>
    </div>
  );
};

export default Dashboard;