// contact.js module
import React from 'react'

import contactimg from './../../assets/images/contact-img.svg'
function Contact() {
    return(<>
    {/* -----contact section----- */}
    <section className="contact">
       <h1 className="title">Contact Us</h1>
       <div className="box-container">
          <div className="image">
           <img src= {contactimg} alt=''/>
          </div>
          <form action="">
          <div className="inputbox">
            <input type="text" placeholder="name"/>
            <input type="email" placeholder="email"/>
          </div>
          <input type="text" placeholder="subject" class="box"/>
          <textarea name="" id="" placeholder="message" cols="30" rows="10"></textarea>
          <input type="submit" class="btn" value="send"/>
          </form>
        </div>
    </section>
    </>)
}
export default Contact;