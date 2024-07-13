import React from "react";
import "../CSS/App.css";
function Signup() {
  return (
    <body class="signup-page">
      <div className="signup">
        <div className="card-signup">
          <div className="card-body">
            <h2 className="card-title text-center">Signup</h2> <br></br>
            <form>
              <div className="form-group">
                <label htmlFor="email">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter Username or Email"
                />
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
              <button type="submit" className="btn btn-success btn-block">
                Signup
              </button>
              <p className="text-center mt-3">
                <a href="#forgot-password" className="custom-link">
                  Forgot Password?
                </a>
                <br />
                <a href="#forgot-username" className="custom-link">
                  Forgot Username?
                </a>
              </p>
            </form>
            <p className="text-center mt-3">
              Don't have an account?{" "}
              <a href="#login" className="custom-link">
                Signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Signup;
