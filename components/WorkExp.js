import React from 'react'
import { motion } from 'framer-motion'
import ExpCard from './ExpCard'
import { wdata } from './data/workdata'

const WorkExp = () => {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
   
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='ml-3 absolute top-24 uppercase tracking-[20px] text-white text-lg sm:text-xl md:text-2xl'>Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-[#ba6598]/40 scrollbar-thumb-white scrollbar-thin'>
            {wdata.map(item => (
                <ExpCard 
                    key={item.id}
                    name={item.name}
                    logo={item.img}
                    position={item.position}
                    summary={item.summary}
                    year={item.year}
                    skills={item.skills}
                />
            ))}
            
            
        </div>
    </motion.div>
  )
}

export default WorkExp