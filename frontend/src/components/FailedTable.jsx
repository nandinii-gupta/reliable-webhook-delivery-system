const FailedTable = () => {
  const data = [
    {
      id: 101,
      event: "payment.failed",
      endpoint: "/api/payments",
      retry: "Pending",
    },
    {
      id: 102,
      event: "invoice.created",
      endpoint: "/api/invoices",
      retry: "Retrying",
    },
  ];

  return (
    <div className="table-card">
      <h3>Recent Failed Deliveries</h3>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Event</th>
            <th>Endpoint</th>
            <th>Retry Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.event}</td>
              <td>{row.endpoint}</td>
              <td>{row.retry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FailedTable;
