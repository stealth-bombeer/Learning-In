import { useState, useEffect } from "react";
import {room} from  './Joinroom'
import {useAuthContext} from '../hooks/useAuthContext'
import './RankList.css'
const Ranklist = () => {
  const [error,setError]=useState('')
  const {user}=useAuthContext()
  const [rankArray,setRankArray]=useState([]);
 

    //const [rankArray,setRankArray]=useState([]);
  console.log(room);
  useEffect(() => {
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
          setRankArray(data.rank.scoreArray.sort((a, b) => b.score - a.score));
          //console.log(rankArray)
          rankArray.map((pos)=>
          {
            console.log(pos.username," ",pos.score)
          })
        });
      }, []);

      if(!user)
      {
        setError('You must be logged in ')
        return 
      }

        
    return (  
 <div className="bg-white w-full h-full">
  <div className="grid grid-cols-6 gap-4">
    <div className="col-span-1">
    <img src='https://www.internationalstudentinsurance.com/images/competition-trophy.png' className="w-64 mt-96"/>
    <img src='https://cdn1.iconfinder.com/data/icons/school-icons-2/512/trophy_award_ribon-512.png' className="w-64 mt-64"/>
    </div>
<div className="col-span-4 px-24">
 <div className=" mt-32 mb-10">
  <div className='fonts flex justify-center mb-10'>
    <div className='font-mono tracking-wider text-6xl font-black text-orange-500'>
    RANKLIST
    </div>
  </div>
  <table>
        <tr className="text-4xl text-yellow-400">
          <th> Rank</th>
          <th> Name</th>
          <th> Score</th>
          </tr>
       {rankArray.map((date,index) => (
        <tr >
          
          <td>{index+1}</td>
          <td>{date.username}</td>
          <td>{date.score}</td>
        </tr>
      ))}
    </table>
    </div>
    </div>
    
    {/* <div className="mt-48 mr-24">
      <img src='https://www.internationalstudentinsurance.com/images/competition-trophy.png' />
    </div> */}
     <div className="col-span-1">
    <img src='https://cdn4.iconfinder.com/data/icons/education-282/512/medal-512.png' className="w-64 mt-64"/>
    <img src='https://static.vecteezy.com/system/resources/previews/000/667/541/original/little-boy-student-ready-for-school.jpg' className="w-64 mt-64"/>
    </div>
    </div>
      </div>

      
    );
}
 
export default Ranklist;