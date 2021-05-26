import React, { useState, useEffect } from "react"
import { FaBars } from "react-icons/fa"
import { Link } from "react-scroll"
import LinkScroll from "./LinkScroll/LinkScroll"
import "./Header.scss"
import Headroom from "react-headroom"
import Logo from "../../images/logo.png"

function Header(props) {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <Headroom disableInlineStyles={true}>
      <div className={scrollNav === true ? "header__nav" : "header__nav"}>
        <div className="header__container">
          <Link
            smooth={true}
            duration={500}
            offset={0}
            to="home"
            className="header__logo"
          >
            <img src={Logo} alt="Header Logo" />
          </Link>

          <div onClick={props.toggle} className="header__mobileIcon">
            <FaBars />
          </div>

          <ul className="header__navMenu">
            <li className="header__navItem">
              <LinkScroll to="about" name="About Me" />
            </li>
            <li className="header__navItem">
              <LinkScroll to="portfolio" name="My Projects" />
            </li>
            <li className="header__navItem">
              <LinkScroll to="contact" name="Lets Connect" />
            </li>
          </ul>
        </div>
      </div>
    </Headroom>
  )
}

export default Header
