import React, { useState, useContext } from "react";  
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";  // 新增
import "../CSS/Login.css"; // Ensure the path is correct
import "../styles.css";  // 全局引入 styles.css

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);  // 新增

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 新增邮箱格式验证
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/api/users/login", {
        email,
        password,
      });
      if (res.status === 200) {
        navigate("/home"); // Navigate to Main page on successful login
      }
    } catch (err) {
      console.error(err);
      alert("Error logging in");
    }
  };

  return (
    <div className="login-page">
      <div className="Login">
        <div className="card-login">
          <div className="card-body">
            <h2 className="card-title text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email" // 修改为 type="email"
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
              <button type="submit" className="btn btn-success btn-block">
                Login
              </button>
            </form>
            <p className="text-center mt-3">
              Don't have an account?{" "}
              <a href="/" className="custom-link">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
