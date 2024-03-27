import React from 'react'
import {motion} from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <div className='pt-72 flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-white text-3xl font-bold'>About</h3>
    <motion.img
    initial={{
        x: -200,
        opacity:0,
    }}
    transition={{
        duration: 1.2,
    }}
    whileInView={{opacity: 1, x: 0 }}
    viewport={{once:true}}
    src='https://i.ibb.co/zZhgG0Y/1.jpg'
    className='lg:pb-32 flex-shrink-0 w-56  rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[600px] hover:xl:w-[400px] hover:h-[650px]'
    >
    </motion.img>
    <div className='space-y-10 px-0 md:px-10 md:my-32 top-1'>
        <h4 className='text-4xl font-semibold'>
            Here is a {" "}
            <span className='underline decoration-indigo-500'>little</span>{" "}
            background
        </h4>
    <p className='text-xl text-white mb-24'>This is H. M. Hasib Ferdous. I am from Bogura, Bangladesh. I completed my B.Sc. (Engineering) in Information and Communication Engineering (ICE) from Pabna University of Science and Technology. Currently, I am doing an M.Sc. (Engineering) in the same department. I enjoy working on code and developing beautiful websites. I currently use React JS, Node JS, Express JS, MongoDB, Firebase Authentication, Bootstrap, Tailwind CSS, and vanilla CSS for front-end and back-end web development. I have already completed a few projects, and I will continue to work on more in the future. I take my work as a Web Developer seriously, which means I always ensure my skills are kept up to date within this rapidly changing industry.</p>
    </div>
   
    </div>
  )
}