const endpoints = [
  { url: "https://api.client.com/webhook", status: "Healthy", time: "120ms" },
  { url: "https://test.server.com/hook", status: "Slow", time: "890ms" },
  { url: "https://down.server.com/webhook", status: "Down", time: "Timeout" },
];

const getStatusColor = (status) => {
  if (status === "Healthy") return "#22c55e";
  if (status === "Slow") return "#f59e0b";
  return "#ef4444";
};

const EndpointHealthTable = () => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "24px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ color: "#1e293b", marginBottom: "20px" }}>
        Endpoint Health Monitoring
      </h3>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", color: "#64748b" }}>
            <th>Endpoint URL</th>
            <th>Status</th>
            <th>Response Time</th>
          </tr>
        </thead>

        <tbody>
          {endpoints.map((ep, index) => (
            <tr key={index} style={{ borderTop: "1px solid #e2e8f0" }}>
              <td style={{ padding: "12px 0", color: "#1e293b" }}>
                {ep.url}
              </td>
              <td style={{ color: getStatusColor(ep.status), fontWeight: 600 }}>
                {ep.status}
              </td>
              <td style={{ color: "#64748b" }}>{ep.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EndpointHealthTable;