import './style.css'
function AdminSignInForm() {
    return(
      <div className="form">
          <div className="form-body">
          <h3>Admin Sign In Form</h3>
              
              <div className="email">
                  <label className="form__label" for="email">Email:</label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
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
export default AdminSignInForm;