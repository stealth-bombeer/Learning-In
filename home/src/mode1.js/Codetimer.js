import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Createquiz from "./Createquiz";

const Codetimer = ({time,setTime,code,setCode}) => {
    
   
    const navigate=useNavigate();
    
    const handleSubmit=(e)=>{
    //    <Createquiz
    //    time={time}
    //    setTime={setTime}
    //    />
    e.preventDefault();
    setCode(code+1);
       navigate("/createquiz");
    }
    return ( 
        <div className="codetimer">
            <h2>h</h2>
            <h2>h</h2>
            <h2>h</h2>
            <h2>h</h2>
            <h1>Room Code is: {code +1}</h1>

            <label>Select Time per quest:</label>
        <select
          value={time}
          required
          onChange={(e) => setTime(e.target.value)}
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