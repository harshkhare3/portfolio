import React from 'react'
import DP from '../../images/dp.jfif';
import { Link } from 'react-scroll';
import { BsDownload } from 'react-icons/bs';
import './Bio.scss';
import Fade from 'react-reveal/Fade';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Bio = () => {
  return (
    
    <div className="bio__container" id='about'>
      <Fade top>
        <div className="bio__heading">
          <h1>ABOUT ME</h1>
        </div>
      </Fade>
      <div className="bio__about">
        <Fade left>
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
                  <FaLinkedin />
              </Link>
              <Link 
                onClick={() => window.open('https://twitter.com/JoninHK', '_blank')}
                className="bio__socialIcons">
                  <FaTwitter />
              </Link>
            </div>
          </div>
        </Fade>

        <Fade right>
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
        </Fade>
      </div>

    </div>
  )
}

export default Bio
