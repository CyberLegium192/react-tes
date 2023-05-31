import { React, useRef } from "react";
import ReactDOM from "react-dom";
import 'tailwindcss/tailwind.css';
import { FaFacebookF } from 'react-icons/fa';

const Hero = ()=> {
  return(
    <>
      <div className='text-white p-3 h-96 flex items-center justify-center py-96'>
        <div className='text-center font-poppins'>
          <h3 className='text-gray-400 text-2xl font-bold'>UI/UX Designer</h3>
          <h3 className="text-3xl font-bold">Frontend Developer,</h3>
          <br />
          <span className='text-gray-300 text-s'>specialised in</span>
          <div className="mt-12 flex justify-evenly w-screen overflow-x-hidden">
            <div className='bg-blue-300 w-28 h-28 rounded-full flex
            justify-center items-center mt-10'>
              <a href='' className='text-4xl text-blue-500 '><FaFacebookF /></a>
            </div>
            <div className='bg-blue-300 w-28 h-28 rounded-full flex
            justify-center items-center mt-10'>
              <a href='' className='text-4xl text-blue-500 '><FaFacebookF /></a>
            </div>
            <div className='bg-blue-300 w-28 h-28 rounded-full flex
            justify-center items-center mt-10'>
              <a href='' className='text-4xl text-blue-500 '><FaFacebookF /></a>
            </div>
          </div>
          
        </div>
      </div>
    </>  
  )
}
export default Hero