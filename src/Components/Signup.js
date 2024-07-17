import React from 'react';
import './CSS/Signup.css'; // 确保路径正确

function Signup() {
  return (
    <div className="signup"> {/* 改为小写 */}
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Sign Up</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" className="form-control" id="username" placeholder="Enter username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
              </div>
              <button type="submit" className="btn btn-success btn-block">Sign Up</button>
            </form>
            <p className="text-center mt-3">
              Already have an account? <a href="#login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
