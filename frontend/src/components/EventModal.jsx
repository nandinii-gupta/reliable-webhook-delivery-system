const EventModal = ({ event, onClose }) => {

  if (!event) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h3>Webhook Event Details</h3>

        <p><b>ID:</b> {event._id}</p>
        <p><b>Status:</b> {event.status}</p>
        <p><b>Retries:</b> {event.retries}</p>

        <pre>
          {JSON.stringify(event.payload, null, 2)}
        </pre>

        <button onClick={onClose}>Close</button>

      </div>

    </div>
  );
};

export default EventModal;