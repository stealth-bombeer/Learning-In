import { button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import correctNotification from "../../correct-answer.mp3";
import wrongNotification from "../../wrong-answer.mp3";
import buttonSound from "../../button-sound.mp3";
import "./Question.css";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore1,
  score1,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  //const[score,setScore1] = useState(0)

  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) {
      setTimeout(() => {
        document.getElementById("wrong-sound").play();
      }, 100);

      return "wrong";
    } else if (i === correct) {
      //setTimeout(()=>{ document.getElementById('correct-sound').play()},500);
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setTimeout(() => {
        document.getElementById("correct-sound").play();
      }, 100);
      setScore1(score1 + 1);
    }
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
      setTimeout(() => {
        document.getElementById("button-sound").play();
      }, 100);
    } else setError("Please select an option first");
  };

  function handleQuit() {}

  return (
    <div className="question">
      <Fragment>
        <audio id="correct-sound" src={correctNotification}></audio>
        <audio id="wrong-sound" src={wrongNotification}></audio>
        <audio id="button-sound" src={buttonSound}></audio>
      </Fragment>
      <h3>Question {currQues + 1} :</h3>

      <div className="singleQuestion">
        <h4>{questions[currQues].question}</h4>
        <div className="options">
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <button
            className="inline-block px-2 py-2.5  bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            //href="/result"
            onClick={() => {
              navigate("/result");
              setCurrQues(0);
              setQuestions();
            }}
          >
            Quit
          </button>
          <button
            className="inline-block px-2 ml-4 py-2.5 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
