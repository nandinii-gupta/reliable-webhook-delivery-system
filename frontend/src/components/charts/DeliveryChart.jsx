const DeliveryChart = () => {
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
        Webhook Delivery Performance
      </h3>

      <p style={{ color: "#64748b", fontSize: "14px" }}>
        Visualizing successful vs failed webhook deliveries over time to monitor
        system reliability.
      </p>

      <div
        style={{
          height: "150px",
          marginTop: "20px",
          background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
          borderRadius: "12px",
        }}
      />
    </div>
  );
};

export default DeliveryChart;