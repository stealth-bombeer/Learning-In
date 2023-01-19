import { useState } from "react";
import { useNavigate } from "react-router-dom";


let room;
const Joinroom = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    room = code;
    console.log(room);
    fetch("http://localhost:5000/joinroom", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ room: room }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data, "Logged-In");
        if (data == 1) {
          navigate("/quiz1", { state: { room } });
        }
      });
  };

  return (
    <div className="create">
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere,
        magnam sint porro qui quia dicta, ut neque perspiciatis dolore sapiente
        aspernatur expedita placeat modi voluptatibus nam earum aliquid sequi?
      </h2>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere,
        magnam sint porro qui quia dicta, ut neque perspiciatis dolore sapiente
        aspernatur expedita placeat modi voluptatibus nam earum aliquid sequi?
      </h2>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere,
        magnam sint porro qui quia dicta, ut neque perspiciatis dolore sapiente
        aspernatur expedita placeat modi voluptatibus nam earum aliquid sequi?
      </h2>

      <form onSubmit={handleSubmit}>
        <label>Enter the Room Code:</label>

        <input
          type="text"
          required
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Joinroom;
export {room};
