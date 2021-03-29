import React, { useState ,useEffect } from 'react';
import './Skills.scss';

const Skills = ({skill, progress, width, icon}) => {
  const[barWidth, setBarWidth] = useState(0);
  useEffect(()=>{
    setBarWidth(width);
  },[width]);

  return (
    <div className="skills__container">
      <h5 className="skills__title">{skill} &nbsp; {icon}</h5>
      <div className="sills__bar">
        <p className="skills__text">{progress}</p>
        <div className="skills__progress">
          <div className="skills__progressBar">
            <div className="skills__innerProgress" style={{ width: barWidth}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
