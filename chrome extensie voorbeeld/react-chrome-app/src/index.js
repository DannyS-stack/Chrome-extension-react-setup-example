import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app";

document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(document.getElementById("react-chrome-app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
