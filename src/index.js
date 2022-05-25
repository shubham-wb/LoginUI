import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { AuthProvider } from "./Provider/authProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
