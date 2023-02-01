import { CircularProgress } from "@material-ui/core";
//import React, {createContext, useContext} from 'react';
import { useEffect, useState } from "react";
import Question from "./Question.js/Question";
import { useAuthContext } from "../hooks/useAuthContext";
import "./Quiz2.css";

//export const MyContext = React.createContext();


const Quiz2 = ({score1, setScore1,questions, setQuestions }) => {
  const [options, setOptions] = useState();
  const {user}=useAuthContext()
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
  const myStyle = {
    backgroundImage:
        "url('https://i.pinimg.com/originals/e1/62/c7/e162c7c175aa7e532dcce478b31609f8.jpg')",
    height: '100vh',
    backgroundcolor:'white',
    backgroundSize: '100% 100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    
    
};
  return (
    //<MyContext.Provider value={score1}>
    <div style={myStyle}>
    <div class="flex justify-around mt-10  ">
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-4xl  ">
    <div className="quiz">
        <div className="font-sans text-slate-600">
      <span className="subtitle">Welcome, {user.registeredUser}</span>
      </div>
      {questions ? (
        <>
          <div className="quizInfo text-cyan-700 font-sans font-black text-lg mt-24">
            <span>{questions[currQues].category}</span>
            <span>
              {/* {questions[currQues].difficulty} */}
              Score : {score1}
            </span>
          </div>
          <div className="text-black font-serif mt-6">
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
           </div>
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
    //</MyContext.Provider>
    
  );
  
};

export default Quiz2;
//export {a};



