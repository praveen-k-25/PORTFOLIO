import React, { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {
  
  const[menuOpen,setMenuOpen] = useState(true);
  const menuClosedIcon = "/asserts/nav/icons8-menu-50.png";
  const menuOpenIcon = "/asserts/nav/icons8-multiply-50.png";
  return ( 
    <nav className="navbar" on={()=>setMenuOpen(true)}>
      <a className="title" href='/'>Portfolio</a>
      <div className='menu'>
        <img src={ menuOpen ? menuClosedIcon : menuOpenIcon}alt="menu-items" className='menuBtn' onClick={()=>setMenuOpen(!menuOpen)}/>
        <ul 
          className={menuOpen ? 'menuItems':'menuItems menuOpen'}
          onClick={()=>setMenuOpen(true)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>    
        </ul>
      </div> 
    </nav>
  )
}

export default Navbar