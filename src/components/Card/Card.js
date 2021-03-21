import React from 'react';
import './Card.scss'
import { Card as CardUi} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { GrCircleInformation } from 'react-icons/gr'

const Card = ({ name, imageUrl }) => {
  return (
    <CardUi className="card__container">
      <CardActionArea>
        <CardMedia
          className="card__media"
          image={imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <h2>{name}</h2>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          More Info &nbsp; <GrCircleInformation />
        </Button>
      </CardActions>
    </CardUi>
  )
}

export default Card
