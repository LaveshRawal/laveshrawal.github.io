import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import "./Exp.css"

const Exp = () => {
  return (
    <section id="Exp">
    <h3>My Previous Experience</h3>
    <h2>What Skills I Have</h2>

    <div className='container exp_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>

            <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
            <h4>BOOTSTRAP</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>INTERMEDIATE</small>
            </div>
            </article>

          </div>
        </div>
        <div className='experience_IT'>
        <h3>IT and Noc Operation</h3>
          <div className='experience_content'>

          <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div> <h4>Docker</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            {/*  */}
            <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
            <h4>Vmware</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
            <h4>JSON</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
            <h4>mySQL,OracleDB,MS SQL,</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
            <h4>AmazonAWS,Azure</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
            <h4>GIT,Bitbucket</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
            <h4>NPM</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
            <h4>JSON</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
            <h4>Active directory services</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details '>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
            <h4>Windows and Linux Administration</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

        </div>
    </div>
    </div>
    </section>
  )
}

export default Exp