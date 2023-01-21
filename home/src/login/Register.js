import React from "react";
import loginImg from "./login.svg";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { Component } from "react";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
let authUserregisterd = "";
const Register = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [confirmpassword, setConfirmPassword] = useState(" ");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password, confirmpassword);
  };

  return (
    <div className="base-container">
      <div className="header">Register</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>

            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Re-Enter Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
       <div class="m-auto">
            <button type="submit" className="btn" disabled={isLoading}>
              Register
            </button>
          </div>
          {error && <div classname="error">{error}</div>}
        </form>
      </div>
      <div class="m-auto">
      Already a User ?<a href='/
      '> Login </a>
</div>
    </div>
  );
};
export default Register;
export { authUserregisterd };
