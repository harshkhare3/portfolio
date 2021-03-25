import React from 'react'
import DP from '../../images/dp.jfif';
import { Link } from 'react-scroll';
import { BsDownload } from 'react-icons/bs';
import './Bio.scss';
import {Fade} from 'react-awesome-reveal';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Skills from '../Skills/Skills';

const Bio = () => {
  return (       
    <div className="bio__container" id='about'>
      <Fade duration="2000">
        <div className="bio__heading">
          <h1>ABOUT ME</h1>
        </div>
      </Fade>
      <Fade duration="2000" cascade>
        <div className="bio__about">
          <div className="bio__image">
            <img src={DP} alt="Profile Pic" className="bio__dp"/>
            <div className="bio__social">
              <Link
                onClick={() => window.open('https://github.com/harshkhare3', '_blank')}
                className="bio__socialIcons">
                  <FaGithub />
              </Link>
              <Link 
                onClick={() => window.open('https://www.linkedin.com/in/harsh-khare-a150b6180/', '_blank')} 
                className="bio__socialIcons">
                  <FaLinkedin color="#0A66C2"/>
              </Link>
              <Link 
                onClick={() => window.open('https://twitter.com/JoninHK', '_blank')}
                className="bio__socialIcons">
                  <FaTwitter color="#1DA1F2"/>
              </Link>
            </div>
          </div>

          <div className="bio__content">
            <h4>My name is <span style={{ color: '#01BF71'}}>Harsh Khare</span></h4>

            <p> I am a final-year Computer Science student at The University of Adelaide <br/>
              currently persuing CyberSecurity as major. I am a MERN stack developer with <br/>
              experience in web development.
              <br /> <br />
              I am also proficient in Object Oriented Programming (C++) and <br />
              Algorithms & Data Structures.
            </p>
              
            <div className="bio__details">
              <div className="bio__leftSection">
                <p>Full Name</p>
                <p>Age</p>
                <p>Email</p>
                <p>Address</p>
                <p>Phone Number</p>
              </div>
              <div className="bio__rightSection">
                <p>: Harsh Khare</p>
                <p>: 20</p>
                <p>: harshkhare3@gmail.com</p>
                <p>: 456 Grand Junction Road</p>
                <p>: +61-470450393</p>
              </div>
            </div> 
            <div>
              <Link 
                to="/resume.pdf"
                smooth={true} 
                spy={true}
                exact="true"
                offset={-80}
                duration={500}
                className="bio__button"
              >
                Download CV
                <BsDownload className="bio__buttonIcon"/>
              </Link>
            </div>  
          </div>
        </div>
      </Fade>
      <Fade duration="2000">
        <div className="bio__skills">
          <h1>MY SKILLS</h1>
          <div className="bio__skillsContainer">
            <Skills skill={'Javascript'} progress={'90%'} width={'90%'} />
            <Skills skill={'C++'} progress={'70%'} width={'70%'} />
            <Skills skill={'React Js'} progress={'80%'} width={'80%'} />
            <Skills skill={'Vue Js'} progress={'60%'} width={'60%'} />
            <Skills skill={'Redux'} progress={'70%'} width={'70%'} />
            <Skills skill={'Node Js'} progress={'80%'} width={'80%'} />
            <Skills skill={'Flutter'} progress={'50%'} width={'50%'} />
            <Skills skill={'MongoDB'} progress={'80%'} width={'80%'} />
            <Skills skill={'MySQL'} progress={'80%'} width={'80%'} />
            <Skills skill={'Firebase'} progress={'70%'} width={'70%'} />
          </div>
        </div>
      </Fade>
    </div>   
  )
}

export default Bio
