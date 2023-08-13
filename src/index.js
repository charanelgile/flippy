import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Cards Context
import { CardsContextProvider } from "./contexts/CardsContext";
import { DuplicatesContextProvider } from "./contexts/DuplicatesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardsContextProvider>
      <DuplicatesContextProvider>
        <App />
      </DuplicatesContextProvider>
    </CardsContextProvider>
  </React.StrictMode>
);
