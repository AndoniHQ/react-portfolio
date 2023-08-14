import React from 'react'
import { techStack } from '../constants/Techstack.jsx'

const TecnologyCard = ({name, img}) => {
  return (
      <div className="bg-white rounded-[20px] py-5 p-5 lg:w-[120px] lg:h-[120px] w-[100px] h-[100px]  flex  justify-evenly items-center flex-col hover:scale-75 duration-300 shadow-[5px_5px_0px_0px_rgba(109,40,217)] ">
        <img src={img} alt={name} className='sm:w-[72px] sm:h-[72px] w-[50px] h-[50px]'/>
        <h3 className="text-[#050816] lg:text-[18px] text-[16px] font-bold text-center mt-2">
          {name}
        </h3>
      </div>
  )
}

function technologies() {
  return (
    <div name='technologies' className='sm:px-16 px-6 sm:py-16 py-10 max-w-6xl h-[100lvh] min-h-[600px] mx-auto'>
      <div className='flex flex-col justify-center items-center text-center w-full h-full'>
      <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-[#915eef]' >Technologies</p>
      <h1 className='text-lg text-gray-300 p-2'>These are the technologies I have worked with and that I like the most.</h1>
      <div className='flex flex-wrap justify-center lg:gap-8 gap-5 mt-8'>
        {techStack.map((tech, index) => (
          <TecnologyCard key={tech.name} index={index} {...tech}/>
        ))}
      </div>
      </div>
    </div>
  )
}

export default technologies
