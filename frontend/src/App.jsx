import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import QueueMonitor from "./pages/QueueMonitor";
import DeliveryLogs from "./pages/DeliveryLogs";
import SystemMetrics from "./pages/SystemMetrics";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "queue":
        return <QueueMonitor />;
      case "logs":
        return <DeliveryLogs />;
      case "metrics":
        return <SystemMetrics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ display: "flex", background: "#f1f5f9", minHeight: "100vh" }}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div style={{ marginLeft: "260px", width: "100%" }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;