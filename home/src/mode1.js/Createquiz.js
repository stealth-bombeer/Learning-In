import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {roomCode} from  './Codetimer'
import {authUser,y} from '../login/Login'
import {authUserregisterd} from "../login/Register";
import {useAuthContext} from '../hooks/useAuthContext'
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
    const [error,setError]=useState('')
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

  const {user}=useAuthContext()

    const handleDone  = (e) => {

      if(!user)
      {
        setError('You must be logged in ')
        return ;
      }
      console.log(user)
      let admin=authUser?authUser:authUserregisterd;
      e.preventDefault();
      navigate('/home')
      console.log(quest.length)
      const userii = quest;
      console.log(userii)
      fetch('http://localhost:5000/createquiz', {
        method: 'POST',
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          'Authorization':`Bearer ${user.accessToken}`
        },
        body: JSON.stringify({
          adminName:user.registeredUser,
          questionArray:userii,
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
    const myStyle = {
      backgroundImage:
          "url('https://gshelper.com/wp-content/uploads/2017/09/Quiz-Logo.png')",
      height: '100vh',
      marginTop: '200px',
      fontSize: '10px',
      backgroundSize: 'contain',
      width: '150%',
      backgroundRepeat: 'no-repeat',
  
  };

    return ( 
      
    <div className=" grid grid-cols-3">
      <div className="col-span-1 bg-center mr-10">
    <div style={myStyle}>
   </div>
   </div>
   <div className="create col-span-2 pl-60 pt-8 ">
  <div class="flex justify-center mt-24">
  <div class="flex flex-col md:flex-row md:max-w-xl p-16 rounded-lg bg-white shadow-lg">
    <form>
    <div>
    
      <p>{parseInt(count)+1}</p>
      <div>
      <label className="bold pt-10 text-2xl font-Playfair Display  font-bold text-cyan-800 text-area:width-">ADD THE QUESTION:</label>
      <textarea className="w-500%
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 pt-8">
      <div>
      <label className="bold text-lg font-merriweather italic font-bold text-cyan-800 textarea-rounded">Add option A:</label>
      <input 
        type="text" 
        required 
        value={opta}
        onChange={(e) => setOpta(e.target.value)}
      />
      
      </div>
      <div>
      <label className="bold text-lg font-merriweather italic font-bold text-cyan-800">Add option B:</label>
      <input 
        type="text" 
        required 
        value={optb}
        onChange={(e) => setOptb(e.target.value)}
      />
      </div>
      <div>
      <label className="bold  text-lg font-merriweather italic font-bold  text-cyan-800">Add option C:</label>
      <input 
        type="text" 
        required 
        value={optc}
        onChange={(e) => setOptc(e.target.value)}
      /></div>
      <div>
      <label className="bold text-lg font-merriweather italic font-bold text-cyan-800">Add option D:</label>
      <input 
        type="text" 
        required 
        value={optd}
        onChange={(e) => setOptd(e.target.value)}
      />
      </div>
      </div>
      <div>
      <label className="bold text-lg pt-5 font-merriweather italic font-bold text-cyan-800">Select the correct option:</label>
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
      </div>
      <div className="pt-10 flex justify-items-center">
      <div className="mr-10">
      <button  onClick={handlePrev} >prev</button>
      </div>
      <div className="mr-10">
      {<button onClick={handleDone}>Done</button> }
      </div>
      
      <button onClick={handleNext}>next</button>
    
      </div>
    </form>
    
  </div> 
  </div>
  </div> 
  </div>
  );
}
 
export default Createquiz;
export {roomCode};