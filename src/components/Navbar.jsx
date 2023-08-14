import React, { useState } from 'react'
import { IconContext } from 'react-icons/lib'
import { FaBars, FaTimes} from 'react-icons/fa'
import venom from '../assets/logos/venom.png'
import {Link} from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
 
  return (
    <div className='fixed w-full h-[80px] flex items-center justify-between px-4 bg-[#050816] z-10'>
        
        {/* logo */}
        <div className='lg:ml-10 mt-2'>
            <Link className='flex flex-row cursor-pointer' activeClass='text-white' spy='true' to="home" smooth={true} duration={500}>
                <img src={venom} alt="" className='w-[52px] h-[52px]'/>
                <p className='text-white text-4xl font-bold font-mono ml-3'>A.H</p>
            </Link>
                
        </div>
        
        <div>
            {/* Menu */}
            <ul className='hidden md:flex text-[#a2a7b8]  font-bold lg:text-2xl xl:text-3xl text-lg'>
                <li className='hover:text-[#915EEF]'>
                    <Link className='' activeClass='active' spy={true} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-[#915EEF]'>
                    <Link  to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='hover:text-[#915EEF]'>
                    <Link  to="technologies" smooth={true} duration={500}>
                        Technologies
                    </Link>
                </li>
                <li className='hover:text-[#915EEF]'>
                    <Link  to="experience" smooth={true} duration={500}>
                        Experience
                    </Link>
                </li>
                <li className='hover:text-[#915EEF]'>
                    <Link  to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>

        {/* Menu-expandible */}
        <div onClick={handleClick} className='md:hidden hover:color z-20'>
            <IconContext.Provider value={{ size: 40, className: 'fill-[#ffffff] hover:fill-[#915EEF] '}}>
                {!nav ? <FaBars/> : <FaTimes/>}
            </IconContext.Provider>
        </div>

        {/* Menu movil */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#050816] flex flex-col justify-center items-center text-[#ffffff] font-bold'}>
            <li className='py-6 text-4xl hover:text-[#915EEF]'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#915EEF]'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#915EEF]'>
                <Link  onClick={handleClick} to="technologies" smooth={true} duration={500}>
                    Technologies
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#915EEF]'>
                <Link  onClick={handleClick} to="experience" smooth={true} duration={500}>
                    Experience
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#915EEF]'>
                <Link  onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
        
    </div>
    
  )
}

export default Navbar