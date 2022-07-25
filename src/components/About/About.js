import React from "react";
import abtme from "../img/Profile_Pic.jpg";
import { RiFolder2Fill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { FaPeopleArrows } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section id="About">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="aboutmypic">
            <img src={abtme} alt="AboutImage" className="myimage"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h3>Experience</h3>
              <small>6+ Years</small>
            </article>

            <article className="about_card">
              <FaPeopleArrows className="about_icon" />
              <h3>Technical Skills</h3>
              <small>HTML, CSS, Javascript, React, JSON, 
Vmware,mySQL,OracleDB,Docker, 
Active directory services, Windows and 
linux Administration,MS SQL, 
CSS,BootStrap,AmazonAWS, 
Azure,GIT,Bitbucket,NPM.</small>
            </article>

            <article className="about_card">
              <RiFolder2Fill className="about_icon" />
              <h3>Qualification</h3>
              <small> ✓ Master of Science in Information 
Technology <br/>
✓ Bachelor of Computer Application 
</small>
            </article>
          </div>

          <p>
          Experience Summary:
          Effective 2 years experience in frontend web development with HTML, CSS, JavaScript, React and MSSQL. Overall 7 years of experience in NOC, IT and Application Support. Skilled in Windows & Linux OS and servers, Virtualization tech and IT infrastructure management.

          </p>
          <p>
           Technical Skills :

HTML, CSS, Javascript, React, JSON, Vmware,mySQL,OracleDB,Docker, Active directory services, Windows and linux Administration,MS SQL, CSS,BootStrap,AmazonAWS, Azure,GIT,Bitbucket,NPM.
          </p>
          <p>
            
Qualification:

Master of Science in Information Technology Punjab Technical University

Bachelor of Computer Application (June 2011) MLS University Udaipur, Rajasthan.

          </p>
          <a href="#Contact" className="btn btn-Primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
