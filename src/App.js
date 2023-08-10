import React from "react";
import CardGrid from "./components/CardGrid";
import "./styles/style.css";
import  SignUpForm from './components/PlayerSignUp'
import  SignInForm from './components/PlayerSignIn'
import  AdminSignUpForm from './components/AdminSignUp'
import  AdminSignInForm from './components/AdminSignIn'

function App() {
  return (
    <div className="App">
      <h1>Flippy</h1>
      <AdminSignInForm/>
      <AdminSignUpForm/>
      <SignInForm/>
      <SignUpForm/>
      <CardGrid />
      
      
    </div>
  );
}

export default App;
