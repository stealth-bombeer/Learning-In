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
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white opacity-100 py-4 md:px-10 px-7'>
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

        <div className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}> 
        {user && 
          (<div>
      <span>
        {user.registeredUser}
        </span>
        
          <span className='text-gray-800 hover:text-purple-600 duration-200' >

            <button onClick={handleClick}>Log Out</button>
          </span>
          </div>)}

          {user && 
          (<div>
          <span className='text-gray-800 hover:text-purple-600 duration-200' >
            <Link to="codetimer/">
              <button>Create A Quiz</button>
            </Link>
          </span>
          <span className='text-gray-800 mr-4 hover:text-purple-600 duration-200' >
            <Link to="aboutus/">
              <button>About Us</button>
            </Link>
          </span>
          <span className='text-3xl text-gray-600 mr-4 hover:text-purple-600 duration-200 mr-1 pt-2' >
            <Link to="settings/">
              <ion-icon name="settings-outline"></ion-icon>
            </Link>
          </span>
          <span className='text-3xl text-gray-600 hover:text-purple-600 duration-200 mr-1 pt-2'>
            <Link to="profile/">
              <ion-icon name="person-circle-outline"></ion-icon>
            </Link>
          </span>

        </div>
          )}</div>
    </div>
    </div>
    </div>
  );
}


export default Navbar;
