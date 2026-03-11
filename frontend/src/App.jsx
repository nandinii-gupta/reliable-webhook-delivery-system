import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import QueueMonitor from "./pages/QueueMonitor";
import DeliveryLogs from "./pages/DeliveryLogs";
import SystemMetrics from "./pages/SystemMetrics";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Routes>

          <Route
            path="/"
            element={
              <>
                <Topbar title="System Monitoring Dashboard" showStatus={true} />
                <Dashboard />
              </>
            }
          />

          <Route
            path="/queue"
            element={
              <>
                <Topbar title="Webhook Queue Monitor" />
                <QueueMonitor />
              </>
            }
          />

          <Route
            path="/logs"
            element={
              <>
                <Topbar title="Webhook Delivery Logs" />
                <DeliveryLogs />
              </>
            }
          />

          <Route
            path="/metrics"
            element={
              <>
                <Topbar title="System Performance Metrics" />
                <SystemMetrics />
              </>
            }
          />

        </Routes>

      </div>
    </div>
  );
}

export default App;