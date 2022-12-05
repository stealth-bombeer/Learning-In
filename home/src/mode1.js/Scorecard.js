import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Scorecard = ({score,count,setCount}) => {
    

   //  setScore(location.score)
    return ( 
     <div>
        <p>dfhhhlfkwj</p>
        <p>dfhhhlfkwj</p>
        <p>dfhhhlfkwj</p>
        <p>dfhhhlfkwj</p>
        <p>Your Fucking Score is: {score}/{count-1}</p>
        <button
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