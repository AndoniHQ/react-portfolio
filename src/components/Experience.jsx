import React from 'react'
import { VerticalTimelineElement, VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants/Experience.jsx'

const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
    contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  ##1d1836" }}
      date={
        <p
          className="font-mono text-white"
          style={{ margin: 0,}}
        >
          {experience.date}
        </p>
      }
      iconStyle={{ background: experience.iconBg, color: "black" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }>
      <div>
        <h3 className="text-[#915eef] text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold font-sans"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-300 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

function experience() {
  return (
    <div name="experience" className='flex flex-col justify-center lg:items-center items-start bg-[#050816e7] min-h-[700px]'>
      <h1 className='text-2xl text-gray-300 font-bold ml-2 mt-10'>What I've done so far</h1>
      <h2 className='text-4xl text-gray-300 font-bold ml-2 inline border-b-4 border-[#915eef]'>Work Experience</h2>
      <VerticalTimeline lineColor='#ffffff' className='mt-10'>
        {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
      </VerticalTimeline>
    </div>
  )
}

export default experience