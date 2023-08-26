// Library Imports
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page & Component Imports
import Header from "./components/Header";
import Ranking from "./pages/Ranking";
import SignInPlayer from "./components/player/SignInPlayer";
import SignUpPlayer from "./components/player/SignUpPlayer";
import SignInAdmin from "./components/admin/SignInAdmin";
import SignUpAdmin from "./components/admin/SignUpAdmin";
import StartGame from "./components/player/StartGame";

// Style Imports
import "./styles/style.css";
import "./styles/styleHeader.css";
import "./styles/styleStartGame.css";
import "./styles/styleCards.css";
import "./styles/styleRank.css";
import "./styles/styleSignInSignUp.css";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route
              path="/"
              element={<StartGame />}
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
