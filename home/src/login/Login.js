import React from "react";
import loginImg from "./login.svg";
import { useState } from "react"
import { Link,useNavigate } from 'react-router-dom';
import "./style.scss";
let x=false;
let authUser='';
let y=5; 
const Login = () => {
  const [input, setInput] = useState({
    username:"",
    password:""
  })
  const navigate=useNavigate();
  const [logged, setLogged] = useState(false);
  const [name,setName]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    // console.log(username);
    fetch('http://localhost:5000/', {
      method: 'POST',
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(input)
    }
    )
      .then((res) => {
       return res.json()
      })
      .then((data) => {
        // setLogged(true);
        x=true;
        console.log(data, "Logged-In")
        if(data.status==='ok')
   { authUser=data.username;
    console.log(authUser);
    navigate('/home');}
        console.log(x);

      })
  }

// console.log(x);
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
            <button  onClick={handleSubmit} type="submit" className="btn">
              Login
            </button>

          </div>
        </form>
      </div>

    </div>
  );
}

export default Login;
export {x};
export{authUser};
export {y};