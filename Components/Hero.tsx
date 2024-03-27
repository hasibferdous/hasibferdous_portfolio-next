import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words:[
            "Hello! This is",
            "H. M. Hasib Ferdous",
            "Web Developer",
        ],
        loop:true,
        delaySpeed:2000,
    });
    // const [text1, count1] = useTypewriter({
    //     words:[
    //         "Hello! This is",
    //     ],
    //     loop:true,
    //     delaySpeed:12000,
    // });
    const [text2, count2] = useTypewriter({
        words:[            
            "H. M. Hasib Ferdous",           
        ],
        loop:true,
        delaySpeed:2000,
    });
    const [text3, count3] = useTypewriter({
        words:[
            "Web Developer",
        ],
        loop:true,
        delaySpeed:2000,
    });

  return (
    <div className='pt-18 pb-24 h-screen xl:item-center w-screen p-24 font-bold font-serif lg:flex lg:flex-row items-start justify-between'>
        <div className='w-96'>
        <div className='mb-11 h-24'>
        <h3 className='lg:text-2xl pb-3'>
            <span>Hello! This is</span>
            {/* <Cursor cursorColor='red'/> */}
        </h3>
        <h1 className='lg:text-4xl pb-2'>
            {text2}
            {/* <Cursor cursorColor='red'/> */}
        </h1>
        <h2 className='lg:text-3xl pb-4 mb-5'>
            <span>{text3}</span>
            {/* <Cursor cursorColor='red'/> */}
        </h2>
        </div>
        <div className='-ml-4'>
            <button className="text-white px-7 p-3 bg-black border-lime-100 mt-3 m-2 font-bold rounded-full hover:bg-indigo-700 shadow-lg">
                  <Link href="https://drive.google.com/file/d/1z-tLTjO_MOaVV_ElyiwSMsKZnadSFSWe/view?usp=sharing">
                    Resume
                  </Link>
            </button>
            <button className="text-white px-4 p-3 bg-black border-lime-100 mt-3 font-bold rounded-full hover:bg-indigo-700 shadow-lg">
                  <Link href="#contact">
                    Contact Me
                  </Link>
            </button>

        </div>
        </div>

        <div>
            <BackgroundCircles></BackgroundCircles>
            <img
                className='relative rounded-full h-96 w-96 mr-32 object-cover opacity-95 shadow-2xl'
                src='https://i.ibb.co/5hg40Hq/g.jpg'
                alt='me'
                />
        </div>
    </div>
  )
}