// Library Imports
import React from "react";
import { Link } from "react-router-dom";

function SignUpPlayer() {
  return (
    <div className="containerSignInSignUp container-fluid bg-light text-start rounded">
      <h3 className="formHeaders text-center">Create an Account</h3>

      <form action="http://localhost:4000/player/signup" method="POST">
        <fieldset>
          <div className="d-flex justify-content-between mb-2">
            <div className="w-100 me-2">
              <label htmlFor="player_first_name">First Name:</label>

              <input
                id="player_first_name"
                name="player_first_name"
                type="text"
                className="form-control shadow-none"
              />
            </div>

            <div className="w-100 ms-2">
              <label htmlFor="player_last_name">Last Name:</label>

              <input
                id="player_last_name"
                name="player_last_name"
                type="text"
                className="form-control shadow-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="player_code_name">Code Name:</label>

            <input
              id="player_code_name"
              name="player_code_name"
              type="text"
              className="form-control shadow-none mb-2"
            />
          </div>

          <div>
            <label htmlFor="player_email">Email:</label>

            <input
              id="player_email"
              name="player_email"
              type="email"
              className="form-control shadow-none mb-2"
            />
          </div>

          <div className="d-flex justify-content-between mb-3">
            <div className="w-100 me-2">
              <label htmlFor="player_password">Password:</label>

              <input
                id="player_password"
                name="player_password"
                type="password"
                className="form-control shadow-none"
              />
            </div>

            <div className="w-100 ms-2">
              <label htmlFor="player_confirm_password">Confirm Password:</label>

              <input
                id="player_confirm_password"
                name="player_confirm_password"
                type="password"
                className="form-control shadow-none"
              />
            </div>
          </div>

          <div>
            <button
              id="btnSignUpPlayer"
              type="submit"
              className="btnSignUp btn btn-warning w-100 mb-3">
              Sign Up
            </button>
          </div>
        </fieldset>
      </form>

      <div className="divLinkToSignIn container-fluid py-2 w-75 rounded">
        <p className="orSignIn text-center my-0 mx-3">
          or <Link to={"/SignInPlayer"}>Sign in to your Account</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPlayer;
