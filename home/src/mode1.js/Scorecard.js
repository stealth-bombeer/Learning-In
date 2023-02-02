import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { room } from "./Joinroom";
import { authUser, y } from "../login/Login";
import { authUserregisterd } from "../login/Register";
import "./scorecar.css";
import sound from "../crowd-cheer.mp3";
const Scorecard = ({ score, count, setCount }) => {
  const navigate = useNavigate();
  const dataFetchedRef = useRef(false);
  useEffect(() => {
    const audio = new Audio(sound);
    audio.play();
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  const handleRank = (e) => {
    e.preventDefault();
    navigate("/ranklist");
  };
  const [error, setError] = useState("");
  const { user } = useAuthContext();
  // let user=authUser?authUser:authUserregisterd;
  console.log(user);
  useEffect(() => {
    if (!user) {
      setError("You must be logged in ");
      return;
    }
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    console.log(score);
    console.log("2dnb");
    console.log(room);
    console.log(authUser);
    fetch("https://learning-in-production.up.railway.app/scorecard", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify({
        score: score,
        username: user.registeredUser,
        room: room,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data, "questionset-Added");
      });
  });
  return (
    <div className="bg-white w-full h-screen">
      <div className="">
        <div className="result">
          <div className="mt-48">
            <div class="wrap">
              <div class="round">
                <div class="star">✭</div>
                <div class="star">✭</div>
                <div class="star">✭</div>

                <div class="rocket">
                  <div class="center1">
                    <div class="body1">
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
                <img
                  class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                  src="https://tse3.mm.bing.net/th?id=OIP.xdkQtGgRvyUF8js8-dtNIQHaHa&pid=Api&P=0"
                  alt=""
                />
                <div class="p-6 flex flex-col justify-start">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    Your Fucking Score is: {score}/{count - 1}
                  </h5>
                  <p class="text-black text-base text-xl mb-4"></p>
                  <button
                    class="bg-transparent hover:bg-blue-900 text-lg text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={handleClick}
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{ alignSelf: "center", marginTop: 20 }}
                    href="/home"
                  >
                    Go to homepage
                  </button>

                  <button
                    class="bg-transparent hover:bg-blue-900 text-lg text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={handleRank}
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{ alignSelf: "center", marginTop: 20 }}
                    href="/ranklist"
                  >
                    Ranklist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard;
