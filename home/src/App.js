
import Navbar from '../src/Navbar comp/Navbar';
import axios from "axios";
import React, { useState } from "react";
import "./App.scss";
import  Login  from "./login/Login"
import Error from "./login/Error"
import Register  from "./login/Register"
import Home from './Home'
import { Route, Navigate,Routes, BrowserRouter as Router } from 'react-router-dom';
import Aboutus from '../src/Navbar comp/Aboutus';
import Createquiz from '../src/mode1.js/Createquiz';
import RankList from'../src/mode1.js/RankList';
import Settings from '../src/Navbar comp/Settings';
import Viewprofile from '../src/Navbar comp/Viewprofile';
import Joinroom from '../src/mode1.js/Joinroom';
import Practice from '../src/mode2.js/Practice';
import Friends from './Friends';
import Quiz1 from '../src/mode1.js/Quiz1'
import Scorecard from '../src/mode1.js/Scorecard';
import Codetimer from '../src/mode1.js/Codetimer';
import Quiz2 from './mode2.js/Quiz2';
import Result from './mode2.js/Result/Result';
import {useAuthContext} from './hooks/useAuthContext'

function App() {

  const [score, setScore] = useState(0);
  const [time,setTime]=useState("");
  const [code,setCode]=useState(1000);
  let [count, setCount] = useState(1);
  const [questions, setQuestions] = useState();
const {user}=useAuthContext()
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
      {user &&<Navbar />}
      <div className="content">
        <Routes>
          <Route path='/'  element={!user ?<Login />:<Navigate to='/home'/>} />
          <Route path='/register' element={!user?<Register />:<Navigate to ='/home'/>} />
      
          <Route path="/home" element={user ?<Home />: <Navigate to="/"/>} />
          <Route path="/error" element={<Error/>} />
          <Route path="/createquiz" element={user ?<Createquiz 
          time={time}
          setTime={setTime}
          code={code}
          setCode={setCode}/>:<Navigate to  ="/"/>} />
          <Route path="/quiz1" element={user ?<Quiz1 score={score}
              setScore={setScore}
              count={count}
              setCount={setCount}
              />:<Navigate to ='/'/>}
               />
           <Route path="/ranklist" element={user ?<RankList />:<Navigate to='/'/>} />    
          <Route path="/aboutus" element={user ?<Aboutus />:<Navigate to ='/'/>} />
          <Route path="/Scorecard" element={user ?<Scorecard score={score}
           count={count}
           setCount={setCount}/>:<Navigate to ='/'/>} />
          <Route path="/settings" element={user ?<Settings />:<Navigate to='/'/>} />
          <Route path="/viewprofile" element={user ?<Viewprofile />:<Navigate to='/'/>} />
          <Route path="/joinroom" element={user?<Joinroom />:<Navigate to='/'/>} />
          <Route exact path="/practice" element={user?<Practice 
              
              fetchQuestions={fetchQuestions}/>:<Navigate to='/'/>} />
          <Route path="/friends" element={user ?<Friends />:<Navigate to ='/'/>} />
          
          <Route path="/codetimer" element={user ?<Codetimer time={time}
              setTime={setTime}
              code={code}
              setCode={setCode} />:<Navigate to ='/'/>} />
          <Route exact path="/result" element={user ?<Result score={score} />:<Navigate to ='/'/>} />
          <Route exact path="/quiz2" element={user ?<Quiz2 questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}/>:<Navigate to ='/'/>} />
        {/* </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
