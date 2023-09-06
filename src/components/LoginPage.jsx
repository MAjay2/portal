import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from "../store/themeSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const mode = useSelector((state) => state.darkMode.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(mode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
         
    if (storedUser && storedUser.username === userName && storedUser.password === password) {
   
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
  
      
      navigate('/');
    } else {
  
      setErrorMessage('Credentials do not match');
    }
  };
  



  return (
    <div className={mode ? 'bg-slate-900 px-8' : 'px-8'}>
      <button className="text-black bg-yellow-500 w-14 h-14 border-l border-b border-r border-black" onClick={handleThemeToggle}>
        theme
      </button>
      <div className="flex justify-center items-center h-screen">
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                User Name :
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleLogin}>
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
