import React from 'react'
import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const ParticlesBg = () => {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (  
    <Particles className='fixed w-full h-[100lvh] -z-10'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                fullScreen: {
                    enable: false,
                    zIndex: -1,
                },
                background: {
                    color: {
                        value: "#050816"
                    },
                    image: "",
                    position: "",
                    repeat: "",
                    size: "",
                    opacity: 1,
                },
                particles: {
                    number: {
                      value: 40,
                      density: {
                        enable: true,
                        value_area: 500
                      }
                    },
                    color: {
                      value: "#915EEF"
                    },
                    shape: {
                      type: "circle",
                      stroke: {
                        width: 0,
                        color: "#000000"
                      },
                      polygon: {
                        nb_sides: 5
                      },
                      image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                      }
                    },
                    opacity: {
                      value: 0.5,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                      }
                    },
                    size: {
                      value: 3,
                      random: true,
                      anim: {
                        enable: true,
                        speed: 14.385614385614385,
                        size_min: 0.1,
                        sync: false
                      }
                    },
                    line_linked: {
                      enable: true,
                      distance: 150,
                      color: "#758173",
                      opacity: 0.4,
                      width: 1
                    },
                    move: {
                      enable: true,
                      speed: 1,
                      direction: "none",
                      random: false,
                      straight: false,
                      out_mode: "out",
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                      }
                    }
                  },
                  interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "repulse"
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 400,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 200,
                        size: 10,
                        duration: 0.7308694910712106,
                        opacity: 0.7795941238092913,
                        speed: 3
                      },
                      repulse: {
                        distance: 300,
                        duration: 0.4
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
                  },
                retina_detect: true
            }}
        /> 
  )
}

export default ParticlesBg