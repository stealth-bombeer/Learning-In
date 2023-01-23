import { useState } from "react";
import {useNavigate} from'react-router-dom'
let room;
const Joinroom = () => {
  const navigate=useNavigate();
    const [code, setCode] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        room =code ;
        console.log(room)
        fetch('http://localhost:5000/joinroom', {
          method: 'POST',
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(
           {room:room}
          )
        }
        )
          .then((res) => {
           return res.json()
          })
          .then((data) => {
            console.log(data, "Logged-In")
            if(data==1)
       { navigate('/quiz1',{state:{room}})}
          })
       
    }
    const myStyle = {
      backgroundImage:
          "url('https://newsroom.unsw.edu.au/sites/default/files/thumbnails/image/shutterstock_408729628_1.jpg')",
      height: '120vh',
      marginTop: '10px',
      fontSize: '50px',
      backgroundSize: 'cover',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      
  };

    return ( 
      <div style={myStyle}>
      
    <div className="create" >
    <div className="pt-64">
    <div classname="container mx-auto " >
    <form onSubmit={handleSubmit}>  
     
       <div className="content-center place-content-center">
       <div class="  flex justify-center">
                        <div class="rounded-lg  shadow-2xl bg-white max-w-sm">
                            
                            <div class="p-6">
                   
        <div>
       <div className="text-4xl text-black hover:text-black">
       <label >Enter the Room Code:</label>
       </div>
      <input 
        type="text" 
        required 
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      
      
      <button  type="submit" >Enter</button>
      </div>
      </div>
    
    </div>
    </div>
    </div>
    
    </form>
    </div>
                            
      </div>
    </div>
       </div>
    
     );
}
 
export default Joinroom;
