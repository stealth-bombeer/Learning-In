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

  return (
    <div className="content">
      <div className="settings">
        <div className="settings__select">
       
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <option key={cat.category} value={cat.value}>
                {cat.category}
              </option>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
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
          <button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </button>
        </div>
      </div>
      <img src="/quiz.svg" className="banner" alt="quiz app" />
    </div>
  );
};

export default Practice;
