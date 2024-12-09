import './Project.css';
import React from 'react'

const Project = () => {
  return (
    <div className='projects' id='projects'>
        <div className="wrapper">
        <h3>PROJECTS</h3>
        <div className="items">
            <section className="projectItem">
                <img src="../../../asserts/Project/image 1.png" alt="" />
                <h2>NASA-APOD-FETCHER</h2>
                <p>I created this project to demonstrate my ability to work with API</p>
                <div className="language">
                    <div className="border">
                        <button className="btn">HTML</button>
                    </div> 
                    <div className="border">
                    <button className="btn">CSS</button>
                    </div>
                    <div className="border">
                    <button className="btn">Javascript</button>
                    </div> 
                </div>
                <div className="source">
                    <div className="border">
                        <button className="btn hover"><a href="https://praveen-k-25.github.io/NASA-APOD-Fetcher/">Demo</a></button>
                    </div> 
                    <div className="border ">
                        <button className="btn hover">
                            <a href="https://github.com/praveen-k-25/NASA-APOD-Fetcher">Source</a>
                        </button>
                    </div> 
                </div>
                
            </section>
            <section className="projectItem">
                <img src="../../../asserts/Project/images 10.jpg" alt="" />
                <h2>To-Do-List</h2>
                <p>I created a To-Do List project to improve my React.js skills by building a practical, user-friendly application.</p>
                <div className="language">
                    <div className="border">
                    <button className="btn">CSS</button>
                    </div> 
                <div className="border">
                <button className="btn">React Js</button>
                </div> 
                </div>
                <div className="source">
                    <div className="border">
                    <button className="btn"><a href="">Demo</a></button> 
                    </div> 
                    <div className="border">
                        <button className="btn hover"><a href="https://github.com/praveen-k-25/to-do-list/tree/main/src">Source</a></button>
                    </div> 
                </div>
                
            </section>
            <section className="projectItem">
                <img src="../../../asserts/Project/images 9.png" alt="" />
                <h2>POST-APP</h2>
                <p>I created the Project Post App to share and manage project details interactively. It has a clean and responsive interface.</p>
                <div className="language">
                    <div className="border">
                    <button className="btn">CSS</button>
                    </div> 
                    <div className="border">
                    <button className="btn">React Js</button>
                    </div> 
                </div>
                
                <div className="source">
                    <div className="border">
                    <button className="btn"><a href="">Demo</a></button>
                    </div> 
                    <div className="border">
                    <button className="btn hover"><a href="https://github.com/praveen-k-25/Post-App">Source</a></button>
                    </div> 
                </div>
            </section>
        </div></div>
        
        
        

    </div>
  )
}

export default Project