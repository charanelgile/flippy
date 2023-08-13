// Library Imports
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page & Component Imports
import Header from "./components/Header";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import SignInPlayer from "./components/player/SignInPlayer";
import SignUpPlayer from "./components/player/SignUpPlayer";
import SignInAdmin from "./components/admin/SignInAdmin";
import SignUpAdmin from "./components/admin/SignUpAdmin";

// Style Imports
import "./styles/style.css";
import "./styles/styleHeader.css";
import "./styles/styleCardGrid.css";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/Ranking"
              element={<Ranking />}
            />

            <Route
              path="/SignInPlayer"
              element={<SignInPlayer />}
            />

            <Route
              path="/SignUpPlayer"
              element={<SignUpPlayer />}
            />

            <Route
              path="/SignInAdmin"
              element={<SignInAdmin />}
            />

            <Route
              path="/SignUpAdmin"
              element={<SignUpAdmin />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
