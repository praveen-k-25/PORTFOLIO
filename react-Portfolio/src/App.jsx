import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

function App() {
  const[windowSize,setWindowSize] = useState({width:undefined,height:undefined})
    useEffect(()=>{
      const handleChange = ()=>{
        setWindowSize({width:window.innerWidth,height:window.innerHeight})
      }
      handleChange();
        window.addEventListener("resize",handleChange)
        window.removeEventListener("resize",handleChange)
    },[])
    
  return (
      <div className="App">
        <Navbar />
        <Hero/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
      </div>
  )
}

export default App
