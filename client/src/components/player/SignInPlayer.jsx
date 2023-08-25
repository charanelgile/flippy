// Library Imports
import React from "react";
import { Link } from "react-router-dom";

function SignInPlayer() {
  return (
    <div
      id="containerSignIn"
      className="containerSignInSignUp container-fluid bg-light text-start rounded">
      <h3 className="formHeaders text-center">Sign in to your Account</h3>

      <form action="http://localhost:4000/player/signin" method="POST">
        <fieldset>
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
            <label htmlFor="player_password">Password:</label>

            <input
              id="player_password"
              name="player_password"
              type="password"
              className="form-control shadow-none mb-2"
            />
          </div>

          <div>
            <button
              id="btnSignInPlayer"
              type="submit"
              className="btnSignIn btn btn-warning w-100 mb-3">
              Sign In
            </button>
          </div>
        </fieldset>
      </form>

      <div className="divLinkToSignUp container-fluid py-2 w-75 rounded">
        <p className="orSignUp text-center my-0 mx-3">
          or <Link to={"/SignUpPlayer"}>Create an Account</Link>
        </p>
      </div>
    </div>
  );
}

export default SignInPlayer;
