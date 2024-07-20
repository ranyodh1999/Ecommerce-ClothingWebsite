import React, { useState } from "react";
import axios from "axios";
import "../CSS/Signup.css"; // Ensure the path is correct

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3001/api/users/signup", {
        name,
        email,
        password,
      });
      alert(res.data.msg);
    } catch (err) {
      console.error(err);
      alert("Error signing up");
    }
  };

  return (
    <div className="signup-page">
      <div className="Signup">
        <div className="card-signup">
          <div className="card-body">
            <h2 className="card-title text-center">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter First and Last name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success btn-block">
                Sign Up
              </button>
            </form>
            <p className="text-center mt-3">
              Already have an account?{" "}
              <a href="Login" className="custom-link">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;