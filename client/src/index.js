// Library Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Context Providers
import { CardSetAContextProvider } from "./contexts/CardSetAContext";
import { CardSetBContextProvider } from "./contexts/CardSetBContext";
import { CurrentSessionContextProvider } from "./contexts/CurrentSessionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardSetAContextProvider>
      <CardSetBContextProvider>
        <CurrentSessionContextProvider>
          <App />
        </CurrentSessionContextProvider>
      </CardSetBContextProvider>
    </CardSetAContextProvider>
  </React.StrictMode>
);
