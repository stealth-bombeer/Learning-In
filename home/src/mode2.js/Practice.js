import { button, option, TextField } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";
import "../mode2.js/Practice.css"


const Practice = ({fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty ) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate('/quiz2');
    }
  };
  const myStyle = {
    backgroundImage:
        "url('https://images.creativemarket.com/0.1.0/ps/6151529/3005/2000/m1/fpnw/wm0/quiz-1-.jpg?1553762089&s=9b9ad3d167a8d446dd625dabd9ef4ea0')",
    height: '100vh',
    backgroundcolor:'white',
    backgroundSize: '100% 100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    
    
};

  return (

  
  <div style={myStyle}>
  <div class="flex justify-center mt-24 ">
  <div class=" rounded-lg bg-white  px-36 shadow-lg">
  <div class="font-serif italic hover:not-italic font-black text-yellow-400 flex mt-10 ml-32 text-4xl justify-items-center ">
    PRACTICE A QUIZ
  </div>
    <div className="content">
      <div className="settings">
        <div className="settings__select">
          <div className="grid grid-cols-2 gap-2 ">
          <div className="">
          <TextField
            select
            label="Select Category"
           
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30,width:250
               }}
            
          >
            {Categories.map((cat) => (
              <option key={cat.category} value={cat.value}>
                {cat.category}
              </option>
            ))}
          </TextField>
          </div>
          <div>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 ,width:250}}
          >
            <option key="Easy" value="easy">
              Easy
            </option>
            <option key="Medium" value="medium">
              Medium
            </option>
            <option key="Hard" value="hard">
              Hard
            </option>
          </TextField>
          </div>
          </div>
          <div className="prac">
          <div className="mt-16 ">
          <button onClick={handleSubmit} >
            Start Quiz
          </button>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
   
  );
};

export default Practice;
