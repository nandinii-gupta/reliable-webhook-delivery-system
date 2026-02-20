const SystemMetrics = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a" }}>
        System Metrics & Reliability
      </h1>
      <p style={{ color: "#64748b", marginTop: "10px", maxWidth: "700px" }}>
        Monitoring retry engine performance, system uptime, and endpoint
        reliability for guaranteed webhook delivery architecture.
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
          Core Metrics
        </h3>
        <p style={{ marginTop: "12px", color: "#334155" }}>
          Worker Status: Running<br />
          Active Retries: 8<br />
          Success Rate: 92%<br />
          System Uptime: 99.8%
        </p>
      </div>
    </div>
  );
};

export default SystemMetrics;