import React from 'react'
import "./Header.css"
import CTA from "./CTA.jsx"
import main from "../img/2.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="home">
      <div className="cotainer header_container">
          <h2>Hello I'm</h2>
          <h1>Lavesh Rawal</h1>
          <h5 className='text-light'>ReactJS Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className='me'>
            <img src={main} alt="aboutme" />
          </div>
          <a href="#Contact" alt="aboutme" className='scroll_down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header