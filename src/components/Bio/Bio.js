import React from 'react'
import DP from '../../images/dp.jfif';
import { Link } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import { BsDownload } from 'react-icons/bs';
import './Bio.scss';
import {Fade} from 'react-awesome-reveal';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiJavascript, SiReact, SiVueDotJs, SiRedux, SiNodeDotJs } from 'react-icons/si';
import FirebaseIcon from '../../images/firebase_icon.svg';
import MongoDB from '../../images/mongodb.svg';
import Flutter from '../../images/flutter.svg';
import Cplusplus from '../../images/c++.svg';
import ReactTooltip from 'react-tooltip';

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
                to={() => window.open('https://github.com/harshkhare3', '_blank')}
                className="bio__socialIcons">
                  <FaGithub color="white"/>
              </Link>
              <Link 
                to={() => window.open('https://www.linkedin.com/in/harsh-khare-a150b6180/', '_blank')} 
                className="bio__socialIcons">
                  <FaLinkedin color="#0A66C2"/>
              </Link>
              <Link 
                to={() => window.open('https://twitter.com/JoninHK', '_blank')}
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
              <LinkS 
                to="/resume.pdf"
                smooth={true} 
                spy={true}
                exact="true"
                offset={-80}
                duration={500}
                className="bio__button"
                onClick={() => window.open('https://drive.google.com/file/d/1Urcb0Mc7xMSvWUi6vxaNrp82I4KmpXZM/view?usp=sharing')}
              >
                Download CV
                <BsDownload className="bio__buttonIcon"/>
              </LinkS>
            </div>  
          </div>
        </div>
      </Fade>
      <Fade duration="2000">
        <div className="bio__skills">
          <h1>MY SKILLS</h1>
          <div className="bio__skillsContainer">
            <SiJavascript
              onClick={()=> window.open('https://www.javascript.com/')} 
              data-tip="JavaScript" 
              color="#F7DF1E"
            />
            <img 
              onClick={()=> window.open('https://www.cplusplus.com/')} 
              alt="C++" 
              data-tip="C++" s
              src={Cplusplus}
            />
            <SiReact
              onClick={()=> window.open('https://reactjs.org/')}
              data-tip="React Js" 
              color="#5ED3F3"
            />
            <SiVueDotJs 
              onClick={()=> window.open('https://vuejs.org/')}
              data-tip="Vue Js" 
              color="#3FB27F"
            />
            <SiRedux 
              onClick={()=> window.open('https://redux.js.org/')}
              data-tip="Redux" 
              color="#7248B6" 
            />
            <SiNodeDotJs 
              onClick={()=> window.open('https://nodejs.org/en/')}
              data-tip="Node Js" 
              color="#57A646"
            />
            <img 
              alt="Flutter" 
              onClick={()=> window.open('https://flutter.dev/')}
              data-tip="Flutter" 
              src={Flutter} 
            />
            <img 
              alt="MongoDB" 
              onClick={()=> window.open('https://www.mongodb.com/')}
              data-tip="MongoDB" 
              src={MongoDB} 
            />
            <img 
              alt="Firebase" 
              onClick={()=> window.open('https://firebase.google.com/')}
              data-tip="Firebase" 
              src={FirebaseIcon} 
            />
          </div>
        </div>
      </Fade>
      <ReactTooltip
        place="top" 
        backgroundColor="#0062c4" 
        textColor="white"
        effect="float"
      />
    </div>   
  )
}

export default Bio
