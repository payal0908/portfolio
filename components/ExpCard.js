import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
const ExpCard = ({name, logo, position, summary, year, skills}) => {
    function format(summary){
        const arr = summary.split('.')
        return (
            <ul className='list-disc space-y-2 sm:space-y-4 ml-5 leading font-thin text-[10px] sm:text-xs'>
            {arr.map(item => (
                <li key={item}>{item}</li>               
            ))}    
            </ul>
            
        )
    }
  return (
    <article  className='flex flex-col rounded-lg items-center flex-shrink-0 mt-20 w-[200px] sm:w-[370px] md:w-[600px] xl:w-[800px] snap-center bg-[#ffffff]/70 shadow-lg p-2 sm:p-8 hover:bg-white cursor-pointer transition-all duration-300'>
        <motion.img 
        
            initial={{y: -100, opacity: 0}}
            transition={{ duration: 1.2 }}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className='w-20 h-20 sm:w-32 sm:h-32 rounded-full xl:w-[150px] xl:h-[150px] object-contain object-center'
            src={logo}
        />
        <div className='px-0 md:px-10 flex flex-col text-center mt-5'>
            <h4 className='font-light text-[10px] sm:text-xl'>{name}</h4>
            <p className='font-bold sm:text-xs mt-1 text-[10px]'>{position}</p>
            <div className='flex space-x-4 my-4 justify-center'>
                {skills.map(item => (
                    <img className='w-[20px]' key={item} src={item}/>
                ))}
            </div>
            <p className='sm:text-sm text-[10px]'>{year}</p>
            <div className='text-left'>
                {format(summary)}
                {/* <p className='leading font-thin text-xs'>{format(summary)}</p> */}
            </div>
        </div>

    </article>
  )
}

export default ExpCard