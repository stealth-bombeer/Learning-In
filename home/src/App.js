
import Navbar from '../src/Navbar comp/Navbar';
import axios from "axios";
import React, { useState } from "react";
import "./App.scss";
import  Login  from "./login/Login"
import Register  from "./login/Register"
import Home from './Home'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Aboutus from '../src/Navbar comp/Aboutus';
import Createquiz from '../src/mode1.js/Createquiz';
import RankList from'../src/mode1.js/RankList';
import Settings from '../src/Navbar comp/Settings';
import Viewprofile from '../src/Navbar comp/Viewprofile';
import Joinroom from '../src/mode1.js/Joinroom';
import Practice from '../src/mode2.js/Practice';
import Friends from './Friends';
import ProtectedRoutes from "./login/ProtectedRoutes";
import Quiz1 from '../src/mode1.js/Quiz1'
import Scorecard from '../src/mode1.js/Scorecard';
import Codetimer from '../src/mode1.js/Codetimer';
import Quiz2 from './mode2.js/Quiz2';
import Result from './mode2.js/Result/Result';
function App() {

  const [score, setScore] = useState(0);
  const [time,setTime]=useState("");
  const [code,setCode]=useState(1000);
  let [count, setCount] = useState(1);
  const [questions, setQuestions] = useState();

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route element={<ProtectedRoutes />}> */}
          <Route path="/home" element={<Home />} />
          <Route path="/createquiz" element={<Createquiz 
          time={time}
          setTime={setTime}
          code={code}
          setCode={setCode}/>} />
          <Route path="/quiz1" element={<Quiz1 score={score}
              setScore={setScore}
              count={count}
              setCount={setCount}
              />}
               />
          <Route path="/ranklist" element={<RankList />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/Scorecard" element={<Scorecard score={score}
           count={count}
           setCount={setCount}/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/viewprofile" element={<Viewprofile />} />
          <Route path="/joinroom" element={<Joinroom />} />
          <Route exact path="/practice" element={<Practice 
              
              fetchQuestions={fetchQuestions}/>} />
          <Route path="/friends" element={<Friends />} />
          
          <Route path="/codetimer" element={<Codetimer time={time}
              setTime={setTime}
              code={code}
              setCode={setCode} />} />
          <Route exact path="/result" element={<Result score={score} />} />
          <Route exact path="/quiz2" element={<Quiz2 questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}/>} />
        {/* </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
