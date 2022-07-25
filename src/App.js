import React from 'react';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Exp from "./components/Exp/Exp"
import Contact from "./components/Contact/Contact"
import Services from "./components/Services/Services"
import PortFolio from "./components/PortFolio/PortFolio";
import Testimoniols from "./components/Testimoniols/Testimoniols"
import "./index.css"



const App = () => {
  return (
   <>
      
      <Header />
      <Nav />
      <About />
      <Exp />
      <Services />
      <PortFolio />
      <Testimoniols />
      <Contact />
      <Footer />
      </>
  ) 
    
}

export default App
