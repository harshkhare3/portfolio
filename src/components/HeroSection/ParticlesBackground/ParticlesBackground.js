import React from "react"
import Particles from "react-particles-js"

const ParticlesBackground = () => {
  return (
    <Particles
      className="heroSection__particles"
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 5,
              color: "#01BF71",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1,
              },
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  )
}

export default ParticlesBackground
