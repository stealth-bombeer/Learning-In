
import Navbar from './Navbar';
import Home from './Home'
import { Route,Routes, BrowserRouter as Router} from 'react-router-dom';
import Aboutus from './Aboutus';
import Createquiz from './Createquiz';
import Settings from './Settings';
import Viewprofile from './Viewprofile';
import Joinroom from './Joinroom';
import Practice from './Practice';
import Friends from './Friends';

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
