import React from "react";

function SignInPlayer() {
  return (
    <div>
      <h3>Player Sign In Form</h3>

      <form action="">
        <fieldset>
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
            <button
              id="btnSignInPlayer"
              type="submit"
              class="btnSignIn btn btn-warning">
              Sign In
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default SignInPlayer;
