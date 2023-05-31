import { React, useRef } from "react";
import ReactDOM from "react-dom";
import 'tailwindcss/tailwind.css';
import './nav.css'
import { BiMenu } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { BsFillSunFill } from 'react-icons/bs';
import DropDown from './dropdown/dropdown.jsx'

const Navbar = () => {
  const menu = useRef()
  const backmenu = useRef()
  const menuClick = () => {
    menu.current.classList.toggle('active')
    backmenu.current.classList.toggle('active')
  }
  
  return(
    <>
      <nav className='text-white h-12 px-2 flex justify-between
      items-center select-none overflow-x-hidden relative bg-red-600'>
        <div>
        <button className='text-3xl cursor-pointer' onClick={menuClick}>
          <BiMenu />
        </button>
        </div>
        <div className='font-poppins cursor-pointer'>
          <a href='' className='text-xs spacing'>Login|Register</a>
        </div>
        <h5 className='absolute font-bold text-lg translate-x-52'>JKT48</h5>
      </nav>
      
      <div className='h-full bg-black opacity-40 w-full top-0 fixed backmenu' ref={backmenu}></div>
        <div className='fixed text-white top-0 left-0 w-72 h-screen bg-white transition-transform duration-500 linknav' ref={menu}>
          
          <div className='flex justify-end mb-3 bg-red-600 h-12 px-2'>
            <button className='text-white text-2xl cursor-pointer'
            onClick={menuClick}><GrClose /></button>
          </div>
          <div className='text-black p-3 font-semibold uppercase font-poppins
          text-sm'>
            <ul>
              <li className='mb-3'>
                <a href=''>NEWS</a>
              </li>
              <li className='mb-3'>
                <a href=''>schedule</a>
              </li>
              <li className='mb-3'>
                <a href=''>member</a>
              </li>
              <li className='mb-2'>
                <DropDown />
              </li>
              <li className='mb-3'>
                <a href=''>fanclub</a>
              </li>
            </ul>
          
          </div>
          
        </div>
      
    </>  
  )
  
  
}

export default Navbar