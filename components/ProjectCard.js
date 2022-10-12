import React from 'react'
import ImageSlider from './ImageSlider'



const ProjectCard = ({name, images, desc, tech, link}) => {
  return (
    <article className='flex flex-col rounded-lg items-center flex-shrink-0 mt-20 w-[200px] sm:w-[300px] md:w-[400px] xl:w-[600px] snap-center bg-[#ffffff]/70 shadow-lg hover:bg-white transition-all duration-300'>
        <div className='w-[200px] h-[200px] md:w-[400px] md:h-[300px]' style={{margin:'0 auto'}}>
            <ImageSlider slides={images}/>
        </div>

        <a className='bg-[#f7f3e6]  w-ful h-full cursor-pointer transition-colors duration-100 hover:bg-white' target="_blank" rel="noopener noreferrer" href={link} style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            <p className='mt-5 font-light uppercase tracking-widest text-black text-[10px] sm:text-[14px]'>{name}</p>
            <p className='font-thin p-2 text-black text-[10px] sm:text-[14px]'>{desc}</p>
            <p className='font-medium text-black text-[10px] sm:text-[14px]'>Technologies used: </p>
            <p className='font-thin text-black text-[10px] sm:text-[14px] mb-4'>{tech}</p>
        </a>
    </article>
  )
}

export default ProjectCard