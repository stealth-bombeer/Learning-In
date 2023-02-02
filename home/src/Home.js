import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Home.css";
// import "./random.css";
import "./Homes.css";
// import "./random.css";

const Home = () => {
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    navigate("/joinroom");
  };
  const handlePractice = () => {
    navigate("/practice");
  };
  const handleFriends = () => {
    navigate("/funfact");
  };
  const handleAboutUs = () => {
    navigate("/aboutus");
  };

  const myStyle = {
    // backgroundImage:
    //     "url('https://wallpapercave.com/wp/wp6638441.png')",

    height: "120vh",
    marginTop: "80px",
    //fontSize: "50px",
    backgroundSize: "cover",
    width: "100%",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={myStyle}>
      <div class="parallax2 pt-20">
        {/* <div class="heading-sm"> */}
        <div>
          <div class="stars-01"></div>
          <div class="stars-02"></div>
          <div class="stars-03"></div>
          <div class="stars-04"></div>
        </div>
        <div class="text">
          <span>LE</span>
          <span>AR</span>
          <span>NI</span>
          <span>NG</span>
          <span>IN</span>
        </div>
        <div class="heading-sm ">
          <div className="text-white text-shadow">
            Let's enjoy the journey of learning..
          </div>
        </div>
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
        {/* </div> */}
      </div>

      <div class="parallax1">
        <div className="home">
          {
            <div class="pt-60 content-center grid grid-cols-3 gap-4  items-centre">
              <div className="card">
                <div className="pl-2">
                  <div className="card-content card-front">
                    <div class="flex justify-center">
                      <div class="rounded-lg shadow-lg bg-yellow-300 max-w-sm shadow-lg hover:opacity-100">
                        <a href="#!">
                          <img
                            class="rounded-t-lg object-fill h-80 w-96"
                            src="https://image.freepik.com/free-vector/quiz-background-with-items-in-flat-design_23-2147599082.jpg"
                            alt=""
                          />
                        </a>
                        <div class="p-6 mt-2">
                          <h5 class="text-gray-900 text-center text-xl font-medium mb-2 font-Abril Fatface font-black ">
                            JOIN YOUR ROOM
                          </h5>
                          {/* <p class="text-gray-700 text-base mb-4 font-Playfair Display font-bold italic">
                                It engages many participants in a live quiz event.
                                Join an activity with your class by entering your roomcode!


                                </p> */}
                          {/* <div className="flex justify-center pt-16">
                                <button onClick={handleJoinRoom} type="button" class=" inline-block px-6 py-2.5 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-400 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out">Joinroom</button>
                                </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-content card-back">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm shadow-lg hover:opacity-100">
                      <a href="#!">
                        <img
                          class="rounded-t-lg object-fill h-60 w-96"
                          src="https://th.bing.com/th/id/OIP.1mC0ARfZErRDPAbGBFaxdAHaGL?pid=ImgDet&rs=1"
                          alt=""
                        />
                      </a>
                      <div class="p-6 mt-4">
                        {/* <h5 class="text-gray-900 text-xl font-medium mb-2 font-Abril Fatface font-black ">JOIN YOUR ROOM</h5> */}
                        <p class="text-gray-700 text-base mb-4 font-Playfair Display font-bold italic">
                          It engages many participants in a live quiz event.
                          Join an activity with your class by entering your
                          roomcode!
                        </p>
                        <div className="flex justify-center pt-16">
                          <button
                            onClick={handleJoinRoom}
                            type="button"
                            class=" inline-block px-9 py-5 bg-cyan-700 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-cyan-400 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Joinroom
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-content card-front">
                  <div class="  flex justify-center">
                    <div class="rounded-lg  shadow-lg bg-yellow-300	  max-w-sm shadow-lg hover:opacity-100">
                      <a href="#!">
                        <img
                          class="rounded-t-lg object-fill h-80 w-96 "
                          src="https://tse4.mm.bing.net/th?id=OIP.oBf3-xQY_r75NZvLkw4rjgHaHa&pid=Api&P=0"
                          alt=""
                        />
                      </a>
                      <div class="p-6">
                        <h5 class="text-gray-900 text-center text-xl font-medium font-black mb-2">
                          PRACTICE A QUIZ
                        </h5>
                        <p class="text-gray-700 text-base font-Playfair Display font-bold italic mb-4">
                          {/* Play these online practice test quizzes to test yourself and enhance your knowledge. Prepare for an upcoming test, keep yourself updated  with the amazing quizzes. */}
                        </p>
                        {/* <div className="flex justify-center pt-10 pb-4">
                                <button onClick={handlePractice} type="button" class=" inline-block px-6 py-2.5 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-400 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out">Practice</button>
                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-content card-back">
                  <div class="  flex justify-center">
                    <div class="rounded-lg  shadow-lg bg-white max-w-sm shadow-lg opacity-80 hover:opacity-100">
                      <a href="#!">
                        <img
                          class="rounded-t-lg "
                          src="https://blogs.ibo.org/files/2020/03/iStock-Boy_doing_his_work.jpg"
                          alt=""
                        />
                      </a>
                      <div class="p-6">
                        {/* <h5 class="text-gray-900 text-xl font-medium font-black mb-2">PRACTICE A QUIZ</h5> */}
                        <p class="text-gray-700 text-base font-Playfair Display font-bold italic mb-4">
                          Play these online practice test quizzes to test
                          yourself and enhance your knowledge. Prepare for an
                          upcoming test, keep yourself updated with the amazing
                          quizzes.
                        </p>
                        <div className="flex justify-center pt-10 pb-4">
                          <button
                            onClick={handlePractice}
                            type="button"
                            class=" inline-block px-9 py-5 bg-cyan-700 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-cyan-400 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Practice
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card ">
                <div className="card-content card-front">
                  <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-yellow-300 max-w-sm hover:opacity-100">
                      <a href="#!">
                        <img
                          class="rounded-t-lg object-fill h-80 w-96"
                          src="https://st3.depositphotos.com/3867481/16646/v/950/depositphotos_166465144-stock-illustration-vector-illustration-background-did-you.jpg"
                          alt=""
                        />
                      </a>
                      <div class="p-6">
                        <h5 class="text-gray-900 text-center text-xl font-medium  font-black mb-2">
                          DO YOU KNOW ?
                        </h5>
                        {/* <p class="text-gray-700 text-base font-Playfair Display font-bold italic mb-4">
                                Invite your friends to play with them upto 4 players and know the master from your friends.
                                </p>
                                <div className="flex justify-center pt-16">
                                <button onClick={handleFriends} type="button" class=" inline-block px-6 py-2.5 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-400 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out">Play with friends</button>
                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-content card-back">
                  <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm hover:opacity-100">
                      <a href="#!">
                        <img
                          class="rounded-t-lg"
                          src="https://dotwriter.com/blog/wp-content/uploads/2016/12/social-media-content-tips-dotwriter.png"
                          alt=""
                        />
                      </a>
                      <div class="p-6">
                        {/* <h5 class="text-gray-900 text-xl font-medium  font-black mb-2">PLAY WITH YOUR FRIENDS</h5> */}
                        <p class="text-gray-700 text-base font-Playfair Display font-bold italic mb-4">
                          Read and upgrade your knowledge with shockingly
                          amazing facts and top headlines
                        </p>
                        <div className="flex justify-center pt-16">
                          <button
                            onClick={handleFriends}
                            type="button"
                            class=" inline-block px-9 py-5 bg-cyan-700 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-cyan-400 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            READ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <script src="random.js"></script>
            </div>
          }
        </div>
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>

      {/* <div class="parallax2"> */}
      {/* <div class="heading-sm"> */}
      {/* <div>
        <div class="stars-01"></div>
        <div class="stars-02"></div>
        <div class="stars-03"></div>
        <div class="stars-04"></div>
    </div> */}
      {/* <div class="text">
        <span>LE</span>
        <span>AR</span>
        <span>NI</span>
        <span>NG</span>
        <span>IN</span>
    </div>
    <div class="heading-sm">
    Let's deep dive into the journey of learning with fun..
      </div> */}
      {/* </div> */}
      {/* </div> */}

      <div class="parallax3">
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>

      <div class="parallax6">
        <div>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="css/Homes.css" />

          <title>Hamburger Menu Overlay</title>

          <header className="showcase">
            <div className="container showcase-inner">
              <div className="text-6xl">
                <h3>OUR VISION</h3>
              </div>
              <div className="mt-4 text-xl">
                <p>
                  "IF YOU HAVE FUN WHEN YOU PRACTICE,YOU MAY ALSO LEARN AND
                  PERFORM BETTER"
                </p>
              </div>
              <div>
                <a className="btn1">
                  <button onClick={handleAboutUs} type="button">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Home;
