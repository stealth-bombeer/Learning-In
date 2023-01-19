import { useState, useEffect,useRef } from "react";
import { useLocation } from "react-router-dom";
import {useNavigate} from'react-router-dom'
import {room} from  './Joinroom'
import {authUser,y} from '../login/Login'
import {authUserregisterd} from "../login/Register";

const Scorecard = ({score,count,setCount}) => {
  const navigate=useNavigate();
  const dataFetchedRef = useRef(false)

  const handleClick =(e) => {
    e.preventDefault();
    navigate('/home')
  } 
  const handleRank =(e) => {
    e.preventDefault();
    navigate('/ranklist')
  } 
let user=authUser?authUser:authUserregisterd;
console.log(user);
 useEffect(()=>
 {
  if (dataFetchedRef.current) return;
  dataFetchedRef.current = true;
  console.log(score);
  console.log("2dnb");
  console.log(room);
  console.log(authUser);
  fetch('http://localhost:5000/scorecard', {
    method: 'POST',
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      score:score,
      username:user,
      room:room
    })
  }
  )
    .then((res) => {
       return res.json()
    })
    .then((data) => {
      console.log(data, "questionset-Added")  

    })
 });

    return ( 
     <div>
        <p>dfhhhlfkwj</p>
        <p>dfhhhlfkwj</p>
        <p>dfhhhlfkwj</p>
        <p>dfhhhlfkwj</p>
        <p>Your Fucking Score is: {score}/{count-1}</p>
        <button
        onClick={handleClick}
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/home"
      >
        Go to homepage
        </button>
      <button
     onClick={handleRank}
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/ranklist"
      >
        Ranklist
      </button>
        </div>
     );
}
 
export default Scorecard;