import { Button } from "@material-ui/core";
import { useEffect,useState } from "react";
import React, {createContext, useContext} from 'react';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import {authUser,y} from '../../login/Login'
import {authUserregisterd} from "../../login/Register";
import sound from "../../crowd-cheer.mp3"
import "./Result.css";

const Result = ({score1, setScore1}) => {
  const navigate = useNavigate();
  const {user}=useAuthContext()
  const [error,setError]=useState()
  console.log('hii')
  useEffect(() => {
    const audio = new Audio(sound);
    audio.play();
    
  }, []);

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
 
    const myStyle = {
    
      backgroundImage:
            "url('https://wallpapercave.com/wp/wp3222370.jpg')",
        height: '100vh',
        marginTop: '10px',
        fontSize: '10px',
        backgroundSize: '200% 200%',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        
      
      
  };
  
  return (
   <div style={myStyle}>
      
    
<div className="result">
  <div className="mt-48">
    <div class="wrap">
     <div class="round">
    <div class="star">✭</div>
    <div class="star">✭</div>
    <div class="star">✭</div>
    
    <div class="rocket">
      <div class="center1">
        <div class="body1">
          <span>Z</span>
        </div>
        <div class="wing left"></div>
        <div class="wing right"></div>
      </div>
      <div class="side left">
        <div class="top"></div>
      </div>
      <div class="side right">
        <div class="top"></div>
      </div>
    </div>
    
    <div class="cloud">
      <div class="c1"></div>
      <div class="c2"></div>
      <div class="c3"></div>
      <div class="c4"></div>
      <div class="c5"></div>
      <div class="c6"></div>
      <div class="c7"></div>
      <div class="c8"></div>
      <div class="c9"></div>
    </div>
  </div>
</div>
<h1>YOUR SCORE!</h1>
</div>
    
<div>
<div class="flex justify-center ">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://tse3.mm.bing.net/th?id=OIP.xdkQtGgRvyUF8js8-dtNIQHaHa&pid=Api&P=0" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">FINAL SCORE</h5>
<p class="text-black text-base text-xl mb-4">
      <span className="title">{score1}</span>
      </p>
      <button class="bg-transparent hover:bg-blue-900 text-lg text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
  
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={handleHome}
      >
        Go to homepage
      </button>
    </div>
    </div>
  </div>
</div>
</div>
</div>
  );
};

export default Result;
