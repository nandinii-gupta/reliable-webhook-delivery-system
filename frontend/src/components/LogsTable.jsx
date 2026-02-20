const LogsTable = () => {
  const dummyLogs = [
    {
      id: "WH_001",
      status: "Delivered",
      attempts: 1,
      target: "https://api.client.com/webhook",
    },
    {
      id: "WH_002",
      status: "Pending",
      attempts: 2,
      target: "https://test.server.com/hook",
    },
    {
      id: "WH_003",
      status: "Failed",
      attempts: 5,
      target: "https://down.server.com/webhook",
    },
  ];

  const getStatusStyles = (status) => {
    if (status === "Delivered") {
      return {
        color: "#22c55e",
        background: "rgba(34,197,94,0.12)",
        border: "1px solid rgba(34,197,94,0.4)",
      };
    }
    if (status === "Pending") {
      return {
        color: "#facc15",
        background: "rgba(250,204,21,0.12)",
        border: "1px solid rgba(250,204,21,0.4)",
      };
    }
    return {
      color: "#ef4444",
      background: "rgba(239,68,68,0.12)",
      border: "1px solid rgba(239,68,68,0.4)",
    };
  };

  return (
    <div
      style={{
        marginTop: "40px",
        background: "#0f172a",
        padding: "26px",
        borderRadius: "16px",
        border: "1px solid #1e293b",
        boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
      }}
    >
      {/* Title */}
      <div style={{ marginBottom: "18px" }}>
        <h3
          style={{
            fontSize: "22px",
            fontWeight: "600",
            letterSpacing: "0.3px",
            marginBottom: "6px",
          }}
        >
          Webhook Delivery Logs
        </h3>
        <p style={{ color: "#94a3b8", fontSize: "14px" }}>
          Track webhook status, retry attempts, and delivery targets in real-time
        </p>
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "15px",
          }}
        >
          <thead>
            <tr
              style={{
                textAlign: "left",
                color: "#94a3b8",
                borderBottom: "1px solid #1e293b",
              }}
            >
              <th style={{ padding: "14px 10px", fontWeight: "600" }}>ID</th>
              <th style={{ padding: "14px 10px", fontWeight: "600" }}>Status</th>
              <th style={{ padding: "14px 10px", fontWeight: "600" }}>
                Attempts
              </th>
              <th style={{ padding: "14px 10px", fontWeight: "600" }}>
                Target URL
              </th>
            </tr>
          </thead>

          <tbody>
            {dummyLogs.map((log) => {
              const statusStyle = getStatusStyles(log.status);

              return (
                <tr
                  key={log.id}
                  style={{
                    borderBottom: "1px solid #1e293b",
                    transition: "all 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#020617";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {/* ID */}
                  <td
                    style={{
                      padding: "16px 10px",
                      fontWeight: "500",
                      color: "#e2e8f0",
                    }}
                  >
                    {log.id}
                  </td>

                  {/* Status Badge */}
                  <td style={{ padding: "16px 10px" }}>
                    <span
                      style={{
                        color: statusStyle.color,
                        background: statusStyle.background,
                        border: statusStyle.border,
                        padding: "6px 14px",
                        borderRadius: "999px",
                        fontWeight: "600",
                        fontSize: "13px",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {log.status}
                    </span>
                  </td>

                  {/* Attempts */}
                  <td
                    style={{
                      padding: "16px 10px",
                      color: "#cbd5f5",
                      fontWeight: "500",
                    }}
                  >
                    {log.attempts}
                  </td>

                  {/* Target URL */}
                  <td
                    style={{
                      padding: "16px 10px",
                      color: "#93c5fd",
                      fontFamily: "monospace",
                      fontSize: "14px",
                    }}
                  >
                    {log.target}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogsTable;

