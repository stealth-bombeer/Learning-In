import { useState, useEffect } from "react";
import { authUser, y } from "../login/Login";
import { authUserregisterd } from "../login/Register";
import "./Viewprofile.css";
import { useAuthContext } from '../hooks/useAuthContext';
import {Chart,defaults} from 'chart.js/auto';

import { Line } from 'react-chartjs-2';

const Viewprofile = () => {
  // let user = authUser ? authUser : authUserregisterd;
  const {user}=useAuthContext()
  let scorearr;
  //let onscore=[];
  const [onscore,setOnscore]=useState([]);
  const [personalScore, setPersonalScore] = useState(0);
 
  

  fetch("http://localhost:5000/viewprofile", {
    method: "GET",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      'Authorization':`Bearer ${user.accessToken}`,
      username: user.registeredUser,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //personalScore = data.personalscore.totalscore;
      scorearr = data.personalscore.score_arr;
      console.log(scorearr);
      //onscore = scorearr[0].indiv_score;
      //console.log(onscore);
      for(let i=0;i<scorearr.length;i++)
      {
        onscore[i]=scorearr[i].indiv_score;
        setOnscore(onscore)
        //console.log(onscore);
      }
      //console.log(onscore);
      setPersonalScore(data.personalscore.totalscore);
      console.log(personalScore);
    });

  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 50);
    }
  }, [filled, isRunning]);
  console.log(onscore);

  
 

  return (
    <div>
      <p>Hii</p>
      <p>Hii</p>
      <p>Hii</p>
      <p>Hii</p>
      <p>Score:{personalScore}</p>

      <div>
        <div className="progressbar">
          <div
            style={{
              height: "100%",
              width: `${(personalScore % 10) * 10}%`,
              backgroundColor: "#a66cff",
              transition: "width 0.5s",
            }}
          ></div>
          <span className="progressPercent">
            Level: {Math.floor(personalScore / 10) + 1}{" "}
          </span>
        </div>
        {/* <button className="btn" onClick={() => {setIsRunning(true)}}>Run</button> */}
      </div>

      <div>
      <Line
        data={{
          labels: ['Test:1', 'Test:2', 'Test:3', 'Test:4', 'Test:5', 'Test:6','Test:7',"Test:7",'Test:8','Test:9','Test:10'],
          datasets: [
            {
              label: 'Marks',
              data: onscore,
              fill: 'origin', 
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 3,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>

    </div>
  );
};

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
