import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { useState } from 'react'
import { data } from './data/skilldata'

const Skills = () => {
    const [expandedDay, setCollapsedDay] = useState();
    const days = ['Python', 'Java', 'Django', 'ReactJs', 'C++', 'Javascript', 'React Native', 'NodeJs', 'NextJs', 'SQL'];
    
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col text-center md:text-left relative min-h-screen md:flex-row justify-center mx-auto items-center max-w-[2000px] xl:px-10 px-10 xl:space-y-0'>
        <h3 className='absolute ml-3 top-24 uppercase tracking-[20px] text-white text-lg sm:text-xl md:text-2xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-white text-xs md:text-sm'>Click on a skill for current profficiency</h3>
        <div className='relative top-5 grid md:grid-cols-4 lg:grid-cols-4 lg:gap-6 grid-cols-3 md:gap-5 gap-3 '>
            {data.map(item => (
                <Skill 
                key={item.id}
                day={item.name}
                logo={item.img}
                prof={item.prof}
                disabled={expandedDay !== item.name && expandedDay !== undefined}
                onExpand={() => setCollapsedDay(item.name)}
                onCollapse={() => setCollapsedDay()}
            />
            ))}
            
        </div>
    </motion.div>
  )
}

export default Skills