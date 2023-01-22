import { useState } from 'react';
import {room} from  './Joinroom'
const Ranklist = () => {
    //const [rankArray,setRankArray]=useState([]);
    const [ra,setRa]=useState([]);
    let rankArray;
  //console.log(room);
    fetch("http://localhost:5000/ranklist", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          room:room,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          //console.log(data.rank.scoreArray, "Ranklist-Received");
          rankArray=data.rank.scoreArray;
         //setRankArray(data.rank.scoreArray);
         //setRa(rankArray)
         //console.log(rankArray)
        //  rankArray.map((pos)=>
        //    {
        //      console.log(pos.username," ",pos.score)
        //    })
        });
        //console.log(rankArray)
        // rankArray.map((pos)=>
        //   {
        //     console.log(pos.username," ",pos.score)
        //   })

          // const ra = rankArray.map((pos) =>
          
          //   <li>{pos.username}</li>
          // );


    return (  
 <div >
  <p>hii</p>
  <p>hii</p>
  <p>hii</p>
  <p>hii</p>
  <p>hii</p>
  <p>hii</p>
  <p>{rankArray[1]}Hii</p>
     
      </div>
    );
}

export default Ranklist;