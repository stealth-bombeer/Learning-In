import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "./Question.js/Question";
import "./Quiz2.css";

const Quiz2 = ({ questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  const [name,setName]=useState('Kunal');
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  const myStyle = {
    backgroundImage:
        "url('https://l450v.alamy.com/450v/2k4wept/frequently-asked-questions-hand-drawn-question-marks-and-text-faq-on-yellow-2k4wept.jpg')",
    height: '100vh',
    backgroundcolor:'white',
    backgroundSize: '100% 100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    
    
};

  return (
    <div style={myStyle}>
    <div class="flex justify-around mt-10">
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-4xl ">
    <div className="quiz">
        
      <span className="subtitle">Welcome, {name}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>
              {/* {questions[currQues].difficulty} */}
              Score : {score}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
    </div>
    </div>
    </div>
  );
};

export default Quiz2;
