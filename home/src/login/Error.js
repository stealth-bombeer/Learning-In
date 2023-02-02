import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
const Error = (data) => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/register")}>{data}</button>
      <p>
        Lorem ipssu dolor sit amet consectetur adipisicing elit. Distinctio,
        cupiditate aperiam porro possimus pariatur natus, nulla dolorem culpa
        doloremque hic totam! Ea quos dolores eos nulla! Beatae eligendi sequi
        nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde dolor
        dolore officia molestias fuga nam, laborum ullam ratione pariatur iste
        delectus quisquam. Officiis harum sint ratione, aliquid eos sit.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam culpa
        inventore esse aut assumenda odio? Quibusdam consequatur voluptatum
        voluptatem assumenda facilis, architecto odit voluptate nisi ea ullam
        nobis eius? Sunt.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quidem,
        porro nemo officia cumque quos. Aspernatur ducimus temporibus, atque
        praesentium asperiores accusantium labore ea, sint fuga nesciunt, quas
        fugiat natus!bhgtnnbbjj
      </p>
      <div></div>
    </>
  );
};

export default Error;
