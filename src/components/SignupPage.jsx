import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { toggleTheme } from "../store/themeSlice"
import { setUsername,setPassword} from '../store/signupSlice';



function SignupPage() {
    
  const username = useSelector((state)=>state.signup.username) 
  const password = useSelector((state)=>state.signup.password)
  

  const mode  = useSelector((state)=> state.darkMode.mode);
    const dispatch =useDispatch();
    console.log(mode)

    const navigate=useNavigate()
  
    const handleThemeToggle=()=>{
      dispatch(toggleTheme());
    };




  const handleSignUp = () => {
    

    localStorage.setItem('user', JSON.stringify({ username, password }));
    navigate('/login');
  };

  return (
    <div className={mode ?'bg-slate-900 px-8': "px-8"}>
      <button
        className="text-black bg-yellow-500 w-14 h-14 border-l border-b border-r border-black"
        onClick={handleThemeToggle}
      >
        theme
      </button>
      <div className="flex h-screen justify-center items-center">
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                User Name:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value={username}
                onChange={(e) =>dispatch(setUsername(e.target.value))}
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
