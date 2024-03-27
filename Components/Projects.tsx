import React from 'react'
import {motion} from "framer-motion";
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Link from 'next/link';

type Props = {
    projects: Project[];
};

export default function Projects({projects}: Props) {
    // const projects = [1, 2, 3, 4];
  return (
    <motion.div className='relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-yellow-200/30'>
        <h3 className='absolute top-2 uppercase tracking-[20px] text-white text-3xl font-bold'>Projects</h3>
        
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden  gap-x-5 '>
            {projects.map((project, i) => (
            <div key={project._id} className=' flex-shrink-0 snap-center flex flex-row space-x-1 items-center justify-center px-20 mt-11 md:py-4'>
            <PhotoProvider>
            <PhotoView src={urlFor(project?.image).url()}>
                <motion.img
                    initial={{
                        y: -300,
                        opacity: 0,
                    }}
                    transition={{duration: 1.2}}
                    whileInView={{opacity: 1, y:0 }}
                    viewport={{once: true}}
                    src={urlFor(project?.image).url()} 
                    alt='project-image'
                    className='w-80 h-2/3 rounded-xl shadow-2xl hover:animate-pulse'
                />
            
            </PhotoView>
            </PhotoProvider> 
            {/* <p className='-top-20'>Click !</p>  */}
                <div className='space-y-5 py-7 bg-slate-800 hover:bg-indigo-500 px-0 md:px-10 w-96 h-2/3 text-white rounded-lg shadow-2xl'>
                    <h4 className='text-2xl font-semibold text-center'>
                        {/* <span>{i+1} of {projects.length}-</span> {" "}  */}
                        {project?.title}</h4>

                    <div className='grid grid-cols-4 items-center  gap-x-8 gap-y-8 justify-center '>
                        {project?.technologies.map((technology)=>(
                            <img 
                            className='h-11 w-11 hover:h-12 hover:w-12  rounded-full'
                            key={technology._id}
                            src={urlFor(technology?.image).url()}
                            alt=""
                            />
                        ))}
                    </div>
                    <button className="text-white px-7 p-3 bg-black border-lime-100 mt-1 font-bold rounded-xl hover:bg-indigo-900 shadow-lg ml-20 ">
                  <Link href={project?.linkToBuild}>
                    Live Link
                  </Link>
            </button>      
                    <p className='text-md text-center md:text-left'>{project?.summary}</p>
                </div>
            </div>
            ))}
        
        </div>


        {/* <div className='w-full absolute top-[60%] bg-stone-400 left-0 h-[500px] -skew-y-12'></div> */}
    </motion.div>
  );
}