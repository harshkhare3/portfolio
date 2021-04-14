import React from 'react'
import { Link } from 'react-scroll';

const LinkScroll = (props) => {
  return (
    <Link
      smooth={true} 
      to={props.to}
      spy={true}
      exact="true"
      activeClass="active"
      duration={500}
    >
      {props.name}
    </Link>
  )
}

export default LinkScroll
