import React from 'react'
import logo from '../../assets/logo.png'
import App from '../../App'
import { FaCircle } from "react-icons/fa";

// // React Server Components
// import * as motion from "framer-motion/client"
const LowerBanner = () => {
  return (
    <>
    <header>
      <div className='mt-10'>
        <ul className='flex text-white justify-center items-center '>
          <li><a href='#' className='ml-10 tracking-widest uppercase font-normal hover:text-orange '>Home</a></li>
          <li><a href='#' className='ml-10 tracking-widest uppercase font-normal hover:text-orange '>Blog</a></li>
          <li><a href='#' className='ml-10 tracking-widest uppercase font-normal hover:text-orange '>Gallery</a></li>
          <li><a href='#' className='ml-10 tracking-widest uppercase font-normal hover:text-orange '>Contact Us</a></li>
        </ul>
       <a href={App} className="flex justify-center items-center cursor-pointer mr-5"> <img src={logo} alt="logo" className='w-auto 
       h-[140px] animate-spinSlow'/></a>
      </div>
    </header>
    <main className='text-white text-center mt-14 tracking-widest font-medium uppercase text-[50px]'>
      <h4 className='text-[18px] mb-3'>Welcome To</h4>
      <h2 ClassName=''>Osteria Barocca</h2>
      <h4 className='text-[18px]'>Little Italy</h4>
    </main>
    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-[2px] border-secondary flex justify-center items-start p-2 border-white'>
          <FaCircle className='mt-3 text-white font-thin animate-slider'/>
          </div>
        </a>
      </div>
    </>
  )
}

export default LowerBanner