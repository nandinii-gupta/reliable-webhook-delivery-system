import React from "react";

const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "queue", label: "Queue Monitor", icon: "📡" },
    { id: "logs", label: "Delivery Logs", icon: "📜" },
    { id: "metrics", label: "System Metrics", icon: "⚙️" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        bottom: "20px",
        width: "260px",
        background: "linear-gradient(180deg, #2b2f3a 0%, #1f2937 100%)",
        borderRadius: "24px",
        padding: "28px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
        zIndex: 1000,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Logo / Title */}
      <div>
        <h2
          style={{
            color: "#ffffff",
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "40px",
            letterSpacing: "0.3px",
          }}
        >
          Webhook Dashboard
        </h2>

        {/* Menu */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {menuItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActivePage(item.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: isActive ? "#ffffff" : "#cbd5f5",
                  background: isActive
                    ? "linear-gradient(135deg, #3b82f6, #2563eb)"
                    : "transparent",
                  transition: "all 0.25s ease",
                }}
              >
                <span style={{ fontSize: "18px" }}>{item.icon}</span>
                {item.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Badge */}
      <div
        style={{
          background: "linear-gradient(135deg, #3b82f6, #6366f1)",
          padding: "14px",
          borderRadius: "16px",
          textAlign: "center",
          color: "#fff",
          fontWeight: "600",
          fontSize: "14px",
          letterSpacing: "0.3px",
        }}
      >
        Reliable System v1.0
      </div>
    </div>
  );
};

export default Sidebar;