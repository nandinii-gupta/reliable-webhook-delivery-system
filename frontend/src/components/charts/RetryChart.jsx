const RetryChart = () => {
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
        Retry Attempts Analytics
      </h3>

      <p style={{ color: "#64748b", fontSize: "14px" }}>
        Tracks retry frequency handled by exponential backoff worker engine.
      </p>

      <div
        style={{
          height: "150px",
          marginTop: "20px",
          background: "linear-gradient(135deg, #22c55e, #4ade80)",
          borderRadius: "12px",
        }}
      />
    </div>
  );
};

export default RetryChart;