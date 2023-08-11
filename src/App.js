import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";

import Header from "./Header"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Ranking from "./pages/Ranking"
import SignUp from "./components/PlayerSignUp";


function App() {
  return (
    <>
    <div className="App">
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ranking" element={<Ranking />} />         
          <Route path="/signup" element={<SignUp />} />         
        </Routes>
        </BrowserRouter>  
    </div>
  </>
  );
}

export default App;
