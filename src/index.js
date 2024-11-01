import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";

if (!document.documentElement.classList.contains("dark")) {
  document.documentElement.classList.add("dark");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
