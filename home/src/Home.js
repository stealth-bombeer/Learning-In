import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleJoinRoom = () => {
        navigate('/joinroom');
    }
    const handlePractice = () => {
        navigate('/practice');
    }
    const handleFriends = () => {
        navigate('/friends');
    }

    const myStyle = {
        backgroundImage:
            "url('https://wallpapercave.com/wp/wp6638441.png')",
        height: '120vh',
        marginTop: '60px',
        fontSize: '50px',
        backgroundSize: 'cover',
        width: '100%',
        backgroundRepeat: 'no-repeat',

    };
    return (
        <div style={myStyle}>


            <div className="home">
                {<div class="pt-32 content-center grid grid-cols-3 gap-4 content-around items-centre">

                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <img class="rounded-t-lg object-fill h-60 w-96" src="https://th.bing.com/th/id/OIP.1mC0ARfZErRDPAbGBFaxdAHaGL?pid=ImgDet&rs=1" alt="" />
                            </a>
                            <div class="p-6 mt-4">
                                <h5 class="text-gray-900 text-xl font-medium mb-2 font-Abril Fatface font-black ">JOIN YOUR ROOM</h5>
                                <p class="text-gray-700 text-base mb-4 font-Playfair Display font-bold italic">
                                It engages many participants in a live quiz event.
                                Join an activity with your class by entering your roomcode!


                                </p>
                                <div className="flex justify-center pt-16">
                                <button onClick={handleJoinRoom} type="button" class=" inline-block px-6 py-2.5 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-400 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out">Joinroom</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div class="  flex justify-center">
                        <div class="rounded-lg  shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <img class="rounded-t-lg " src="https://blogs.ibo.org/files/2020/03/iStock-Boy_doing_his_work.jpg" alt="" />
                            </a>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-xl font-medium font-black mb-2">PRACTICE A QUIZ</h5>
                                <p class="text-gray-700 text-base font-Playfair Display font-bold italic mb-4">
                                Play these online practice test quizzes to test yourself and enhance your knowledge. Prepare for an upcoming test, keep yourself updated  with the amazing quizzes.
                                </p>
                                <div className="flex justify-center pt-10 pb-4">
                                <button onClick={handlePractice} type="button" class=" inline-block px-6 py-2.5 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-400 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out">Practice</button>
                                </div>
                                </div>
                            
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <img class="rounded-t-lg" src="https://dotwriter.com/blog/wp-content/uploads/2016/12/social-media-content-tips-dotwriter.png" alt="" />
                            </a>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-xl font-medium  font-black mb-2">PLAY WITH YOUR FRIENDS</h5>
                                <p class="text-gray-700 text-base font-Playfair Display font-bold italic mb-4">
                                Invite your friends to play with them upto 4 players and know the master from your friends.
                                </p>
                                <div className="flex justify-center pt-16">
                                <button onClick={handleFriends} type="button" class=" inline-block px-6 py-2.5 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-400 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out">Play with friends</button>
                                </div>

                                

                            </div>
                        </div>
                    </div>

                </div>}
            </div>
        </div>
    );
}

export default Home;