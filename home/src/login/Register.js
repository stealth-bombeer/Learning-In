import React from "react";
import loginImg from "./login.svg";
import { Link,useNavigate} from 'react-router-dom';
import "./style.css";
import "./style.css";
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

    // <div className="base-container">

    //   <div className="header">Register</div>
    //   <div>
    //     <form onSubmit={handleSubmit}>
    //       <div className="content">

    //         <div className="image">
    //           <img src={loginImg} />
    //         </div>
    //         <div className="form">
    //           <div className="form-group">
    //             <label htmlFor="username">Username</label>
    //             <input type="text" name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="email">Email</label>
    //             <input type="text" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="password">Password</label>
    //             <input type="text" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="password">Confirm Password</label>
    //             <input type="text" name="confirmpassword" placeholder="Re-Enter Password" onChange={(e) => setConfirmPassword(e.target.value)} />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="footer">
    //         <button type="submit" className="btn">
    //           Register
    //         </button>
    //         <div class="underline hover:underline-offset-4">
    //         <Link to="/">Already have an account?</Link>
    //         </div>

    //       </div>
    //     </form>
    //   </div>

    // </div>
    
<div class="login-box">
  
  <form>
  <div className="text-white text-2xl mb-4">
      <h6>SIGNUP</h6>
      </div>
    <div class="user-box">
    <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
      <label>Username</label>
    </div>
    <div class="user-box">
    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
      <label>Email</label>
    </div>
    <div class="user-box">
    <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
      <label>Password</label>
    </div>
    <div class="user-box">
    <input type="text" name="confirmpassword" placeholder="Re-Enter Password" onChange={(e) => setConfirmPassword(e.target.value)} />
      <label>Confirm Password</label>
    </div>
    <a href="#" onClick={handleSubmit}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
    <div class="underline hover:underline-offset-4">
            <Link to="/">Already have an account?</Link>
             </div>
  </form>
</div>
  );
};
export default Register;
export { authUserregisterd };
