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
  // const [input, setInput] = useState({
  //   username:"",
  //   password:""
  // })
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
    await login(username, password);
  };
  const myStyle = {
    // backgroundImage:
    //     "url('https://wallpapercave.com/wp/wp6638441.png')",

    height: "",
    marginTop: "",
    //fontSize: "50px",
    backgroundSize: "cover",
    width: "100%",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={myStyle}>
      <div className="bg-white w-full h-full">
        <div class="login-box ">
          <form>
            <div className="text-white text-2xl mb-4">
              <h6>LOGIN</h6>
            </div>
            <div class="user-box ">
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <label>Username</label>
            </div>
            <div class="user-box">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label>Password</label>
            </div>
            <a href="#" onClick={handleSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
            <div class="underline hover:underline-offset-4">
              <Link to="/register">New User?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
export { x };
export { authUser };
export { y };
