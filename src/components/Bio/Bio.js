import React from 'react'
import DP from '../../images/dp.jfif';
import './Bio.scss';

const Bio = () => {
  return (
    
    <div className="bio__container" id='about'>
      <div className="bio__heading">
        <h1>ABOUT ME</h1>
      </div>
      <div className="bio__about">
        <div className="bio__image">
          <img src={DP} alt="Profile Pic" className="bio__dp"/>
        </div>
        
        <div className="bio__content">
          <h4>I am <span style={{ color: '#01BF71'}}>Harsh Khare</span></h4>
          <p>I am a final year Computer Science student at The University of Adelaide.
             
          </p>
          
          <div className="bio__details">
            <div className="bio__leftSection">
              <p>Full Name</p>
              <p>Age</p>
              <p>Address</p>
              <p>Phone Number</p>
            </div>
            <div className="bio__rightSection">
              <p>: Harsh Khare</p>
              <p>: 20</p>
              <p>: 456 Grand Junction Road</p>
              <p>: +61470450393</p>
            </div>
          </div>   
        </div>
      </div>

    </div>
  )
}

export default Bio
