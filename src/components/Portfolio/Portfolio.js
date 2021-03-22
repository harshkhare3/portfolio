import React, { useState } from 'react';
import Card from '../Card/Card';
import {Fade} from 'react-awesome-reveal';
import Button from '@material-ui/core/Button';
import { WebApp } from './Data';
import './Portfolio.scss';

const Portfolio = () => {
  const [projectType, setProjectType] = useState(0);
  const [active, setActive] = useState(false);

  const changeProjectType = (e) => {
    if(e===1 || e===2){
      setActive(true)
    }
    else{
      setActive(false)
    }
    setProjectType(e);
  }

  return (
    <div id="portfolio" className={active? "portfolio portfolio__height" : "portfolio"}>
      <Fade duration="1000">
        <h1>MY PORTFOLIO</h1>
        <div className="portfolio__button">
          <Button onClick={(e) => changeProjectType(0)}
           variant="contained"
           size="medium" 
           style={ projectType === 0 ? {backgroundColor:'#01BF71'} : {backgroundColor: '#D4D4D4'} }
           >            
           All Projects
          </Button>
          <Button onClick={(e) => changeProjectType(1)}
           variant="contained" 
           size="medium" 
           style={ projectType === 1 ? {backgroundColor:'#01BF71'} : {backgroundColor: '#D4D4D4'} }
           >
            Web Apps
          </Button>
          <Button
           onClick={(e) => changeProjectType(2)}
           variant="contained" 
           size="medium" 
           style={ projectType === 2 ? {backgroundColor:'#01BF71'} : {backgroundColor: '#D4D4D4'} }
          >
            Mobile Apps
          </Button>
        </div>
      </Fade>
      <Fade duration="1000" cascade>
        <div className="portfolio__row">
          {
            projectType === 0 ? 
              WebApp.map((app) => (
                <Card name={app.name} imageUrl={app.imageUrl} />
              ))
            : projectType ===1 ?
              WebApp.filter(app => app.id === 1).map((app) => (
                <Card name={app.name} imageUrl={app.imageUrl} />
              ))
            :
              WebApp.filter(app => app.id === 2).map((app) => (
                <Card name={app.name} imageUrl={app.imageUrl}/>
              )) 
          }        
        </div>
      </Fade>
    </div>
  )
}

export default Portfolio;
