import { useContext } from "react";
import { WebhookContext } from "../context/WebhookContext";

import StatCard from "../components/StatCard";
import DeliveryChart from "../components/charts/DeliveryChart";
import RetryChart from "../components/charts/RetryChart";
import RetryWorker from "../components/RetryWorker";
import QueueTable from "../components/QueueTable";
import FailedTable from "../components/FailedTable";

const Dashboard = () => {
  const { triggerWebhook, notification } = useContext(WebhookContext);

  return (
    <div className="dashboard">
      {/* Toast */}
      {notification && <div className="toast">{notification}</div>}

      {/* Button */}
      <div className="simulator">
        <button onClick={triggerWebhook}>Trigger Webhook Event</button>
      </div>
      {/* Stats Cards */}
      <div className="stats-grid">
        <StatCard title="Total Webhooks" value="128" color="#3b82f6" />

        <StatCard title="Successful Deliveries" value="98" color="#22c55e" />

        <StatCard title="Pending Retries" value="20" color="#f59e0b" />

        <StatCard title="Failed Deliveries" value="10" color="#ef4444" />
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3>Webhook Delivery Trend</h3>
          <DeliveryChart />
        </div>

        <div className="chart-card">
          <h3>Retry Attempts</h3>
          <RetryChart />
        </div>
      </div>

      {/* Worker Status */}
      <div className="worker-grid">
        <RetryWorker />
      </div>

      {/* Tables */}
      <div className="tables-grid">
        <QueueTable />

        <FailedTable />
      </div>
    </div>
  );
};

export default Dashboard;
