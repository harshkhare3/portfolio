import React, { useState } from 'react'
import { Card as CardUi, IconButton } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { HiInformationCircle } from 'react-icons/hi';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import DOMPurify from 'dompurify';
import ReactCardFlip from 'react-card-flip';
import { SiGithub } from 'react-icons/si';

import './Card.scss'

const Card = ({ name, imageUrl, data, tech, link, gitLink }) => {
  var cleanData = DOMPurify.sanitize(data);

  const [open, setOpen] = useState(false);

  const handleFlip = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ReactCardFlip flipSpeedFrontToBack="1.5" flipSpeedBackToFront="1.5" isFlipped={open} flipDirection="horizontal">
        <CardUi className="card__container" >
          <CardActionArea>
            <CardMedia
              className="card__media"
              image={imageUrl}
            />
            <CardContent className="card__frontContent">
              <p dangerouslySetInnerHTML={{__html:tech}}></p>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ padding:2 }}>
            <IconButton onClick={handleFlip}>
              <HiInformationCircle color="#606BD5" size="30px" />
            </IconButton>
            <Button onClick={() => window.open(link, '_blank')} variant="contained" color="primary" size="small" >
              View Project 
            </Button>
          </CardActions>
        </CardUi>


        <CardUi className="card__container">
          <CardActionArea>
            <CardContent className="card__backContent scrollable">
              <h2>{name}</h2>
              <span dangerouslySetInnerHTML={{ __html : cleanData }}></span>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ paddingTop:2 }}>
            <Button onClick={handleFlip} variant="contained" size="small" color="secondary">
              <IoReturnUpBackOutline size="25px"/> &nbsp; Back 
            </Button>
            <IconButton size="medium">
              <SiGithub onClick={() => window.open(gitLink, '_blank')} color="black"/>
            </IconButton>
          </CardActions>
        </CardUi>
      </ReactCardFlip>
    </div>
  )
}

export default Card
