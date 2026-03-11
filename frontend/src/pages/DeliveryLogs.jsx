const DeliveryLogs = () => {

  const logs = [
    {
      id: "evt_3021",
      endpoint: "/payments",
      status: "Delivered",
      code: 200,
      attempts: 1,
      time: "1 min ago",
      latency: "210ms"
    },
    {
      id: "evt_3020",
      endpoint: "/orders",
      status: "Failed",
      code: 500,
      attempts: 3,
      time: "3 min ago",
      latency: "520ms"
    },
    {
      id: "evt_3019",
      endpoint: "/billing",
      status: "Delivered",
      code: 200,
      attempts: 1,
      time: "6 min ago",
      latency: "180ms"
    },
    {
      id: "evt_3018",
      endpoint: "/users",
      status: "Retrying",
      code: 502,
      attempts: 2,
      time: "8 min ago",
      latency: "430ms"
    }
  ];

  return (
    <div className="page">

      <p className="page-desc">
        Detailed history of webhook delivery attempts and server responses.
      </p>

      <div className="card">

        <table className="table">

          <thead>
            <tr>
              <th>Event ID</th>
              <th>Endpoint</th>
              <th>Status</th>
              <th>HTTP Code</th>
              <th>Attempts</th>
              <th>Latency</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>

            {logs.map((log)=>(
              <tr key={log.id}>

                <td>{log.id}</td>

                <td>{log.endpoint}</td>

                <td
                  className={
                    log.status === "Delivered"
                      ? "success"
                      : log.status === "Failed"
                      ? "failed"
                      : "retry"
                  }
                >
                  {log.status}
                </td>

                <td>{log.code}</td>

                <td>{log.attempts}</td>

                <td>{log.latency}</td>

                <td>{log.time}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default DeliveryLogs;