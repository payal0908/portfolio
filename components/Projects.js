import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { pdata } from './data/projectdata'


const Projects = () => {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
   
    className='h-screen flex relative overflow-hidden flex-col text-center md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='ml-3 absolute top-24 uppercase tracking-[20px] text-white text-lg sm:text-xl md:text-2xl'>Projects</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-[#ba6598]/40 scrollbar-thumb-white scrollbar-thin'>
          {pdata.map(item => (
            <ProjectCard key={item.name} name={item.name} images={item.images} desc={item.desc} tech={item.tech} link={item.link}/>
          ))}
            
            
        </div>
    </motion.div>
  )
}

export default Projects