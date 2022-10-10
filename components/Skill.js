import React from 'react'
import { AnimatePresence, AnimateSharedLayout, motion, logo } from 'framer-motion'
import { useState } from 'react'
import 'antd/dist/antd.css';
import { Progress } from 'antd';

function ExpandedCard({ children, onCollapse }) {
    return (
        <motion.div
          className=" text-center border border-slate-200 shadow-lg flex justify-center bg-white rounded-2xl relative z-20" style={{display: 'flex', justifySelf:'center', alignSelf:'center',  width: '10rem', height: '10rem', boxSizing: 'border-box', overflow: 'hidden'}}
          layoutId="expandable-card"
          onClick={onCollapse}
          
          animate={{
            x: 0,
            y: 0,
            rotate: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300, damping: 24,
            ease: "easeInOut",
            duration: 0.5
          }}
        >
          {children}
          {/* <motion.p
            className="text-center text-sm leading"
            onClick={onCollapse}
            transition={{ delay: 0.3 }}
            initial={{ opacity: 0, top: "8rem" }}
            animate={{ opacity: 1, top: "3rem" , scale: 1}}
        >
        Today is clear
      </motion.p> */}
        </motion.div>
        
    );
  }

  function CompactCard({ children, onExpand, disabled }) {
    return (
      <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      className='border border-slate-100 dark:border-slate-200 shadow-lg p-4 flex justify-center dark:bg-white/40 bg-gray-100 rounded-2xl relative cursor-pointer'
        layoutId="expandable-card"
        onClick={disabled ? undefined : onExpand}
      >
        {children}
      </motion.div>
    );
  }

const Skill = ({day, onCollapse, onExpand, disabled, logo, prof}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const collapseDate = () => {
    setIsExpanded(false);
    onCollapse();
  };

  const expandDate = () => {
    setIsExpanded(true);
    onExpand();
  };
  return (
    // <div className='relative w-28 h-28 md:w-40 md:h-40' style={{borderWidth: 2, borderColor: 'black'}}>
    <div className='relative w-[70px] h-[70px] sm:w-[80px] sm-h-[80px] lg:mb-10  mb-5 mr-5'>
    <AnimateSharedLayout>
        {isExpanded ? (
            <ExpandedCard onCollapse={collapseDate} day={day} prof={prof}>
                <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ opacity: disabled ? 0.2 : 1 }}
                 className='flex flex-col justify-center'>
                
                {/* <img style={{height: '90px', objectFit: 'contain'}} src='/1.PNG'/> */}
                <Progress
                    type="circle"
                    width='90px'
                    strokeWidth = {10}
                    strokeColor={{
                        '0%': '#d5308b',
                        '100%': '#48aff0',
                    }}
                    percent={prof}
                />
                <motion.h1
                    className="mt-3 tracking-widest uppercase text-center"
                    layoutId="title"
                    
                    >
                    {day}
                    
                </motion.h1>
                </motion.div>
          </ExpandedCard>
        ) : (
            <CompactCard onExpand={expandDate} disabled={disabled} day={day}>
                
                <img className='md:h-[50px] md:object-contain lg:h-[50px] lg:object-contain sm:h-[50px] sm:object-contain h-[40px] object-contain' src={logo}/>
                
        </CompactCard>
        )}
        
    {/* <motion.div 
    layout
    onClick={()=>setIsOpen(!isOpen)}
    className='border border-slate-200 shadow-lg p-8 flex justify-center bg-white/40 rounded-2xl'>
       <motion.h3 layout>Skill</motion.h3>
        {isOpen && (
            <motion.div className='p-2'>
                
            </motion.div>
        )}
    </motion.div> */}
    
    </AnimateSharedLayout>
    </div>
  )
}

export default Skill