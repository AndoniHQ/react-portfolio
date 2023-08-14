import React from 'react'
import comptia from '../assets/logos/comptia.png'


function About() {
  return (
    <div name='about' className='bg-[#050816e7] w-full h-[100lvh] min-h-[700px] text-gray-300'>
      <div className='flex flex-col justify-center items-center h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#915eef]'>About</p>
            </div>
            <div></div>
        </div>
        <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
            <div className='sm:text-right text-4xl font-bold'>
                <p className=''>Hi. I'm Andoni Hernández, <p className='text-[#915EEF]'>Devops Junior with 1 year of experience.</p></p>
            </div>
            <div className=''>
              <p>A technology enthusiast with experience in system administration and a focus on cybersecurity and automation. Throughout my career, I have worked on incident resolution, server configuration, network and system management in both Linux and Windows environments, as well as administration of cloud services and version control tools. I am eager to continue learning and take on new challenges in this exciting field.</p>
            </div>
        </div>
        <div className='flex flex-wrap sm:mt-16 mt-8'>
          <a href="https://www.credly.com/badges/184eb509-5405-4484-a4a4-25d4b3ed3cd8" target='_blank'><img src={comptia} alt='comptia' className="bg-white rounded-[50%] sm:w-[125px] sm:h-[125px] w-[100px] h-[100px] object-contain mt-0 hover:scale-125 duration-300" /></a>
        </div>
      </div>
    </div>
  )
}

export default About