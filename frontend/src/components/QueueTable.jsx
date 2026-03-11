const QueueTable = () => {
  const data = [
    {
      id: 1,
      event: "payment.completed",
      endpoint: "/api/payments",
      status: "Queued",
    },
    { id: 2, event: "user.created", endpoint: "/api/users", status: "Queued" },
    {
      id: 3,
      event: "order.created",
      endpoint: "/api/orders",
      status: "Processing",
    },
  ];

  return (
    <div className="table-card">
      <h3>Webhook Queue</h3>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Event</th>
            <th>Endpoint</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.event}</td>
              <td>{row.endpoint}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueueTable;
