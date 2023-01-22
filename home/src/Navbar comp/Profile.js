import { useState } from 'react';
import {authUser,y} from '../login/Login'
import {authUserregisterd} from "../login/Register";

const Profile = () => {
    let noftest;
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [totsc, setTotsc] = useState(0);
    const [n,setN]= useState(0);
    let user = authUser ? authUser : authUserregisterd;

    fetch("http://localhost:5000/profile", {
    method: "GET",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      username: user,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setName(data.info.username);
      setEmail(data.info.email);
      setTotsc(data.info.totalscore);
      noftest=data.info.score_arr;
      setN(noftest.length);
      console.log(name)
    });
    console.log(n)

    return ( 
        <div>
        <p>Hii</p>
        <p>Hii</p>
        <p>Hii</p>
        <p>Hii</p>

        <h1>Personal Info</h1>
        <p>Name: {name}</p>
        <p>E-mail id: {email}</p>
        <p>Total score: {totsc}</p>
        <p>Level: {Math.floor(totsc / 10) + 1}</p>
        <p>Number of tests given: {n}</p>
        </div>
     );
}
 
export default Profile;