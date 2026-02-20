const SuccessPieChart = () => {
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
        Success vs Failure Ratio
      </h3>

      <p style={{ color: "#64748b", fontSize: "14px" }}>
        Distribution of delivered, pending, and failed webhooks in the system.
      </p>

      <div
        style={{
          height: "150px",
          marginTop: "20px",
          background: "linear-gradient(135deg, #ef4444, #f87171)",
          borderRadius: "12px",
        }}
      />
    </div>
  );
};

export default SuccessPieChart;