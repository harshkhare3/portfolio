import React from 'react';
import "./Sidebar.scss"
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';

const Sidebar = (props) => {
  return (
    <div 
      onClick={props.toggle}
      className={props.isOpen === true ? 'sidebar__container sidebar__show' 
      : 'sidebar__container'}
    >
      <div className="sidebar__icon">
        <div className="sidebar__closeIcon">
          <FaTimes className="sidebar__icon"/>
        </div>
      </div>
      <div className="sidebar__wrapper">
        <ul className="sidebar__menu">
          <li className="sidebar__link">
            <LinkScroll onClick={props.toggle} className="sidebar__link" to="about">About Me</LinkScroll>
          </li>
          <li className="sidebar__link">
            <LinkScroll onClick={props.toggle} className="sidebar__link" to="portfolio">My Projects</LinkScroll>
          </li>
          <li className="sidebar__link">
            <LinkScroll onClick={props.toggle} className="sidebar__link" to="contact">Lets Connect</LinkScroll>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
