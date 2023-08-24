import React from "react";

function SignUpPlayer() {
  return (
    <div>
      <h3>Player Sign Up Form</h3>

      <form action="">
        <fieldset>
          <div>
            <label for="FIRST_NAME">First Name:</label>

            <input
              id="FIRST_NAME"
              name="FIRST_NAME"
              type="text"
              className="form-control"
            />
          </div>

          <div>
            <label for="LAST_NAME">Last Name:</label>

            <input
              id="LAST_NAME"
              name="LAST_NAME"
              type="text"
              className="form-control"
            />
          </div>

          <div>
            <label for="EMAIL">Email:</label>

            <input
              id="EMAIL"
              name="EMAIL"
              type="email"
              className="form-control"
            />
          </div>

          <div>
            <label for="PASSWORD">Password:</label>

            <input
              id="PASSWORD"
              name="PASSWORD"
              type="password"
              className="form-control"
            />
          </div>

          <div>
            <label for="CONFIRM_PASSWORD">Confirm Password:</label>

            <input
              id="CONFIRM_PASSWORD"
              name="CONFIRM_PASSWORD"
              type="password"
              className="form-control"
            />
          </div>

          <div>
            <button
              id="btnSignUpPlayer"
              type="submit"
              className="btnSignUp btn btn-success">
              Sign Up
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default SignUpPlayer;
