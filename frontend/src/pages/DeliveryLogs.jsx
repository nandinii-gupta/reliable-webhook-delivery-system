const DeliveryLogs = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a" }}>
        Webhook Delivery Logs
      </h1>
      <p style={{ color: "#64748b", marginTop: "10px", maxWidth: "700px" }}>
        Tracks webhook attempts, retries, failures, and successful deliveries
        for system reliability monitoring.
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
          Recent Logs
        </h3>
        <p style={{ marginTop: "12px", color: "#334155" }}>
          WH_001 — Delivered<br />
          WH_002 — Pending Retry<br />
          WH_003 — Failed (Timeout)
        </p>
      </div>
    </div>
  );
};

export default DeliveryLogs;