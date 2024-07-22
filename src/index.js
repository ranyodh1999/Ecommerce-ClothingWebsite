import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./App"; // Ensure the path is correct

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
