import DeliveryChart from "../components/charts/DeliveryChart";
import RetryChart from "../components/charts/RetryChart";

const SystemMetrics = () => {

  return (
    <div className="page">

      <p className="page-desc">
        Monitor system performance, delivery throughput, retry patterns and worker processing health.
      </p>


      {/* Metric Cards */}
      <div className="metrics-cards">

        <div className="metric-card">
          <span>Throughput</span>
          <h2>24 events/sec</h2>
        </div>

        <div className="metric-card">
          <span>Success Rate</span>
          <h2>96.2%</h2>
        </div>

        <div className="metric-card">
          <span>Retry Rate</span>
          <h2>3.1%</h2>
        </div>

        <div className="metric-card">
          <span>Worker Latency</span>
          <h2>180 ms</h2>
        </div>

      </div>


      {/* Charts */}
      <div className="metrics-grid">

        <div className="chart-card">
          <h3>Webhook Throughput</h3>
          <DeliveryChart />
        </div>

        <div className="chart-card">
          <h3>Retry Distribution</h3>
          <RetryChart />
        </div>

      </div>

    </div>
  );
};

export default SystemMetrics;