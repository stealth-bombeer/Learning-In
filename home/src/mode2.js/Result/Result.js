import { Button } from "@material-ui/core";
import { useEffect,useState } from "react";
import React, {createContext, useContext} from 'react';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import {authUser,y} from '../../login/Login'
import {authUserregisterd} from "../../login/Register";
import "./Result.css";

const Result = ({score1, setScore1}) => {
  const navigate = useNavigate();
  const {user}=useAuthContext()
  const [error,setError]=useState()
  console.log('hii')
  const handleHome = (e) => {
    e.preventDefault();
    console.log({score1})
    navigate('/home');
    setScore1(0);
  };
  
  // let user=authUser?authUser:authUserregisterd;
  if(!user)
  {
        setError('You must be logged in')
        return 
  }

  fetch('http://localhost:5000/result', {
    method: 'POST',
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      'Authorization':`Bearer ${user.accessToken}`
    },
    body: JSON.stringify({
      score1:`${score1}`,
      username:user.registeredUser
    })
  }
  )
    .then((res) => {
       return res.json()
    })
    .then((data) => {
      console.log(data, "Score updated")  

    })
 

  return (
    <div className="result">
      <span className="title">Final Score : {score1}</span>
      <button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={handleHome}
      >
        Go to homepage
      </button>
    </div>
  );
};

export default Result;
