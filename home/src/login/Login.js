import React from "react";
import loginImg from "./login.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useLogin } from "../hooks/useLogin";

let x = false;
let authUser = "";
let y = 5;
const Login = () => {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
    await login(username, password);
  };

  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div>
        <form>
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className=" footer ">
            <div class="m-auto">
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              type="submit"
              className="btn m-auto "
            >
              Login
            </button>
            </div>
          </div>
        </form>
      </div>
     
  <div class="m-auto">
     New here ?<a href='/register'>Register</a>
  
</div>
    </div>
  );
};

export default Login;
export { x };
export { authUser };
export { y };
