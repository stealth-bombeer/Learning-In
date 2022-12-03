const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("hii")
  }

const handleClick = (e) =>{
    e.preventDefault();
    console.log("hii")
  }

const Quiz1 = () => {
    return ( 
        <div className="portal1">
            <h2>The Question</h2>
            <h2>Time</h2>            
            <form onSubmit={handleSubmit}>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere, magnam sint porro qui quia dicta, ut neque perspiciatis dolore sapiente aspernatur expedita placeat modi voluptatibus nam earum aliquid sequi?</h2>
                <button>a</button>
                <button>b</button>
                <button>c</button>
                <button>d</button>
            </form>
            <button onClick={handleClick}>Quit</button>
        </div>
     );
}
 
export default Quiz1;