import { useState } from "react";

const Createquiz = () => {

    const [topic, setTopic] = useState('');
    const [title, setTitle] = useState('');
    const [opta, setOpta] = useState('');
    const [optb, setOptb] = useState('');
    const [optc, setOptc] = useState('');
    const [optd, setOptd] = useState('');
    const [ans, setAns] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const quest = { title, topic, opta,optb,optc,optd,ans };
    }

    return ( 
    <div className="create">
    <h2>Add a New Question</h2>
    <form onSubmit={handleSubmit}>
      <label>Add the topic:</label>
      <input 
        type="text" 
        required 
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <label>Add the question:</label>
      <textarea
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>
      <label>Add option A:</label>
      <input 
        type="text" 
        required 
        value={opta}
        onChange={(e) => setOpta(e.target.value)}
      />
      <label>Add option B:</label>
      <input 
        type="text" 
        required 
        value={optb}
        onChange={(e) => setOptb(e.target.value)}
      />
      <label>Add option C:</label>
      <input 
        type="text" 
        required 
        value={optc}
        onChange={(e) => setOptc(e.target.value)}
      />
      <label>Add option D:</label>
      <input 
        type="text" 
        required 
        value={optd}
        onChange={(e) => setOptd(e.target.value)}
      />
      <label>Select the correct option:</label>
        <select
          value={ans}
          required
          onChange={(e) => setAns(e.target.value)}
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      
      <button>prev</button>
      <button>next</button>
      <button>Done</button>
    </form>
  </div> );
}
 
export default Createquiz;