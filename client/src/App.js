// Library Imports
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page & Component Imports
import Header from "./components/Header";
import SignInPlayer from "./components/player/SignInPlayer";
import SignUpPlayer from "./components/player/SignUpPlayer";
import SignInAdmin from "./components/admin/SignInAdmin";
import SignUpAdmin from "./components/admin/SignUpAdmin";
import Leaderboard from "./pages/Leaderboard";
import Mechanics from "./components/player/Mechanics";
import StartGame from "./components/player/StartGame";

// Style Imports
import "./styles/style.css";
import "./styles/styleHeader.css";
import "./styles/styleMechanics.css";
import "./styles/styleStartGame.css";
import "./styles/styleCards.css";
import "./styles/styleRank.css";
import "./styles/styleSignInSignUp.css";
import "./styles/styleSaveHighScore.css";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Mechanics />} />

            <Route path="/Play" element={<StartGame />} />

            <Route path="/Ranking" element={<Leaderboard />} />

            <Route path="/SignInPlayer" element={<SignInPlayer />} />

            <Route path="/SignUpPlayer" element={<SignUpPlayer />} />

            <Route path="/SignInAdmin" element={<SignInAdmin />} />

            <Route path="/SignUpAdmin" element={<SignUpAdmin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
