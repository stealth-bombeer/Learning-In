import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {useNavigate} from'react-router-dom'

const Scorecard = ({score,count,setCount}) => {
  const navigate=useNavigate();

  const handleClick =(e) => {
    e.preventDefault();
    navigate('/home')
  } 

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
        </div>
     );
}
 
export default Scorecard;