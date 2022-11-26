
import Navbar from './Navbar';
import React from "react";
 import "./App.scss";
 import { Login} from "./login/Login"
 import { Register} from "./login/Register"
import Home from './Home'
import { Route,Routes, BrowserRouter as Router} from 'react-router-dom';
import Aboutus from './Aboutus';
import Createquiz from './Createquiz';
import Settings from './Settings';
import Viewprofile from './Viewprofile';
import Joinroom from './Joinroom';
import Practice from './Practice';
import Friends from './Friends';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};




function App() {

  
  return (
    
    <Router>
      <Navbar />
      
      
      <div className="content">
        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/createquiz" element={<Createquiz />} /> 
        <Route path="/aboutus" element={<Aboutus />} /> 
        <Route path="/settings" element={<Settings />} /> 
        <Route path="/viewprofile" element={<Viewprofile />} />
        <Route path="/joinroom" element={<Joinroom />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/friends" element={<Friends />} /> 
          
        </Routes>
      </div>
   
    </Router>
  );
}

export default App;
