import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about' id='about'>
      <section className='head'>
        <h2>ABOUT</h2>
        <img src="asserts/About/24325547_2022_ani_cartoon_28-removebg-preview 1.png" alt="" className='headImg' width="500px" />
      </section>
      <section className="teachnology">
        <article className='article'>
          <div className="png">
            <img src="asserts/About/image 2.png" alt="" />
          </div>
          <div className="arti">
            <h3 className='title'>HTML / CSS </h3>
            <p className='description'>I can develop responsive and optimized sites.</p>
          </div>
          
        </article>
        <article className='article'>
        <div className="png">
            <img src="asserts/About/image 4.png" alt="" />
          </div>
          <div className="arti">
            <h3 className='title'>REACT JS </h3>
          <p className='description'>Using React.js, I build responsive and dynamic portfolio websites with reusable components, ensuring fast performance and seamless user experiences.</p>
          </div>
          
        </article>
        <article className='article'>
        <div className="png">
            <img src="asserts/About/image 3.png" alt="" />
          </div>
          <div className="arti">
            <h3 className='title'>GIT / GITHUB</h3>
          <p className='description'>Git is a version control system to track and manage code changes.Together, they streamline teamwork and project management in software development.</p>
          </div>
          
        </article>
      </section>
    </div>
    
  )
}

export default About