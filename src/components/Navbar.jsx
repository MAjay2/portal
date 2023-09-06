import React, { useEffect, useState } from 'react'
import { MdOutlineBookmarkAdd,MdOutlineSearch  } from "react-icons/md";
import Button from './Button';
import { BsSend } from "react-icons/bs";
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const mode  = useSelector((state)=> state.darkMode.mode);
  const dispatch =useDispatch();
  console.log(mode)

  return (
    <nav className=  {mode ?"flex justify-between text-white items-center py-3 border-b-4 border-black":'flex justify-between items-center py-3 border-b-4 border-black'}>
      <h1 className='font-bold text-xl'>News Portal</h1>

      <ul className='flex  w-2/6 justify-between items-center'>
        <MdOutlineBookmarkAdd className='text-3xl'/>
        <MdOutlineSearch className='text-3xl'/>
        <BsSend className='text-3xl'/>
       <Link to="/login" ><Button name="SIGN IN" style="font-bold"/></Link>
       <Link to="/signup"><Button name="SIGN UP" style="bg-blue-600 py-2 border-2 border-black px-8 font-bold" /></Link>

      </ul>
    </nav>
  )
}

export default Navbar