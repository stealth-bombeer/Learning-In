
import Navbar from './Navbar';
import React from "react";
import "./App.scss";
import  Login  from "./login/Login"
import Register  from "./login/Register"
import Home from './Home'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Aboutus from './Aboutus';
import Createquiz from './Createquiz';
import Settings from './Settings';
import Viewprofile from './Viewprofile';
import Joinroom from './Joinroom';
import Practice from './Practice';
import Friends from './Friends';
import ProtectedRoutes from "./login/ProtectedRoutes";
import Quiz1 from './Quiz1'
function App() {

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route element={<ProtectedRoutes />}> */}
          <Route path="/home" element={<Home />} />
          <Route path="/createquiz" element={<Createquiz />} />
          <Route path="/quiz1" element={<Quiz1 />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/viewprofile" element={<Viewprofile />} />
          <Route path="/joinroom" element={<Joinroom />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/friends" element={<Friends />} />
        {/* </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
