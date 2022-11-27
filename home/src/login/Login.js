import React from "react";
import loginImg from "./login.svg";
import { useState } from "react"
import { Link } from 'react-router-dom';
import "./style.scss";

const Login = () => {
  const [input, setInput] = useState({
    username:"",
    password:""
  })
  // const [logged, setLogged] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Before");
    console.log(input);
    console.log("After");
    // console.log(username);
    fetch('http://localhost:5000/', {
      method: 'POST',
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(input

      )
    }
    )
      .then((res) => {
        res.json()
        // setLogged(true);
        // console.log("logged");
        // console.log(logged);
      })
      .then((data) => {
        console.log(data, "userregisterd")

      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div>
        <form >
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" value={input.username} onChange={(e) => {
                  setInput({...input, [e.target.name]:e.target.value});console.log(input.username);
                }} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={input.password} placeholder="password" onChange={(e) => {
                  setInput({...input, [e.target.name]:e.target.value});console.log(input.password);
                }} />
              </div>
            </div>
          </div>
          <div className="footer">
      <Link to="/home">
            <button  onClick={handleSubmit} ype="submit" className="btn">
              Login
 
            </button>
       </Link>  
          </div>
        </form>
      </div>

    </div>
  );
}

export default Login;