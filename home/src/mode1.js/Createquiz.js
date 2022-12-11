import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {roomCode} from  './Codetimer'
import {authUser,y} from '../login/Login'
import {authUserregisterd} from "../login/Register";
const Createquiz = ({time,setTime,code,setCode}) => {

    
    const [title, setTitle] = useState('');
    const [opta, setOpta] = useState('');
    const [optb, setOptb] = useState('');
    const [optc, setOptc] = useState('');
    const [optd, setOptd] = useState('');
    const [ans, setAns] = useState('');
    const [quest,setQuest]= useState([]);
    const [i,setI]=useState(1);
    const [count,setCount]=useState(0);
    const [counter,setCounter]=useState(0);
    const host={title,opta,optb,optc,optd,ans}
   let room=code
   const navigate = useNavigate();
    const handleNext = (e) => {
        e.preventDefault();
        

        if(count===quest.length)
        {
          if(counter!==0)
          {
            setCount(count+1)
            setCounter(counter+1)
          }
         
        setTitle('');
        setOpta('');
        setOptb('');
        setOptc('');
        setOptd('');
        setAns('');
        setQuest([...quest,{
          id:quest.length,
          title:host.title,
          opta:host.opta,
          optb:host.optb,
          optc:host.optc,
          optd:host.optd,
          ans:host.ans

        }])
        setCount(count+1)
        console.log(quest)
        setTitle('');
        setOpta('');
        setOptb('');
        setOptc('');
        setOptd('');
        setAns('');
      }
      else{
         const newQuest = quest.map(obj => {
          if(obj.id===quest.length-i+1){
           
            setTitle(obj.title)
            setOpta(obj.opta)
            setOptb(obj.optb)
            setOptc(obj.optc)
            setOptd(obj.optd)
            setAns(obj.ans)
            setI(i-1);
            setCount(count+1)
          }
         })
      }
    }
    

    const handlePrev = (e)=>{
       e.preventDefault();
       const newQuest = quest.map(obj => {
        if(obj.id===quest.length-i-1){
        
        setTitle(obj.title)
        setOpta(obj.opta)
        setOptb(obj.optb)
        setOptc(obj.optc)
        setOptd(obj.optd)
        setAns(obj.ans)
        setI(i+1);
        setCount(count-1)
        }
       })
    }



    const handleDone  = (e) => {
      let admin=authUser?authUser:authUserregisterd;
      e.preventDefault();
      navigate('/home')
      console.log(quest.length)
      const user = quest;
      console.log(user)
      fetch('http://localhost:5000/createquiz', {
        method: 'POST',
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          adminName:admin,
          questionArray:user,
          room:roomCode,
          timer:time
        })
      }
      )
        .then((res) => {
           return res.json()
        })
        .then((data) => {
          console.log(data, "questionset-Added")  
          
        })
    }
  

    return ( 
    <div className="create">
    <h2>Add a New Question</h2>
    <h2>h</h2>
    <form >
      <p>{parseInt(count)+1}</p>
      <label>Add the question:</label>
      <textarea
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>
      <label>Add option A:</label>
      <input 
        type="text" 
        required 
        value={opta}
        onChange={(e) => setOpta(e.target.value)}
      />
      <label>Add option B:</label>
      <input 
        type="text" 
        required 
        value={optb}
        onChange={(e) => setOptb(e.target.value)}
      />
      <label>Add option C:</label>
      <input 
        type="text" 
        required 
        value={optc}
        onChange={(e) => setOptc(e.target.value)}
      />
      <label>Add option D:</label>
      <input 
        type="text" 
        required 
        value={optd}
        onChange={(e) => setOptd(e.target.value)}
      />
      <label>Select the correct option:</label>
        <select
          value={ans}
          required
          onChange={(e) => setAns(e.target.value)}
        >
          <option value="None">None</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
      {<button onClick={handleDone}>Done</button> }
    </form>
  </div> );
}
 
export default Createquiz;