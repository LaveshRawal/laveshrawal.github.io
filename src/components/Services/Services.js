import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Services.css"

const Services = () => {
  return (
    <section id="Services">
      <h3>What I Offer</h3>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web development and Tech Support Services</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Application and Technical Support
              </p>
            </li>

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Noc Tech Support
              </p>
            </li>

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Traning and Client Communication
              </p>
            </li>    

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Web Development
              </p>
            </li>   

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Research and Analysis
              </p>
            </li>  

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Digital Content Creation
              </p>
            </li>  

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Customer Services
              </p>
            </li>     

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                IT Recruitment / Staffing
              </p>
            </li>  

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Manual Testing
              </p>
            </li> 

         </ul>
        </article>

            {/* end of UL UX Design */}
            <article className="service">
          <div className="service_head">
            <h3>IT Services</h3>
          </div>
          <ul className="service_list">        

          <li>
              <BiCheck className="service_list_icon" />
              <p>
                IT and Technical Support Training
              </p>
            </li>

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                IT Events and Tour Oraganizer
              </p>
            </li>

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                IT Hardware, Software and all Equipment Provider
              </p>
            </li>    

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                IT Robotics Lab installation in Schools and College institute
              </p>
            </li>   

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                CCTV installation
              </p>
            </li>  

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Office Space Provider
              </p>
            </li>    

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Robotics and AI Training in Schools Colleges
              </p>
            </li>  

            <li>
              <BiCheck className="service_list_icon" />
              <p>
               Solution for all IT Admin related requirments
              </p>
            </li> 
         </ul>
        </article>

        {/* end of web development */}

        <article className="service">
          <div className="service_head">
            <h3>Digital Operations</h3>
          </div>
          <ul className="service_list">
            
            <li>
              <BiCheck className="service_list_icon" />
              <p>
              IT Infrastructure Management Services
              </p>
            </li>

             
            <li>
              <BiCheck className="service_list_icon" />
              <p>
              Engineering and R&D Services
              </p>
            </li>

             
            <li>
              <BiCheck className="service_list_icon" />
              <p>
              Digital Process Operations
              </p>
            </li>

             
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Digital Marketing
              </p>
            </li>

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Technical Writing
              </p>
            </li>

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Business Process Operations
              </p>
            </li>

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Data Entery and IT Backoffice Work
              </p>
            </li>

            <li>
              <BiCheck className="service_list_icon" />
              <p>
                IT Sells and Services
              </p>
            </li>

            

         </ul>
        </article>
        {/* end of content creation */}
      </div>
    </section>
  );
};

export default Services;
