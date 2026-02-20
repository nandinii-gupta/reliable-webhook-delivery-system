const RetryEngineCard = () => {
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
        Retry Engine (Exponential Backoff)
      </h3>

      <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "20px" }}>
        Automatically retries failed webhooks using exponential backoff strategy
        handled by Node.js workers for guaranteed eventual delivery.
      </p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p style={{ color: "#94a3b8", fontSize: "13px" }}>Worker Status</p>
          <h2 style={{ color: "#22c55e" }}>Running</h2>
        </div>

        <div>
          <p style={{ color: "#94a3b8", fontSize: "13px" }}>Active Retries</p>
          <h2 style={{ color: "#3b82f6" }}>8</h2>
        </div>

        <div>
          <p style={{ color: "#94a3b8", fontSize: "13px" }}>Next Retry</p>
          <h2 style={{ color: "#f59e0b" }}>30 sec</h2>
        </div>
      </div>
    </div>
  );
};

export default RetryEngineCard;