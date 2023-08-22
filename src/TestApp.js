// Library Imports
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page & Component Imports
import Header from "./components/Header";
import TestStartGame from "./test/TestStartGame";

// Style Imports
import "./styles/style.css";
import "./styles/styleHeader.css";
import "./styles/styleHome.css";
import "./styles/styleCardGrid.css";
import "./styles/styleRank.css";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<TestStartGame />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
