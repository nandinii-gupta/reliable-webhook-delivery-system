import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Webhook System</h2>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/queue">Queue Monitor</Link>
        <Link to="/logs">Delivery Logs</Link>
        <Link to="/metrics">System Metrics</Link>
      </nav>
    </div>
  );
};

export default Sidebar;