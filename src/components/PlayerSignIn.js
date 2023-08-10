import './style.css'
function SignInForm() {
    return(
      <div className="form">
          <div className="form-body">
          <h3>Sign In Form</h3>
              <div className="codename">
                  <label className="form__label" for="codeName">Code Name:</label>
                  <input  type="text" name="" id="codeName"  className="form__input"placeholder="CodeName"/>
              </div>
              
              <div className="password">
                  <label className="form__label" for="password">Password:</label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              
          </div>
          <div class="footer">
              <button type="submit" class="btn">Sign In</button>
          </div>
      </div>      
    )       
}
export default SignInForm;