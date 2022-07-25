import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {IoNewspaperSharp} from 'react-icons/io5'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('home');
  return (
    <nav>
        <a href='#home' onClick={()=> setActiveNav('home')} className={activeNav === 'home' ? 'active' : ''}><AiOutlineHome/></a>
        <a href='#About' onClick={()=> setActiveNav('#About')} className={activeNav ==="#About" ? 'active': ''}><AiOutlineUser/></a>
        <a href='#Exp' onClick={()=> setActiveNav('#Exp')} className={activeNav === '#Exp' ? 'active': ''}><BiBook/></a>
        <a href='#Services' onClick={()=> setActiveNav('#Services')} className={activeNav === '#Services' ? 'active': ''}> <RiServiceLine/></a>
        <a href='#PortFolio' onClick={()=> setActiveNav('#PortFolio')} className={activeNav === '#PortFolio' ? 'active': ''}> <IoNewspaperSharp/> </a>
        
        
    </nav> 

  )
}
export default Nav