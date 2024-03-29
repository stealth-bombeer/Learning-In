import { useState, useEffect, Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import "./Quiz1.css";
import correctNotification from "../correct-answer.mp3";
import wrongNotification from "../wrong-answer.mp3";
import buttonSound from "../button-sound.mp3";
let data, questionArray, timer, x;

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("hii");
};

const Quiz1 = ({ score, setScore, count, setCount }) => {
  const [question, setQuestion] = useState("");
  const location = useLocation();
  const [opta, setOpta] = useState("");
  const [optb, setOptb] = useState("");
  const [optc, setOptc] = useState("");
  const [optd, setOptd] = useState("");
  const [room, setRoom] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [error, setError] = useState("");
  const [startTimer, setStartTimer] = useState(false);
  const [ans, setAns] = useState(" ");
  const { user } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      setError("You must be logged in ");
      return;
    }
    setRoom(location.state.room);
    if (room) {
      console.log(room);
      fetch("https://learning-in-production.up.railway.app/quiz1", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${user.accessToken}`,
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
    x = !startTimer;
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
    if (x) {
      time = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds == timer) {
          setSeconds(0);
          // console.log(count);
          if (count < questionArray.length) {
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
            {
              navigate("/scorecard", { state: { score } });
            }
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
    console.log(score);
    console.log(room);
    navigate("/scorecard");
  };
  const handleSelect = (option) => {
    // e.preventDefault();
    if (option == questionArray[count - 1].ans) {
      setTimeout(() => {
        document.getElementById("correct-sound").play();
      }, 100);
      console.log("Right answer");
      setScore(score + 1);
      console.log(score);
    } else {
      setTimeout(() => {
        document.getElementById("wrong-sound").play();
      }, 100);
      console.log("Wrong answer");
      console.log(score);
    }
    setCount(count + 1);
    if (count === questionArray.length) {
      clearInterval(time);
      {
        navigate("/scorecard", { state: { score } });
      }
    }
    setQuestion(questionArray[count].title);
    setOpta(questionArray[count].opta);
    setOptc(questionArray[count].optc);
    setOptd(questionArray[count].optd);
    setOptb(questionArray[count].optb);
    setAns(questionArray[count].ans);
    setSeconds(0);
  };
  const myStyle = {
    backgroundImage:
      "url('https://i.pinimg.com/originals/e1/62/c7/e162c7c175aa7e532dcce478b31609f8.jpg')",
    height: "100vh",
    backgroundcolor: "white",
    backgroundSize: "100% 100%",
    width: "100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={myStyle}>
      <div class="flex justify-around mt-10  ">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-4xl  ">
          <div className="quiz">
            <div className="portal1">
              <Fragment>
                <audio id="correct-sound" src={correctNotification}></audio>
                <audio id="wrong-sound" src={wrongNotification}></audio>
                <audio id="button-sound" src={buttonSound}></audio>
              </Fragment>
              <div>
                <p>Timer: {seconds < 10 ? "0" + seconds : seconds}</p>
                <p>Question no: {count}</p>
                <p>Score: {score}</p>
                <div className="question">
                  <div className="singleQuestion">
                    <h2>Question</h2>
                    <textarea value={question}>{question}</textarea>
                    <div className="options">
                      <div className="buttona">
                        <button onClick={() => handleSelect("A")} type="submit">
                          {opta}
                        </button>
                      </div>
                      <div className="buttonb">
                        <button onClick={() => handleSelect("B")} type="submit">
                          {optb}
                        </button>
                      </div>
                      <div className="buttonc">
                        <button onClick={() => handleSelect("C")} type="submit">
                          {optc}
                        </button>
                      </div>
                      <div className="buttond">
                        <button onClick={() => handleSelect("D")} type="submit">
                          {optd}
                        </button>
                      </div>
                    </div>
                    {x ? (
                      <div className="start">
                        <button
                          className="inline-block px-2 py-2.5  w-24 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
                          onClick={handleClick}
                        >
                          Quit
                        </button>
                      </div>
                    ) : (
                      <div className="start">
                        <button
                          className="inline-block px-2 py-2.5 w-24 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
                          onClick={handleStart}
                          type="submit"
                        >
                          Start
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz1;
