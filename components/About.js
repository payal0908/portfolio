import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const About = () => {

    const [text, count] = useTypewriter({
        words: ["Hi, I am Payal Khandelwal!", "Girl-who-loves-tea.py", "<ButLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000
    })

  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
     className='transition-all duration-100 flex flex-col text-center relative h-screen justify-evenly mx-auto items-center max-w-7xl px-10' >
        <motion.h3 
         className='ml-3 absolute top-24 uppercase tracking-[20px] text-white text-lg sm:text-xl md:text-2xl'>About</motion.h3>
        
        <motion.img
            className='mt-12 -mb-20 md:mt-12 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[250px] xl:h-[300px] relative top-5'
            initial={{
                x:-200,
                opacity: 0
            }}
            transition={{
                duration:1.2
            }}
            viewport={{once:true}} 
            whileInView={{opacity: 1, x:0}}
            src='/photo.jpeg'
        />
        <h1 className='text-[14px] sm:text-2xl text-white lg:text-5xl font-semibold px-10 relative top-12'>
            <span>{text}</span>
            <Cursor cursorColor='#ad45f7'/>
        </h1>
        <div className='px-0 md:px-10'>
            <p className='text-base text-[12px] sm:text-md md:text-lg text-white dark:text-white'>
                Hi, I am Payal and I enjoy programming and developing. I have been programming ever since I took up computer science in middle school in 2012. Over the years I have expanded on my skills and developed various Web and mobile applications. Scroll down below to check out some of my skills!
            </p>
        </div>
    </motion.div>

  )
}

export default About