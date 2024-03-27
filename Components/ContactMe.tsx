import React from 'react'
import {PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}
type Props = {}

export default function ContactMe({}: Props) {
    const {register, handleSubmit} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:hasibferdous.ict@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email}`
    };
  return (
    <div className='min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center text-white'>
        <h3 className='absolute top-24 uppercase tracking-[20px] font-bold text-3xl'>Contact</h3>
        
        <div>
            <h4 className='text-2xl font-semibold text-center mt-56 mb-11'>I have got just what you need.{""}
            <span className='decoration-blue-400 underline'>Let us Talk !</span></h4>
        
            <div className='space-y-6'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-slate-900 h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>+8801733779935</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-slate-900 h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>hasibferdous.ict@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center mb-11'>
                    <MapPinIcon className='text-slate-900 h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>Dhaka,Bangladesh</p>
                </div>
            </div>

            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col space-y-2 w-fit mx-auto mt-11 mb-24'>
                <div className='flex space-x-2'>
                    <input {...register("name")} placeholder='Name' className='contactInput' type="text" />
                    <input {...register("email")} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input {...register("subject")} placeholder='Subject' className='contactInput' type="text" />

                <textarea {...register("message")}  placeholder='Message' className='contactInput' />
                <button  className='bg-slate-900 py-5 px-10 rounded-md text-indigo-100 font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}