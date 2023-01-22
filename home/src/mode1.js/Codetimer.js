import { useState,useRef} from "react";
import { useNavigate } from "react-router-dom";
import Createquiz from "./Createquiz";
const { v4:uuid } = require('uuid');
const roomCode=uuid().slice(0,5);

const Codetimer = ({time,setTime,code,setCode}) => {

   const [quiztime,setQuiztime]=useState()
    const navigate=useNavigate();
  
    const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(quiztime)
     if(!quiztime)
     { 
      alert(`Please enter time `)
      return ;
     }
     else{
      setTime(quiztime)
       navigate("/createquiz");
     }
    }
   
       return ( 
        <div className="codetimer">
            <h2>h</h2>
            <h2>h</h2>
            <h2>h</h2>
            <h2>h</h2>
            {/* <h1>Room Code is: {code +1}</h1> */}
      <h1> Room Code is :{roomCode} </h1>

            <label>Select Time per quest:</label>
        <select
          value={quiztime}
          required
          onChange={(e) => setQuiztime(e.target.value)}
        >
          <option value="None">None</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      
      <button type="submit" onClick={handleSubmit}>
        Submit
        </button>
        </div>
        
     );
}
 
export default Codetimer;
export {roomCode};