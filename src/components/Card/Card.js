import React, { useState } from 'react'
import { Card as CardUi, IconButton } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { HiInformationCircle } from 'react-icons/hi';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { FiExternalLink } from 'react-icons/fi';
import DOMPurify from 'dompurify';
import ReactCardFlip from 'react-card-flip';
import { SiGithub } from 'react-icons/si';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ReactPlayer from 'react-player/lazy'

import './Card.scss'

const Card = ({ name, imageUrl, data, tech, link, gitLink }) => {
  var cleanData = DOMPurify.sanitize(data);

  const [flip, setFlip] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFlip = () => {
    setFlip(!flip);
  };

  return (
    <div>
      <ReactCardFlip flipSpeedFrontToBack="1.5" flipSpeedBackToFront="1.5" isFlipped={flip} flipDirection="horizontal">
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
            <IconButton onClick={() => window.open(link, '_blank')} >
              <FiExternalLink />
            </IconButton>
            <Button onClick={handleOpen} variant="contained" color="primary" size="small">
              HOW TO USE?
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

      <Modal
        className="card__modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Fade in={open}>
          <ReactPlayer url='https://www.youtube.com/watch?v=Cwief8GflTU' controls="true" className="card__video"/>
        </Fade>
      </Modal>
    </div>
  )
}

export default Card
