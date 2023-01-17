import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Createquiz from "./Createquiz";
// import uuid from 'uuid';
const { v4:uuid } = require('uuid');
const roomCode=uuid().slice(0,5);
const Codetimer = ({time,setTime,code,setCode}) => {
    
   
    const navigate=useNavigate();
  
    const handleSubmit=(e)=>{
    //    <Createquiz
    //    time={time}
    //    setTime={setTime}
    //    />
    e.preventDefault();
    setCode(code + 1);
    navigate("/createquiz");
  }
  const myStyle = {
    backgroundImage:
        "url('https://wallpapercave.com/wp/wp6638441.png')",
    height: '120vh',
    marginTop: '60px',
    fontSize: '50px',
    backgroundSize: 'cover',
    width: '100%',
    backgroundRepeat: 'no-repeat',

};
  return (
    <div style={myStyle}>
    <div className="codetimer pt-40">
      
      <div class="flex justify-center ">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">

          <div class="p-6">


           


            <div className="">
              <div>
                <h1 className="text-2xl font-Playfair Display  font-bold text-cyan-800">Room Code is: {code + 1}</h1>
              </div>
              <textarea
                class="inline-block
                 form-control
                  block
                   w-full
        
                  h-12
                 text-4xl
                    font-normal
                  text-gray-700
                bg-white bg-clip-padding
               border border-solid border-gray-600
               border-2
                     rounded
                transition
                   ease-in-out
                 m-0
                   focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none
                        "
                id="example"
                rows="3"
                placeholder="Your code"
              ></textarea>
            </div>

            <div className="">
              <label className="text-lg font-Playfair Display  font-bold text-cyan-800">SELECT YOUR TIME PER QUESTION:</label>
              <div className="flex flex-row">
              <div class="flex flex-wrap justify-start ">
                <img src="https://th.bing.com/th/id/OIP.7u5lyTHC-QeTgK7BeAaS7AHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="p-1 bg-white border rounded  h-32 w-32" />
              </div>
              <div >
                <div className=" pt-10 ml-20  text-2xl font-bold ">
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
                </div>
                </div>
                </div>
                <div className="pt-10 flex justify-center">
                  <button type="submit" class=" inline-block px-6 py-2.5 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-400 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out"
                                onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Codetimer;
export {roomCode};
