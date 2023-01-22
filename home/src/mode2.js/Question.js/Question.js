import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore1(score1 + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  function handleQuit() {}

  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
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
