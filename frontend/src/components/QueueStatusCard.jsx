const QueueStatusCard = () => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "24px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ color: "#1e293b", marginBottom: "10px" }}>
        Webhook Queue Monitor
      </h3>

      <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "20px" }}>
        Real-time tracking of queued webhooks stored durably in MongoDB to ensure
        guaranteed delivery even during system outages.
      </p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p style={{ color: "#94a3b8", fontSize: "13px" }}>Queue Size</p>
          <h2 style={{ color: "#3b82f6" }}>20</h2>
        </div>

        <div>
          <p style={{ color: "#94a3b8", fontSize: "13px" }}>Processing Rate</p>
          <h2 style={{ color: "#22c55e" }}>5/sec</h2>
        </div>

        <div>
          <p style={{ color: "#94a3b8", fontSize: "13px" }}>Oldest Job</p>
          <h2 style={{ color: "#f59e0b" }}>2 min</h2>
        </div>
      </div>
    </div>
  );
};

export default QueueStatusCard;