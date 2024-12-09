import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

function App() {

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
