import { button } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({score }) => {
  const navigate = useNavigate();

  const myStyle = {
    
    height: '100vh',
    backgroundcolor:'white',
    backgroundSize: '100% 100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    
    
};

  // useEffect(() => {
  //   if (!name) {
  //     navigate("/home");
  //   }
  // }, [name, navigate ]);

  return (
    <div style={myStyle}>
<body class="ress">
    
<div className="result">
  <div className="mt-48">
    <div class="wrap">
     <div class="round">
    <div class="star">✭</div>
    <div class="star">✭</div>
    <div class="star">✭</div>
    
    <div class="rocket">
      <div class="center">
        <div class="body">
          <span>Z</span>
        </div>
        <div class="wing left"></div>
        <div class="wing right"></div>
      </div>
      <div class="side left">
        <div class="top"></div>
      </div>
      <div class="side right">
        <div class="top"></div>
      </div>
    </div>
    
    <div class="cloud">
      <div class="c1"></div>
      <div class="c2"></div>
      <div class="c3"></div>
      <div class="c4"></div>
      <div class="c5"></div>
      <div class="c6"></div>
      <div class="c7"></div>
      <div class="c8"></div>
      <div class="c9"></div>
    </div>
  </div>
</div>
<h1>YOUR SCORE!</h1>
</div>
    
<div>
<div class="flex justify-center ">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://tse3.mm.bing.net/th?id=OIP.xdkQtGgRvyUF8js8-dtNIQHaHa&pid=Api&P=0" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">FINAL SCORE</h5>
<p class="text-black-700 text-base text-xl mb-4">
      <span className="title">{score}</span>
      </p>
      <button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/home"
      >
        Go to homepage
      </button>
    </div>
    </div>
  </div>
</div>
</div>
</body>
</div>
  );
};

export default Result;
