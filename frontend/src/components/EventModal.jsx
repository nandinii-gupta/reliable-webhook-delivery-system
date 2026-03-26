const EventModal = ({ event, onClose }) => {

  if (!event) return null;

  return (
    <div className="modal-overlay">

      <div className="modal-card">

        <h2>Webhook Event Details</h2>

        <div className="modal-info">
          <p><b>ID:</b> {event._id}</p>
          <p><b>Status:</b> {event.status}</p>
          <p><b>Retries:</b> {event.retries}</p>
        </div>

        <h4>Payload</h4>

        <pre className="payload-box">
          {JSON.stringify(event.payload, null, 2)}
        </pre>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>

      </div>

    </div>
  );
};

export default EventModal;