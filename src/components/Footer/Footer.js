import React from 'react'
import {ImTwitter} from 'react-icons/im'
import {SiLinkedin} from 'react-icons/si'
import {BsFacebook} from 'react-icons/bs'
import {SiInstagram} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
    <a href="#" className='footer_logo'>Lavesh</a>

    <ul className='permalinks'>
    <li><a href="#home">Home</a></li>
    <li><a href="#About">About</a></li>
    <li><a href="#Exp">Experience</a></li>
    <li><a href="#Services">Services</a></li>
    <li><a href="#PortFolio">PortFolio</a></li>
    <li><a href="#Testimoniols">Testimoniols</a></li>
    <li><a href="#Contact">Contact</a></li>   
    </ul>

    <div className='footer_socials'>
      <a href="https://www.linkedin.com/in/lavesh-rawal-a343841bb/"><SiLinkedin /></a>
      <a href="https://twitter.com/?lang=en-in"><ImTwitter/></a>
      <a href="https://www.facebook.com/"><BsFacebook/></a>
      <a href="https://www.instagram.com/"><SiInstagram/></a>
      <a href="https://github.com/LaveshRawal"><FaGithub/></a>
    </div>

      <div className='footer_copyright'>
        <small>
        &copy; Lavesh Rawal Bio. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer