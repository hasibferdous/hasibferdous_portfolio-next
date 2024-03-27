import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';
import { Social } from '@/typings';
type Props = {
  socials: Social[];
};

export default function Header({socials}: Props) {
    const [navbar, setNavbar] = useState(false);
  return (
    <header className='bg-slate-900  p-5 flex items-start justify-between lg:px-24 z-20 xl:item-center w-screen'>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5 
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration:1.5,
        }}

         className='flex flex-row items-center  '>
            {/* social icons */}

            {socials.map((social)=>(
            <SocialIcon 
            key={social._id}
            url={social.url}
            fgColor="white"
            bgColor='transparent'
            className='hover:bg-indigo-600 hover:rounded-full'
            />
            ))}           
        </motion.div>
        <div>

      <nav className="w-full shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-white focus:border-white focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white px-5 p-3 bg-black border-lime-100 mt-3 m-3 font-bold rounded-full hover:bg-indigo-700 shadow-lg">
                  <Link href="#about">
                    About
                  </Link>
                </li>
                <li className="text-white px-7 p-3 bg-black border-lime-100 mt-3 m-3 font-bold rounded-full hover:bg-indigo-700 shadow-lg">
                  <Link href="#skills">
                    Skills
                  </Link>
                </li>
                <li className="text-white px-4 p-3 bg-black border-lime-100 mt-3 m-3 font-bold rounded-full hover:bg-indigo-700 shadow-lg">
                  <Link href="#projects">
                    Projects
                  </Link>
                </li>
                <li className="text-white px-4 p-3 bg-black border-lime-100 mt-3 m-3 font-bold rounded-full hover:bg-indigo-700 shadow-lg">
                  <Link href="#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5 
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration:1.5,
        }}

        
        className='lg:flex lg:flex-row lg:items-center hidden text-gray-300 cursor-pointer'>
            <SocialIcon 
                className='cursor-pointer hover:text-indigo-600'
                network='email'
                fgColor="white"
                bgColor='transparent'
            />
         <a className='uppercase hidden md:inline-flex text-sm hover:text-indigo-600 text-gray-200 font-bold animate-pulse' href="https://t.me/HasibFerdous">Get In Touch</a>
        </motion.div>
    </header>    
  )
}