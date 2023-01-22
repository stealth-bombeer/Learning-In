import { useState, useEffect,useRef} from "react";
import { useLocation } from "react-router-dom";
import {useAuthContext} from '../hooks/useAuthContext'
import {useNavigate} from'react-router-dom'
import {room} from  './Joinroom'
import {authUser,y} from '../login/Login'
import {authUserregisterd} from "../login/Register";

const Scorecard = ({score,count,setCount}) => {
  const navigate=useNavigate();
  const dataFetchedRef = useRef(false);
  const handleClick =(e) => {
    e.preventDefault();
    navigate('/home')
  } 
  const handleRank =(e) => {
    e.preventDefault();
    navigate('/ranklist')
  } 
  const [error,setError]=useState('')
  const {user}=useAuthContext()
// let user=authUser?authUser:authUserregisterd;
console.log(user);
 useEffect(()=>
 {
  if(!user)
    {
      setError('You must be logged in ')
      return 
    }
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
      'Authorization':`Bearer ${user.accessToken}`
    },
    body: JSON.stringify({
      score:score,
      username:user.registeredUser,
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