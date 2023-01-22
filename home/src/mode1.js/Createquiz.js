// import { useState,useEffect } from "react";

// const Createquiz = () => {

//     const [topic, setTopic] = useState('');
//     const [question, setQuestion] = useState('');
//     const [opta, setOpta] = useState('');
//     const [optb, setOptb] = useState('');
//     const [optc, setOptc] = useState('');
//     const [optd, setOptd] = useState('');
//     const [ans, setAns] = useState('');
//     const[count,setCount]=useState(1)
//     const [fired,setFired]=useState(0);
//     const [questionArray,setQuestionArray]=useState([]);
//     let p=1;
//     const handleSubmit = (e) => {
//         e.preventDefault();
//          console.log(questionArray);
         
        
//     }
//   const handlenext=  (e)=>
//   {
//     e.preventDefault();
//     const quest = {  topic,question, opta,optb,optc,optd,ans };
//       if(questionArray.length>count)
//       {
//         setTopic();
//         setQuestion(' ');
//         setOpta(' ');
//         setOptb(' ');
//         setOptc(' ');
//         setOptd(' ');
//         setAns(' ');

//       }

//     console.log(quest);
    
//      setQuestionArray([...questionArray,{ topic:topic,question:question, opta:opta,optb:optb,optc:optc,optd:optd,ans:ans }]);
     
//    setCount(parseInt(count)+1);
//     setTopic(' ');
//     setQuestion(' ');
//     setOpta(' ');
//     setOptb(' ');
//     setOptc(' ');
//     setOptd(' ');
//     setAns(' ');
//     // setTimeout(() => {
//     //   console.log(questionArray.length)
//     // }, 2000);
//     console.log(count);
    

//   }

//   const handleprev=(e)=>
//   { e.preventDefault();
//     setFired(parseInt(fired)-1);
//     // console.log(count)
//     // setCount(parseInt(count)-1);
//     setCount((count) => count - 1);
//     console.log(count);
//     let x=fired-1;
//   const l=questionArray[questionArray.length+parseInt(x)]
//     console.log("previous fired");
//     // console.log(count);
//     // console.log(parseInt(x))
//     console.log(l)
//     console.log(count)
//     setTopic(l.topic);
//     setQuestion(l.question);
//     setOpta(l.opta);
//     setOptb(l.optb);
//     setOptc(l.optc);
//     setOptd(l.optd);
//     setAns(l.ans);

//   }

//   // useEffect(()=>
//   // {

//   // },[count])
  

//     return ( 
//     <div className="create">
//     <h2>Add a New Question</h2>
//     <form>
//       <label>Add the topic:</label>
//       <input 
//         type="text" 
//         required 
//         value={topic}
//         onChange={(e) => setTopic(e.target.value)}
//       />
//       <p>{count}</p>
//       <label>Add the question:</label>
//       <textarea
//         required
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//       ></textarea>
//       <label>Add option A:</label>
//       <input 
//         type="text" 
//         required 
//         value={opta}
//         onChange={(e) => setOpta(e.target.value)}
//       />
//       <label>Add option B:</label>
//       <input 
//         type="text" 
//         required 
//         value={optb}
//         onChange={(e) => setOptb(e.target.value)}
//       />
//       <label>Add option C:</label>
//       <input 
//         type="text" 
//         required 
//         value={optc}
//         onChange={(e) => setOptc(e.target.value)}
//       />
//       <label>Add option D:</label>
//       <input 
//         type="text" 
//         required 
//         value={optd}
//         onChange={(e) => setOptd(e.target.value)}
//       />
//       <label>Select the correct option:</label>
//         <select
//           value={ans}
//           required
//           onChange={(e) => setAns(e.target.value)}
//         >
//           <option value="A">A</option>
//           <option value="B">B</option>
//           <option value="C">C</option>
//           <option value="D">D</option>
//         </select>
      
//       <button onClick={handleprev}>prev</button>
//       <button onClick={handlenext}>next</button>
//       <button onClick={handleSubmit}>Done</button>
//     </form>
//   </div> );
// }
 
// export default Createquiz;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {roomCode} from  './Codetimer'
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
          // if(quest[quest.length])
          // {
          //   setCount(count+1);
          // }
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
        // console.log('a')
        // console.log(i)
        // console.log(count)
       
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
            
            //console.log(quest.length-i+1)
            // if(counter===0)
            // {
            //   setCounter(counter+1)
            //   setCount(count+1)
            // }
           
            setTitle(obj.title)
            setOpta(obj.opta)
            setOptb(obj.optb)
            setOptc(obj.optc)
            setOptd(obj.optd)
            setAns(obj.ans)
            setI(i-1);
            setCount(count+1)
            // console.log('b')
            // console.log(i)
            // console.log(count)
            //console.log(count);
            // if(count===quest.length-1)
            // {
            //   setTopic('');
            //   // setTitle('');
            //   // setOpta('');
            //   // setOptb('');
            //   // setOptc('');
            //   // setOptd('');
            //   // setAns('');
            //   console.log('c')
            // }
          }
         })
      }
    }
    

    const handlePrev = (e)=>{
       e.preventDefault();
       const newQuest = quest.map(obj => {
        if(obj.id===quest.length-i-1){
        //console.log(quest.length-i)
        
        setTitle(obj.title)
        setOpta(obj.opta)
        setOptb(obj.optb)
        setOptc(obj.optc)
        setOptd(obj.optd)
        setAns(obj.ans)
        setI(i+1);
        setCount(count-1)
        // if(counter<1)
        // {
        //   setCount(count+1)
        //   setCounter(counter+1)
        // }
        // console.log('c')
        // console.log(i)
        // console.log(count)
        }
       })
    }

    // const handleDone = (e) =>{
    //   e.preventDefault();
    //   console.log(quest)
    //   console.log(quest.length)
    //   console.log(count)
    // }


    const handleDone  = (e) => {
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
          adminName: "Kunal",
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
    const myStyle = {
      backgroundImage:
          "url('https://gshelper.com/wp-content/uploads/2017/09/Quiz-Logo.png')",
      height: '100vh',
      marginTop: '120px',
      fontSize: '10px',
      backgroundSize: 'contain',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      
  };

    return ( 
   
    <div className=" grid grid-cols-3">
      <div className="col-span-1 bg-center">
    <div style={myStyle}>
   </div>
   </div>
   <div className="create col-span-2 pl-60 pt-8">
  <div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl p-16 rounded-lg bg-white shadow-lg">
    
    <form>
    <div>
    
      
      <div>
      <label className="bold  text-2xl font-Playfair Display  font-bold text-cyan-800 text-area:width-">ADD THE QUESTION:</label>
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