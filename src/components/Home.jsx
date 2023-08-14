import React from 'react'
import avatar from '../assets/images/Avatar.png'
import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'
import mail from '../assets/icons/mail.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import {Link} from 'react-scroll'

function Home() {

  return (    
    <div name='home' className='w-full h-[100svh] min-h-[600px] z-0'>
        {/* Container */}
        <div className='flex flex-row justify-center items-center h-full'>

          {/* Lateral Socials*/}
          <div className='hidden md:flex flex-col max-w-[400px] text-white font-bold'>
            <ul>
                <li className='w-[150px] lg:w-[200px] h-[50px] lg:h-[75px] flex justify-between items-center ml-[-90px] lg:ml-[-120px] hover:translate-x-[80px] lg:hover:translate-x-[120px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full lg:text-2xl' target="_blank" href='https://www.linkedin.com/in/andonihq/'>LinkedIn<img src={linkedin} alt="" className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'/>
                    </a>
                </li>
            </ul>
            <ul>
                <li className='w-[150px] lg:w-[200px] h-[50px] lg:h-[75px] flex justify-between items-center ml-[-90px] lg:ml-[-120px] hover:translate-x-[80px] lg:hover:translate-x-[120px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full lg:text-2xl' target="_blank" href='https://github.com/andonihq'>Github<img src={github} alt="" className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'/>
                    </a>
                </li>
            </ul>
            <ul>
                <li className='w-[150px] lg:w-[200px] h-[50px] lg:h-[75px] flex justify-between items-center ml-[-90px] lg:ml-[-120px] hover:translate-x-[80px] lg:hover:translate-x-[120px] duration-300 bg-[#f9a01b]'>
                    <a className='flex justify-between items-center w-full lg:text-2xl' target="_blank" href='mailto:andoni.hernandez.quero@gmail.com'>Mail<img src={mail} alt="" className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'/>
                    </a>
                </li>
            </ul>
          </div>

          {/* Home Info*/}
          <div className='max-w-[1000px] mx-auto px-8'>

            <div className='flex md:flex-row flex-col items-center'>
              <img src={avatar} alt="Error" className='rounded-full h-[150px] w-[150px] m-2 border-4 border-[#915EEF]'/>
              <div className='text-center md:text-left'>
                <h1 className='text-4xl lg:text-6xl font-bold text-[#ffffff]'>Andoni Hernández</h1>
                <TypeAnimation
                  className='text-3xl lg:text-5xl font-bold text-[#915EEF] z-0'
                  sequence={[
                    'Devops & Sysadmin',
                    1000,
                    'Scroll down for more',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </div>

            {/* Smartphone Socials*/}
            <div className='md:hidden flex flex-row gap-2 mt-3 justify-center'>
              <a href="https://www.linkedin.com/in/andonihq/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="" className='w-12 lg:w-14 h-12 lg:h-14 hover:scale-150 duration-300'/>
              </a>
              <a href="https://github.com/andonihq" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="" className='w-12 lg:w-14 h-12 lg:h-14 hover:scale-150 duration-300'/>
              </a>
              <a href="mailto:andoni.hernandez.quero@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={mail} alt="" className='w-12 lg:w-14 h-12 lg:h-14 hover:scale-150 duration-300'/>
              </a>
            </div>
          </div>

          <div
              className="absolute xs:bottom-5 bottom-5 w-full flex flex-row justify-center items-center">
              <Link  to="about" smooth={true} duration={500}>
                <div
                  className="w-[35px] h-[64px] rounded-3xl border-4 border-french border-dim flex justify-center items-start p-2 border-white cursor-pointer">
                  <motion.div
                    animate={{
                      y: [0, 24, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'loop',
                    }}
                    className="w-3 h-3 rounded-full bg-white mb-1"
                  />
                </div>
              </Link>
            </div>
        </div>
      
    </div>

  )
}

export default Home