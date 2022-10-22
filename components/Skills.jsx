import React from 'react'
import SkillsCard from './SkillsCard'
import {skills,stats} from '../utils/constants'
import StatsCard from './StatsCard'


const Skills = () => {
  return (
    <div className='w-full bg-[#EFEFEF] my-2 '>
      <div className="container">
      <h1 className='font-bold text-2xl uppercase pb-10 pt-2 px-2 '>services we offer</h1>
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-3 sm:flex">
        {skills.map((skill)=>{
          return(<SkillsCard title={skill.title} desc={skill.desc} 
            img={skill.img} key={skill.title}/>)
        })}
      </div>
      {/* stats */}
      <div className="flex mx-auto w-full justify-around">
        {
          stats.map((stat,index)=>{
           
           return(<StatsCard number={stat.number} subtitle={stat.subtitle} key={index}/>)
          })
        }

      </div>

      </div>
      
    </div>
  )
}

export default Skills