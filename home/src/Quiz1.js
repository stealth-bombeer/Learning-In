import { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
let data, questionArray, timer,x;

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("hii");
};




const Quiz1 = () => {
  const [question, setQuestion] = useState("");
  const location = useLocation();
  const [opta, setOpta] = useState("");
  const [optb, setOptb] = useState("");
  const [optc, setOptc] = useState("");
  const [optd, setOptd] = useState("");
  const [room, setRoom] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [score, setScore] = useState(0);
  let [count, setCount] = useState(1);
  const [startTimer,setStartTimer]=useState(0);
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
          setAns(questionArray[0].ans);
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
      alert("Correct Answer")
      console.log("Right answer");
      setScore(score+1);
      console.log(score);
    }
    else 
    {
      alert("Wrong Answer")
      console.log("Wrong answer")
      console.log(score);
    }
  };

  return (
    <div className="portal1">
      <h2>p</h2>
      <h2>p</h2>
      <h2>p</h2>
      <h2>p</h2>
     
      <p>T{seconds < 10 ? "0" + seconds : seconds}</p>
       <p> {count}</p>
      <h2>Question</h2>
      <textarea value={question}>{question}</textarea>

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
      <div className="start">
        <button onClick={handleStart} type="submit">
          Start
        </button>
      </div>

      <button onClick={handleClick}>Quit</button>
    </div>
  );
};

export default Quiz1;
