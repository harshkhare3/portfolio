import React, { useState } from 'react'
import { Card as CardUi } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { GrCircleInformation } from 'react-icons/gr';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import DOMPurify from 'dompurify';
import ReactCardFlip from 'react-card-flip';

import './Card.scss'

const Card = ({ name, imageUrl, data, tech, link }) => {
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
              onClick={() => window.open(link, '_blank')} 
              className="card__media"
              image={imageUrl}
            />
            <CardContent className="card__frontContent">
              <p dangerouslySetInnerHTML={{__html:tech}}></p>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={handleFlip} variant="contained" size="small" color="primary">
              More Info &nbsp; <GrCircleInformation size="15px"/>
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
          <CardActions>
            <Button onClick={handleFlip} variant="contained" size="small" color="secondary">
              <IoReturnUpBackOutline size="25px"/> &nbsp; Back 
            </Button>
          </CardActions>
        </CardUi>
      </ReactCardFlip>
    </div>
  )
}

export default Card
