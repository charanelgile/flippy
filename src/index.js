import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Cards Context
import { CardSetAContextProvider } from "./contexts/CardSetAContext";
import { CardSetBContextProvider } from "./contexts/CardSetBContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardSetAContextProvider>
      <CardSetBContextProvider>
        <App />
      </CardSetBContextProvider>
    </CardSetAContextProvider>
  </React.StrictMode>
);
