// Library Imports
import React from "react";
import { Link } from "react-router-dom";

function SignInAdmin() {
  return (
    <div className="containerSignInSignUp container-fluid bg-light text-start rounded">
      <h3 className="formHeaders text-center">
        Sign in to your <span className="adminHeaders">Admin</span> Account
      </h3>

      <form action="">
        <fieldset>
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
            <button
              id="btnSignInAdmin"
              type="submit"
              class="btnSignIn btn btn-warning w-100 mb-3">
              Sign In
            </button>
          </div>
        </fieldset>
      </form>

      <div className="divLinkToSignUp container-fluid py-2 w-75 rounded">
        <p className="orSignUp text-center my-0 mx-3">
          or <Link to={"/SignUpAdmin"}>Create an Admin Account</Link>
        </p>
      </div>
    </div>
  );
}

export default SignInAdmin;
