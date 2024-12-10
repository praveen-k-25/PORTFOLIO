import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <section className="text">
            <h1>
                Contact
            </h1>
            <h3>
                Feel free to reach out!
            </h3>
        </section>
        <section className="links">
            <div className="link">
                <img src="asserts/Contact/image 12.png" alt="" />
                <a href='mailto:praveendevcreate@gmail.com'>praveendevcreate.gmail.com</a>
            </div>
            <div className="link">
                <img src="asserts/Contact/image 13.png" alt="" />
                <a href="https://www.linkedin.com/in/praveen-k-devcreate/">linkedin.com/praveen k</a>
            </div>
            <div className="link">
                <img src="asserts/Contact/image 14.png" alt="" />
                <a href="https://github.com/praveen-k-25">github.com/praveen k</a>
            </div>
        </section> 
        
    </div>
  )
}

export default Contact