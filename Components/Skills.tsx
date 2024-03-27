import React from 'react'
import {motion} from "framer-motion";
import { Skill as SkillType } from '@/typings';
import Skill from "./Skill";


type Props = {
  skills: SkillType[] 
};


export default function Skills({skills}: Props) {
  return (
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='pt-72 pb-72 flex flex-col relative  text-center md:text-left md:flex-row px-10  mx-auto items-center xl:space-y-0 justify-center min-h-screen xl:px-10'>
        
        <h3 className='absolute top-28 uppercase tracking-[20px] text-white text-3xl font-bold'>Skills</h3>
    
    <div className='grid grid-cols-5 gap-x-20 gap-y-11 '>
        {skills?.slice(0,skills.length/2).map((skill)=>(
          <Skill key={skill._id} skill={skill}></Skill>
        ))}

        {skills?.slice(skills.length/2, skills.length).map((skill)=>(
          <Skill key={skill._id} skill={skill} directionLeft></Skill>
        ))}


    </div>
    
    </motion.div>
  )
}