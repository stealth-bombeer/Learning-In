import { useState, useEffect } from "react";
import {room} from  './Joinroom'
import {useAuthContext} from '../hooks/useAuthContext'
const Ranklist = () => {
  const [error,setError]=useState('')
  const {user}=useAuthContext()
  if(!user)
    {
      setError('You must be logged in ')
      return 
    }

    let rankArray;
  console.log(room);
    fetch("http://localhost:5000/ranklist", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          'Authorization':`Bearer ${user.accessToken}`,
          room:room,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.rank.scoreArray, "Ranklist-Received");
          rankArray=data.rank.scoreArray;
          rankArray.map((pos)=>
          {
            console.log(pos.username," ",pos.score)
          })
        });

        
    return (  
 <div className="create">
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere,
        magnam sint porro qui quia dicta, ut neque perspiciatis dolore sapiente
        aspernatur expedita placeat modi voluptatibus nam earum aliquid sequi?
      </h2>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere,
        magnam sint porro qui quia dicta, ut neque perspiciatis dolore sapiente
        aspernatur expedita placeat modi voluptatibus nam earum aliquid sequi?
      </h2>
      </div>
    );
}
 
export default Ranklist;