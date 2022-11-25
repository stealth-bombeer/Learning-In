import { useState } from "react";

const Joinroom = () => {

    const [code, setCode] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const usercode = { code };
    }

    return ( 
        <div className="create">
    
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