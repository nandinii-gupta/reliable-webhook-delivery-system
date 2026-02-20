const StatCard = ({ title, value, color, icon }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "22px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            background: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            color: "#fff",
            boxShadow: `0 10px 20px ${color}55`,
          }}
        >
          {icon}
        </div>

        <div>
          <p
            style={{
              fontSize: "13px",
              color: "#64748b",
              marginBottom: "4px",
              fontWeight: "500",
            }}
          >
            {title}
          </p>

          <h2
            style={{
              fontSize: "26px",
              fontWeight: "700",
              color: "#1e293b",
            }}
          >
            {value}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
