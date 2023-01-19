import { CircularProgress } from "@material-ui/core";
//import React, {createContext, useContext} from 'react';
import { useEffect, useState } from "react";
import Question from "./Question.js/Question";
import "./Quiz2.css";

//export const MyContext = React.createContext();


const Quiz2 = ({score1, setScore1,questions, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  const [name,setName]=useState('Kunal');
  
 // const [score1,setScore1]=useState(0);


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
  // let a= score1
  // console.log(a);
  // console.log('hii')

  return (
    //<MyContext.Provider value={score1}>
    <div className="quiz">
         <h2>h</h2>
        <h2>h</h2>
      <span className="subtitle">Welcome, {name}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>
              {/* {questions[currQues].difficulty} */}
              Score : {score1}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score1={score1}
            setScore1={setScore1}
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
    //</MyContext.Provider>
    
  );
  
};

export default Quiz2;
//export {a};



