import { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import "./Quiz1.css";
let data, questionArray, timer,x;

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("hii");
};




const Quiz1 = ({score,setScore,count,setCount}) => {
  const [question, setQuestion] = useState("");
  const location = useLocation();
  const [opta, setOpta] = useState("");
  const [optb, setOptb] = useState("");
  const [optc, setOptc] = useState("");
  const [optd, setOptd] = useState("");
  const [room, setRoom] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
 
  const [startTimer,setStartTimer]=useState(false);
  const [ans,setAns]= useState(' ');
  
  const navigate = useNavigate();
  useEffect(() => {
    setRoom(location.state.room);
    if (room) {
      console.log(room);
      fetch("http://localhost:5000/quiz1", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          room: room,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res, "Questions-Received");
          data = res;
          questionArray = data.questions.questionArray;
          timer = data.questions.timer;
          console.log(timer);
          console.log(questionArray.length);
          // console.log(count);
        });
    }
  }, [room]);
  const handleStart = (e) => {
    e.preventDefault();
    setStartTimer(true);
    console.log(startTimer);
     x=!startTimer;
    console.log(x);
    console.log("quiz started");
    setQuestion(questionArray[0].title);
    setOpta(questionArray[0].opta);
    setOptb(questionArray[0].optb);
    setOptc(questionArray[0].optc);
    setOptd(questionArray[0].optd);
    setAns(questionArray[0].ans);

  };
 
  
  var time;
  useEffect(() => {
    if(x)
    {time = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds == timer) {
        setSeconds(0);
        // console.log(count);
        if (count <questionArray.length) {
          // console.log(count)
          setQuestion(questionArray[count].title);
          setOpta(questionArray[count].opta);
          setOptc(questionArray[count].optc);
          setOptd(questionArray[count].optd);
          setOptb(questionArray[count].optb);
          setAns(questionArray[count].ans);
        } else {
          console.log("Quiz ended");
          clearInterval(time);
          { navigate('/scorecard',{state:{score}})}
        }
        // setQuestion("kunal")
        setCount(count + 1);
      }
      
    }, 1000);
  }
    return () => clearInterval(time);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/scorecard')
  };
  const handleSelect = (option) => {
    // e.preventDefault();
    if(option==questionArray[count-1].ans)
    {
      
      console.log("Right answer");
      setScore(score+1);
      console.log(score);
      
    }
    else 
    {
      
      console.log("Wrong answer")
      console.log(score);
      
    }
    setCount(count + 1);
    if(count===questionArray.length){
      clearInterval(time);
      { navigate('/scorecard',{state:{score}})}
    }
    setQuestion(questionArray[count].title);
          setOpta(questionArray[count].opta);
          setOptc(questionArray[count].optc);
          setOptd(questionArray[count].optd);
          setOptb(questionArray[count].optb);
          setAns(questionArray[count].ans);
    setSeconds(0);
    
  };

  return (
    <div className="portal1">
      <h2>p</h2>
      <h2>p</h2>
      <h2>p</h2>
      <h2>p</h2>
     
      <p>Timer: {seconds < 10 ? "0" + seconds : seconds}</p>
       <p>Question no: {count}</p>
       <p>Score: {score}</p>
       <div className="question">
        <div className="singleQuestion">
      <h2>Question</h2>
      <textarea value={question}>{question}</textarea>
      <div className="options">
      <div className="buttona">
        <button onClick={()=>handleSelect('A')} type="submit">
          {opta}
        </button>
      </div>
      <div className="buttonb">
        <button onClick={()=>handleSelect('B')}  type="submit">
          {optb}
        </button>
      </div>
      <div className="buttonc">
        <button onClick={()=>handleSelect('C')}  type="submit">
          {optc}
        </button>
      </div>
      <div className="buttond">
        <button onClick={()=>handleSelect('D')}  type="submit">
          {optd}
        </button>
      </div>
      </div>
      {x?<div className="start"><button onClick={handleClick}>Quit</button>
      </div>:<div className="start"><button onClick={handleStart} type="submit">
      Start
    </button>
  </div>}


    </div>
    </div>
    </div>
  );
};

export default Quiz1;
