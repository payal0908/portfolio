import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
function emailButton() {
    navigator.clipboard.writeText('payal@kbcapital.in')
    toast.success("Email copied!", {
        position: toast.POSITION.TOP_CENTER
    });
    }
  return (
    <div className='text-center p-10'>
        <motion.h2 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        
        className='text-3xl sm:text-5xl py-2 text-white font-medium md:text-6xl'>Payal Khandelwal</motion.h2>
        <motion.h3 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        className='text-xl sm:text-2xl py-2 text-white md:text-3xl tracking-widest'>Software Engineer</motion.h3>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className='text-5xl flex justify-center gap-16 py-5 text-white'>
            <a href="https://github.com/payal0908" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className='w-[35px] sm:w-[50px]' color='white'/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/khandelwalpayal/">
              <AiFillLinkedin className='w-[35px] sm:w-[50px]' color='white'/>
            </a>
            <button onClick={emailButton}>
              <AiFillMail className='w-[35px] sm:w-[50px]' color='white'/>
            </button>
            
        </motion.div>
        <motion.div
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        >
          <Link href="#about">
            <button className='hero-btn'>About</button>
          </Link>
          <Link href="#skills">
            <button className='hero-btn'>Skills</button>
          </Link>
          <Link href="#workexp">
            <button className='hero-btn'>Experience</button>
          </Link>
          <Link href="#projects">
            <button className='hero-btn'>Projects</button>
          </Link>
        </motion.div>
    </div>
  )
}

export default Hero