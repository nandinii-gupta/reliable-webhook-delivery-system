import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

import { BrowserRouter } from "react-router-dom";
import { WebhookProvider } from "./context/WebhookContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>
    <WebhookProvider>
      <App />
    </WebhookProvider>
  </BrowserRouter>

);