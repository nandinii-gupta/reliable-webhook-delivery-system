const QueueMonitor = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a" }}>
        Webhook Queue Monitor
      </h1>
      <p style={{ color: "#64748b", marginTop: "10px", maxWidth: "700px" }}>
        Real-time tracking of queued webhooks stored in MongoDB to ensure
        guaranteed delivery even during outages. Displays queue size,
        processing rate, and backlog health.
      </p>

      <div
        style={{
          marginTop: "30px",
          background: "#ffffff",
          padding: "24px",
          borderRadius: "18px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
        }}
      >
        <h3 style={{ fontSize: "20px", fontWeight: "700" }}>
          Current Queue Status
        </h3>
        <p style={{ marginTop: "12px", color: "#334155" }}>
          Queue Size: 20 webhooks<br />
          Processing Rate: 5 jobs/sec<br />
          Oldest Job: 2 minutes<br />
          System Status: Healthy
        </p>
      </div>
    </div>
  );
};

export default QueueMonitor;