import React from 'react'
import { motion } from "framer-motion";
type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8, 0.1,1.0],
        borderRadius:["20%","20%","50%","80%","20%"],
    }}
    transition={{
        duration: 2.5,
    }}
    
    className='relative flex justify-center items-center mr-40'>
        <div className='absolute border border-[#d5eedd] rounded-full h-[260px] w-[260px] mt-96 mr-96 animate-ping opacity-40'></div>
       <div className='absolute border border-[#c7a7b4] rounded-full h-[160px] w-[160px] mt-96 mr-96 animate-ping opacity-40'></div>
        <div className='absolute border border-[#fafaf9] rounded-full h-[100px] w-[100px] mt-96 mr-96 animate-ping opacity-40'></div>
        <div className='absolute border border-[#e5e7e4] rounded-full h-[530px] w-[560px] mt-96 mr-96 animate-pulse opacity-20'></div>

    </motion.div>
  )
}

