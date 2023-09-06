import Navbar from "./Navbar"
import Header from "./Header"
import React,{useEffect,useState} from "react"
import Card from "./Card"
import CardThread from "./CardThread"
import Footer from "./Footer"
import store from "../store/store"
import {useSelector,useDispatch} from 'react-redux'
import { toggleTheme } from "../store/themeSlice"


function Home() {
  const [news,setNews] = useState([])

  useEffect(()=>{
fetch('https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=482e83f7824c9fc829b25a67a0237797')
.then(res=>res.json())
.then(data=>setNews(data.articles))
  },[])

  const mode  = useSelector((state)=> state.darkMode.mode);
  const dispatch =useDispatch();
  console.log(mode)

  const handleThemeToggle=()=>{
    dispatch(toggleTheme());
  };

  


  return (
    
    <div className={ mode ? " bg-slate-900 px-8":" px-8"}>
    <div>
    <button onClick={handleThemeToggle} className="text-black bg-yellow-500 w-14 h-14 border-l border-b border-r border-black">
        theme
      </button>
    </div>
    <Navbar/>
    <Header/>
    <Card data={news}/>
    <CardThread data={news}/>
    <Footer />
   </div>
  
  )
}

export default Home
