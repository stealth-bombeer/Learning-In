import { Button } from "@material-ui/core";
import { useEffect } from "react";
import React, {createContext, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import {authUser,y} from '../../login/Login'
import {authUserregisterd} from "../../login/Register";
import "./Result.css";

const Result = ({score1, setScore1}) => {
  const navigate = useNavigate();
  
  
  console.log('hii')
  const handleHome = (e) => {
    e.preventDefault();
    console.log({score1})
    navigate('/home');
    setScore1(0);
  };
  
  let user=authUser?authUser:authUserregisterd;

  fetch('http://localhost:5000/result', {
    method: 'POST',
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      score1:`${score1}`,
      username:user
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
       
        onClick={handleHome}
      >
        Go to homepage
      </button>
    </div>
  );
};

export default Result;
