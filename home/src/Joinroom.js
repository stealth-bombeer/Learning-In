import { useState } from "react";

const Joinroom = () => {

    const [code, setCode] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const usercode = { code };
    }

    return ( 
        <div className="create" >
 <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere, magnam sint porro qui quia dicta, ut neque perspiciatis dolore sapiente aspernatur expedita placeat modi voluptatibus nam earum aliquid sequi?</h2>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere, magnam sint porro qui quia dicta, ut neque perspiciatis dolore sapiente aspernatur expedita placeat modi voluptatibus nam earum aliquid sequi?</h2>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere, magnam sint porro qui quia dicta, ut neque perspiciatis dolore sapiente aspernatur expedita placeat modi voluptatibus nam earum aliquid sequi?</h2>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere, magnam sint porro qui quia dicta, ut neque perspiciatis dolore sapiente aspernatur expedita placeat modi voluptatibus nam earum aliquid sequi?</h2>   
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere, magnam sint porro qui quia dicta, ut neque perspiciatis dolore sapiente aspernatur expedita placeat modi voluptatibus nam earum aliquid sequi?</h2>
    <form onSubmit={handleSubmit}>
    
    <label>Enter the Room Code:</label>
   
      <input 
        type="text" 
        required 
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
    </form>
    </div>
     );
}
 
export default Joinroom;