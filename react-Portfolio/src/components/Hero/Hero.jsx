import React from 'react';
import './Hero.css';
const Hero = () => {
  return (
    <section className='container'>
        <div className='content'>
            <h1 className='title'>Hi I'm Praveen</h1>
            <p className='description'>
            A passionate front-end developer proficient in React.js  in creating responsive and user-friendly web interfaces.
            </p>
            <a href="mailto:praveendevcreate@gmail.com" className='contactMe'>Contact Me</a>
        </div>
        <img src="asserts/Hero/7795-photoaidcom-cropped.jpg" className='heroImg' />
        <div className="topBlur"></div>
        <div className="bottomBlur"></div>
    </section>
  )
} 

export default Hero