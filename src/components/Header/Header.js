import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import LinkScroll from '../LinkScroll/LinkScroll';
import './Header.scss';

function Header(props) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    }
    else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <div className={scrollNav === true ? "header__nav" : "header__nav"} >
      <div className="header__container">
        <Link
          smooth={true} 
          duration={500} 
          offset={0} 
          to="home" 
          className="header__logo"
        >
          Harsh Khare
        </Link>
        
        <div onClick={props.toggle} className="header__mobileIcon">
          <FaBars />
        </div>
          
        <ul className="header__navMenu">
          <li className="header__navItem">
            <LinkScroll to="about" name="About" />
          </li>
          <li className="header__navItem">
            <LinkScroll to="portfolio" name="Portfolio" />
          </li>
          <li className="header__navItem">
            <LinkScroll to="contact" name="Contact Me" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
