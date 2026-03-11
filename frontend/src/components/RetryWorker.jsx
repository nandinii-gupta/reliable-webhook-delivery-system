const RetryWorker = () => {

  const workerStatus = {
    status: "Running",
    activeRetries: 8,
    nextRetry: "30 sec"
  };

  return (
    <div className="worker-card">

      <h3>Retry Engine (Exponential Backoff)</h3>

      <p className="worker-desc">
        Automatically retries failed webhooks using exponential backoff handled
        by Node.js workers for guaranteed eventual delivery.
      </p>

      <div className="worker-stats">

        <div>
          <span className="worker-label">Worker Status</span>
          <div className="worker-value green">
            {workerStatus.status}
          </div>
        </div>

        <div>
          <span className="worker-label">Active Retries</span>
          <div className="worker-value blue">
            {workerStatus.activeRetries}
          </div>
        </div>

        <div>
          <span className="worker-label">Next Retry</span>
          <div className="worker-value orange">
            {workerStatus.nextRetry}
          </div>
        </div>

      </div>

    </div>
  );
};

export default RetryWorker;