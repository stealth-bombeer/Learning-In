import { useState,useEffect } from 'react';
import {authUser,y} from '../login/Login'
import {authUserregisterd} from "../login/Register";
import "./Viewprofile.css"

const Viewprofile = () => {

    let user=authUser?authUser:authUserregisterd;
    const [personalScore,setPersonalScore] = useState(0)

    fetch("http://localhost:5000/viewprofile", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          username:user,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          
          //personalScore = data.personalscore.totalscore;
          setPersonalScore(data.personalscore.totalscore)
          console.log(personalScore);

        });

        const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		if (filled < 100 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 2), 50)
		}
	},[filled, isRunning])

    return (
        <div>
        <p>Hii</p>
        <p>Hii</p>
        <p>Hii</p>
        <p>Hii</p>
        <p>Score:{ personalScore }</p>

        <div>
		  <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${ (personalScore%10)*10}%`,
				  backgroundColor: "#a66cff",
				  transition:"width 0.5s"
			  }}></div>
			  <span className="progressPercent">Level: {Math.floor(personalScore/10)+1} </span>
		  </div>
		  {/* <button className="btn" onClick={() => {setIsRunning(true)}}>Run</button> */}
	</div>

        </div>
      );
}
 
export default Viewprofile;

// import React, {useState, useEffect} from 'react'

// export default function Progressbar() {
// 	const [filled, setFilled] = useState(0);
// 	const [isRunning, setIsRunning] = useState(false);
// 	useEffect(() => {
// 		if (filled < 100 && isRunning) {
// 			setTimeout(() => setFilled(prev => prev += 2), 50)
// 		}
// 	},[filled, isRunning])
//   return (
// 	  <div>
// 		  <div className="progressbar">
// 			  <div style={{
// 				  height: "100%",
// 				  width: `${filled}%`,
// 				  backgroundColor: "#a66cff",
// 				  transition:"width 0.5s"
// 			  }}></div>
// 			  <span className="progressPercent">{ filled }%</span>
// 		  </div>
// 		  <button className="btn" onClick={() => {setIsRunning(true)}}>Run</button>
// 	</div>
//   )
// }