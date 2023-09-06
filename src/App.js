import Navbar from "./components/Navbar"
import Header from "./components/Header"
import React,{useEffect,useState} from "react"
import Card from "./components/Card"
import CardThread from "./components/CardThread"
import Footer from "./components/Footer"
import store from "./store/store"
import {useSelector,useDispatch} from 'react-redux'
import { toggleTheme } from "./store/themeSlice"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from './components/Home'
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';


function App() {
  
  


  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
      </Routes>
    </Router>
   
  
  )
}

export default App
