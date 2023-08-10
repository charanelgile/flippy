import React from "react";
import CardGrid from "./components/CardGrid";
import "./styles/style.css";
import Header from './components/header';
import  SignUpForm from './components/PlayerSignUp'

function App() {
  return (
    <div className="App">
      <h1>Flippy</h1>
      <CardGrid />
      <Header/>
      <SignUpForm/>
    </div>
  );
}

export default App;
