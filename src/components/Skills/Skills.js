import React from 'react';
import './Skills.scss';

const Skills = ({skill, progress, width}) => {
  return (
    <div className="skills__container">
      <h5 className="skills__title">{skill}</h5>
      <div className="sills__bar">
        <p className="skills__text">{progress}</p>
        <div className="skills__progress">
          <div className="skills__progressBar">
            <div className="skills__innerProgress" style={{ width: width}}>    </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
