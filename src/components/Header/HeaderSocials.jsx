import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://wa.me/qr/CSQSHAAFE7AWP1" target="_blank"><BsWhatsapp /></a>
        <a href="https://github.com/LaveshRawal/" target="_blank"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/lavesh-rawal-a343841bb/" target="_blank"><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocials