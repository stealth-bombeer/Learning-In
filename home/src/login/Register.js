import React from "react";
import loginImg from "./login.svg";
import { Link,useNavigate} from 'react-router-dom';
import "./style.scss";
import { Component } from "react";
import { useState } from "react";
let authUserregisterd='';
const Register = () => {
let navigate=useNavigate();
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [confirmpassword, setConfirmPassword] = useState(" ");
  const [registered,setRegistered]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, email, password, confirmpassword };
    console.log(user)
    fetch('http://localhost:5000/register', {
      method: 'POST',
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username: user.username,
        email: user.email,
        password: user.password,
        confirmpassword: user.confirmpassword
      })
    }
    )
      .then((res) => {
         return res.json()
      })
      .then((data) => {
        setRegistered(true)
        console.log(data, "userregisterd")  
          if(data.status==='ok')
        { authUserregisterd=data.username;
          console.log(authUserregisterd);
          navigate('/home');}
      })
  }

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
                <input type="text" name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input type="text" name="confirmpassword" placeholder="Re-Enter Password" onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Register
            </button>

          </div>
        </form>
      </div>

    </div>

  );
}
export default Register;
export {authUserregisterd};
