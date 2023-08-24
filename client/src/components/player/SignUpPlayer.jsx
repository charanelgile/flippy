// Library Imports
import React from "react";
import { Link } from "react-router-dom";

function SignUpPlayer() {
  return (
    <div className="containerSignInSignUp container-fluid bg-light text-start rounded">
      <h3 className="formHeaders text-center">Create an Account</h3>

      <form action="">
        <fieldset>
          <div>
            <label htmlFor="FIRST_NAME">First Name:</label>

            <input
              id="FIRST_NAME"
              name="FIRST_NAME"
              type="text"
              className="form-control shadow-none mb-3"
            />
          </div>

          <div>
            <label htmlFor="LAST_NAME">Last Name:</label>

            <input
              id="LAST_NAME"
              name="LAST_NAME"
              type="text"
              className="form-control shadow-none mb-3"
            />
          </div>

          <div>
            <label htmlFor="EMAIL">Email:</label>

            <input
              id="EMAIL"
              name="EMAIL"
              type="email"
              className="form-control shadow-none mb-3"
            />
          </div>

          <div>
            <label htmlFor="PASSWORD">Password:</label>

            <input
              id="PASSWORD"
              name="PASSWORD"
              type="password"
              className="form-control shadow-none mb-3"
            />
          </div>

          <div>
            <label htmlFor="CONFIRM_PASSWORD">Confirm Password:</label>

            <input
              id="CONFIRM_PASSWORD"
              name="CONFIRM_PASSWORD"
              type="password"
              className="form-control shadow-none mb-3"
            />
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
