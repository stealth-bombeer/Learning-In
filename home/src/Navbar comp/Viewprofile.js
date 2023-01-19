import { useState } from 'react';
import {authUser,y} from '../login/Login'
import {authUserregisterd} from "../login/Register";

const Viewprofile = () => {

    let user=authUser?authUser:authUserregisterd;
    const [personalScore,setPersonalScore] = useState(0)

    fetch("http://localhost:5000/viewprofile", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          username:user,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          
          //personalScore = data.personalscore.totalscore;
          setPersonalScore(data.personalscore.totalscore)
          console.log(personalScore);

        });

    return (
        <div>
        <p>Hii</p>
        <p>Hii</p>
        <p>Hii</p>
        <p>Hii</p>
        <p>Score:{ personalScore }</p>
        </div>
      );
}
 
export default Viewprofile;