const Topbar = ({ title, showStatus = false }) => {
  return (
    <div className="topbar">
      <h1>{title}</h1>

      {showStatus && (
        <div className="system-status">
          <span className="status-dot"></span>
          System Active
        </div>
      )}
    </div>
  );
};

export default Topbar;