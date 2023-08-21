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
import Cards3x4 from "./components/player/Cards3x4";
import Cards4x4 from "./components/player/Cards4x4";
import Cards4x5 from "./components/player/Cards4x5";
import Cards4x6 from "./components/player/Cards4x6";
import Cards5x6 from "./components/player/Cards5x6";
import Cards6x6 from "./components/player/Cards6x6";
import Cards6x7 from "./components/player/Cards6x7";
import Cards6x8 from "./components/player/Cards6x8";

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
            <Route path="/" element={<Home />} />

            <Route path="/Level1" element={<Cards3x4 />} />
            <Route path="/Level2" element={<Cards4x4 />} />
            <Route path="/Level3" element={<Cards4x5 />} />
            <Route path="/Level4" element={<Cards4x6 />} />
            <Route path="/Level5" element={<Cards5x6 />} />
            <Route path="/Level6" element={<Cards6x6 />} />
            <Route path="/Level7" element={<Cards6x7 />} />
            <Route path="/Level8" element={<Cards6x8 />} />

            <Route path="/Ranking" element={<Ranking />} />

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
