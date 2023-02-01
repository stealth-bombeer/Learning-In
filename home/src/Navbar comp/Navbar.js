import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {useLogout} from '../hooks/useLogout'
import {useAuthContext} from'../hooks/useAuthContext'

const Navbar = () => {
const {logout}=useLogout()
const {user}=useAuthContext()
  const handleClick=()=>
  {
        logout();
  }



  let [open, setOpen] = useState(false);
  return (
  <div className='container mb-100 '>
    <div className='shadow-md bg-white w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white  py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <Link to="/home">
          Learning In
          </Link>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        
       
          {user && 
          (<div>
          <span className='text-gray-800 mr-4 text-lg   hover:text-purple-600   duration-200' >
         
         <button onClick={handleClick}>Log Out</button>
           </span>
          <span className='text-gray-800  mr-4 text-lg hover:text-purple-600 duration-200' >
            <Link to="codetimer/">
              <button>Create A Quiz</button>
            </Link>
          </span>
          
          <span className='text-gray-800 mr-4 text-lg hover:text-purple-600 ml-4 duration-200' >
            <Link to="aboutus/">
              <button>About Us</button>
            </Link>
          </span>
          
          <span className='text-3xl text-gray-600 hover:text-purple-600 duration-200 mt-4'>
            
            <Link to="profile/">
              <ion-icon name="person-circle-outline"></ion-icon>
            </Link>
            
            <span className='ml-2'>
        {user.registeredUser}
        </span>
          </span>
           
        </div>
          )}</div>
    </div>
    </div>
    
  );
}


export default Navbar;
