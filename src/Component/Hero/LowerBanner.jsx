import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import App from '../../App';
import { FaCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";

const LowerBanner = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const menuToggle = () => {
    setMenuVisible(prevState => !prevState);
  };

  return (
    <>
      <header className='hidden'>
        <div className='mt-10 none'>
          <ul className='flex text-white justify-center items-center '>
            <li><a href='#' className='ml-10 tracking-widest uppercase font-normal hover:text-orange'>Home</a></li>
            <li><a href='#' className='ml-10 tracking-widest uppercase font-normal hover:text-orange'>Blog</a></li>
            <li><a href='#' className='ml-10 tracking-widest uppercase font-normal hover:text-orange'>Gallery</a></li>
            <li><a href='#' className='ml-10 tracking-widest uppercase font-normal hover:text-orange'>Contact Us</a></li>
          </ul>
          <a href={App} className="flex justify-center items-center cursor-pointer mr-5">
            <img src={logo} alt="logo" className='w-auto h-[140px] animate-spinSlow' />
          </a>
        </div>
      </header>

      <header className='flex lg:hidden items-center justify-between bg-gray-800 text-white p-4'>
        <button className="text-2xl focus:outline-none" onClick={menuToggle}>
          <GiHamburgerMenu />
        </button>

        {/* Menu */}
        <ul className={`absolute left-0 w-full bg-black text-white p-4 transition-transform duration-300 ease-in-out transform ${menuVisible ? 'translate-y-[-8px]' : '-translate-y-[110%]'}`}>
          <button className="absolute top-2 right-2 text-white" onClick={menuToggle}>
            <IoIosCloseCircleOutline className='text-[32px]'/>
          </button>
          <li><a href="" className='block hover:text-gray-400'>Home</a></li>
          <li><a href="" className='block hover:text-gray-400'>Blog</a></li>
          <li><a href="" className='block hover:text-gray-400'>Gallery</a></li>
          <li><a href="" className='block hover:text-gray-400'>Contact Us</a></li>
        </ul>
      </header>

      <main className='text-white text-center mt-14 tracking-widest font-medium uppercase text-[50px]'>
        <h4 className='text-[18px] mb-3'>Welcome To</h4>
        <h2>Osteria Barocca</h2>
        <h4 className='text-[18px]'>Little Italy</h4>
      </main>

    
    </>
  );
}

export default LowerBanner;
