//import { useState } from 'react';
//import {authUser,y} from '../login/Login'
//import {authUserregisterd} from "../login/Register";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from "react";
import { authUser, y } from "../login/Login";
import { authUserregisterd } from "../login/Register";
import "./Viewprofile.css";
//import { useAuthContext } from '../hooks/useAuthContext';
import { Chart, defaults } from "chart.js/auto";

import { Line } from "react-chartjs-2";

const Profile = () => {
  let noftest;
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [totsc, setTotsc] = useState(0);
  const [n, setN] = useState(0);
  // let user = authUser ? authUser : authUserregisterd;
  const { user } = useAuthContext();
  //const {user}=useAuthContext()
  let scorearr;
  //let onscore=[];
  const [onscore, setOnscore] = useState([]);
  const [personalScore, setPersonalScore] = useState(0);

  fetch("https://learning-in-production.up.railway.app/profile", {
    method: "GET",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${user.accessToken}`,
      username: user.registeredUser,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setName(data.info.username);
      setEmail(data.info.email);
      setTotsc(data.info.totalscore);
      noftest = data.info.score_arr;
      setN(noftest.length);
      console.log(name);
    });
  //console.log👎

  fetch("https://learning-in-production.up.railway.app/viewprofile", {
    method: "GET",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${user.accessToken}`,
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
      for (let i = 0; i < scorearr.length; i++) {
        onscore[i] = scorearr[i].indiv_score;
        setOnscore(onscore);
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
    <div class="bg-white w-full h-screen">
      <div className="grid grid-cols-3 gap-0.25 mt-20">
        <div class=" rounded-lg pb-4 bg-slate-100  grid col-span-1 shadow-lg ">
          <div class="flex  justify-center object-contain w-96 ml-14  ">
            <img
              src="https://st3.depositphotos.com/3037725/13661/v/450/depositphotos_136613140-stock-illustration-faces-avatar-in-circle-portrait.jpg"
              className="object-contain  "
            />
          </div>
          <div className="dhr  mt-10 ">
            <div className="text-purple-800 font-sass font-bold text-2xl">
              <div className="font-sass font-bold mb-4 inline-flex ">
                <img
                  src=" https://cdn.onlinewebfonts.com/svg/img_555124.png"
                  className="w-6 h-6 mr-2"
                />
                <div>Name: {name}</div>
              </div>
              <div className="mb-4 ">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.ON_Kljd6kCfX_PoCbVHq_gHaHa&pid=Api&P=0"
                  className="w-6 h-6 mr-2 inline-flex"
                />
                <div>E-mail id: {email}</div>
              </div>
              <div className="mb-4">
                {/* <p>Total score: {totsc}</p>
        <p>Level: {Math.floor(totsc / 10) + 1}</p> */}
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.gWBcSlRD9VJxJHR00082XQHaG-&pid=Api&P=0"
                  className="w-6 h-6 mr-2 inline-flex"
                />
                <div>Number of tests given: {n}</div>
              </div>
              <div>
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.uov9voDMN3E3dMUlrQxHwAHaHa&pid=Api&P=0"
                  className="w-6 h-6 mr-2 inline-flex"
                />
                <div>Score:{personalScore}</div>
              </div>
            </div>
          </div>
        </div>
        <div class=" rounded-lg grid col-span-2 bg-white px-4 grid shadow-lg">
          <div className="flex  justify-center object-contain">
            <div className="progressbar  mt-10">
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

          <div className="mt-10">
            <Line
              data={{
                labels: [
                  "Test:1",
                  "Test:2",
                  "Test:3",
                  "Test:4",
                  "Test:5",
                  "Test:6",
                  "Test:7",
                  "Test:7",
                  "Test:8",
                  "Test:9",
                  "Test:10",
                ],
                datasets: [
                  {
                    label: "Marks",
                    data: onscore,
                    fill: "origin",
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
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
      </div>
    </div>
  );
};

export default Profile;
