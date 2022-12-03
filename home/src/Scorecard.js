import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Scorecard = () => {
    const [score, setScore] = useState(0);

    setScore(location.score)
    return ( 
     <div>
        <p>dfhhhlfkwj</p>
        <p>dfhhhlfkwj</p>
        <p>dfhhhlfkwj</p>
        <p>dfhhhlfkwj</p>
        <p>{score}</p>
        </div>
     );
}
 
export default Scorecard;