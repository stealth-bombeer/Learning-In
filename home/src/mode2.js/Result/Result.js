import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({score }) => {
  const navigate = useNavigate();


  // useEffect(() => {
  //   if (!name) {
  //     navigate("/home");
  //   }
  // }, [name, navigate ]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/home"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
