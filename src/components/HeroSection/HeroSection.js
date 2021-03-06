import React, { useState } from "react"
import Typed from "react-typed"
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md"
import { Link as LinkScroll } from "react-scroll"
import Particles from "./ParticlesBackground/ParticlesBackground"

import "./HeroSection.scss"

const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <div className="herosection__background">
      <div className="heroSection__container">
        <div className="heroSection__background">
          <Particles />
        </div>
        <div className="headerSection__content">
          <h1>
            I am a&nbsp;
            <Typed
              className="herosection__typed"
              strings={[
                "React Developer",
                "Web Developer",
                "Software Developer",
              ]}
              typeSpeed={50}
              backSpeed={40}
              loop
            />
          </h1>
          <div className="headerSection__buttonWrapper">
            <LinkScroll
              to="about"
              smooth={true}
              spy={true}
              exact="true"
              duration={500}
              className="headerSection__button"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Bio{" "}
              {hover ? (
                <MdArrowForward className="headerSection__buttonIcon" />
              ) : (
                <MdKeyboardArrowRight className="headerSection__buttonIcon" />
              )}
            </LinkScroll>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
