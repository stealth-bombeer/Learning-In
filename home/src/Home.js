import { Link } from "react-router-dom";

const Home = () => {

    const myStyle={
        backgroundImage: 
    "url('https://static.pexels.com/photos/232/apple-iphone-books-desk-large.jpg')",
        height:'120vh',
        marginTop:'60px',
        fontSize:'50px',
        backgroundSize: 'cover',
        width: '100%',
        backgroundRepeat: 'no-repeat',

        };
    return ( 
        <div style={myStyle}>

    
        <div className="home">
            { <div class="h-56 grid grid-cols-3 gap-4 content-around items-centre">
            <Link to="joinroom/">
            <button className="block m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg items-center">Join A Quiz</button>
            </Link>
            <Link to="practice/">
            <button className="block m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg items-center">Practice</button>
            </Link>
            <Link to="friends/">
            <button className="block m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg items-center ">Play With Friends</button>
            </Link>
            </div> }
        </div>
        </div>
     );
}
 
export default Home;