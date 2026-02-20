import React from "react";
const Dashboard = () => {
  return (
    <div style={{ padding: "40px", fontFamily: "Inter, sans-serif" }}>
      {}
      <div className="fade-in">
        <p
          style={{
            color: "#64748b",
            fontWeight: "600",
            marginBottom: "6px",
            fontSize: "14px",
            letterSpacing: "0.5px",
          }}
        >
          Dashboard
        </p>

        <h1
          style={{
            fontSize: "38px",
            fontWeight: "800",
            color: "#0f172a",
            marginBottom: "12px",
          }}
        >
          System Monitoring Dashboard
        </h1>
      </div>

      {}
      <div className="fade-in-delay-1">
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "800",
            color: "#0f172a",
            marginBottom: "10px",
          }}
        >
          Reliable Webhook Delivery System
        </h2>

        <p
          style={{
            color: "#64748b",
            fontSize: "16px",
            maxWidth: "760px",
            lineHeight: "1.7",
          }}
        >
          Monitor webhook queue, retry engine, delivery status, and system
          reliability to ensure guaranteed webhook delivery during outages using
          durable MongoDB storage and exponential backoff workers.
        </p>
      </div>

      {/* Stats Cards */}
      <div
        className="fade-in-delay-2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          marginTop: "40px",
        }}
      >
        {/* Total Webhooks */}
        <div
          style={{
            background: "#ffffff",
            padding: "24px",
            borderRadius: "18px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#3b82f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "22px",
              fontWeight: "700",
            }}
          >
            📊
          </div>
          <div>
            <p style={{ color: "#64748b", fontWeight: "600" }}>
              Total Webhooks Queued
            </p>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "800",
                color: "#0f172a",
              }}
            >
              128
            </h3>
          </div>
        </div>

        {/* Successful Deliveries */}
        <div
          style={{
            background: "#ffffff",
            padding: "24px",
            borderRadius: "18px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#22c55e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "22px",
              fontWeight: "700",
            }}
          >
            ✓
          </div>
          <div>
            <p style={{ color: "#64748b", fontWeight: "600" }}>
              Successful Deliveries
            </p>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "800",
                color: "#0f172a",
              }}
            >
              98
            </h3>
          </div>
        </div>

        {/* Pending Retries */}
        <div
          style={{
            background: "#ffffff",
            padding: "24px",
            borderRadius: "18px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#f59e0b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "22px",
              fontWeight: "700",
            }}
          >
            ⏳
          </div>
          <div>
            <p style={{ color: "#64748b", fontWeight: "600" }}>
              Pending Retries
            </p>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "800",
                color: "#0f172a",
              }}
            >
              20
            </h3>
          </div>
        </div>

        {/* Failed Deliveries */}
        <div
          style={{
            background: "#ffffff",
            padding: "24px",
            borderRadius: "18px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#ef4444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "22px",
              fontWeight: "700",
            }}
          >
            ✕
          </div>
          <div>
            <p style={{ color: "#64748b", fontWeight: "600" }}>
              Failed Deliveries
            </p>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "800",
                color: "#0f172a",
              }}
            >
              10
            </h3>
          </div>
        </div>
      </div>

      {/* System Panels */}
      <div
        className="fade-in-delay-3"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "24px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            padding: "26px",
            borderRadius: "20px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
          }}
        >
          <h3
            style={{
              fontSize: "22px",
              fontWeight: "800",
              color: "#0f172a",
              marginBottom: "10px",
            }}
          >
            Retry Engine (Exponential Backoff)
          </h3>
          <p style={{ color: "#64748b", lineHeight: "1.7" }}>
            Automatically retries failed webhooks using exponential backoff
            strategy handled by Node.js workers for guaranteed eventual
            delivery.
          </p>

          <div
            style={{
              marginTop: "18px",
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "700",
            }}
          >
            <span style={{ color: "#22c55e" }}>Running</span>
            <span style={{ color: "#3b82f6" }}>8 Active</span>
            <span style={{ color: "#f59e0b" }}>30 sec</span>
          </div>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "26px",
            borderRadius: "20px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
          }}
        >
          <h3
            style={{
              fontSize: "22px",
              fontWeight: "800",
              color: "#0f172a",
              marginBottom: "10px",
            }}
          >
            Webhook Queue Monitor
          </h3>
          <p style={{ color: "#64748b", lineHeight: "1.7" }}>
            Real-time tracking of queued webhooks stored durably in MongoDB to
            ensure guaranteed delivery even during system outages.
          </p>

          <div
            style={{
              marginTop: "18px",
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "700",
            }}
          >
            <span style={{ color: "#3b82f6" }}>Queue: 20</span>
            <span style={{ color: "#22c55e" }}>5/sec</span>
            <span style={{ color: "#f59e0b" }}>2 min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;