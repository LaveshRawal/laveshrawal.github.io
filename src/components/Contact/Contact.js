import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {GrInstagram} from 'react-icons/gr'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_qngbhqd','template_xmh5fv3', form.current, 'mocVB3Kvz5IPL9Zf6');
    e.target.reset()
    
};

  return (
    <section id="Contact">
    <h3>Get in Touch</h3>
    <h2>Contact</h2>

     <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
        <MdOutlineEmail className="contact_option-icon"/>
          <h2>Email</h2>
          <h3>Dummy Email Generator</h3>
          <a href='mailto:officialrawallavesh@gmail.com'>Send a message</a>
        </article>

        <article className='contact_option'>
        <GrInstagram className="contact_option-icon" />
          <h2>Instagram</h2>
          <h3>InstaLink</h3>
          <a href='https://www.instagram.com/'>Send a message</a>
        </article>


        <article className='contact_option'>
         <BsWhatsapp className="contact_option-icon" />
          <h2>WhatsApp</h2>
          <h3>+123456789</h3>
          <a href='home' >Send a message</a>
       
        </article>

      </div>
     

      <form ref={form} >
        <input type="text" name="name" placeholder='Your Full Name' required />
        <input type="email" name="email" placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary' onSubmit={sendEmail}>Submit</button>
      </form>
     </div>
    </section>
  )
  
}
export default Contact