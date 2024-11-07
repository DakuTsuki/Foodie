import banner from '../../assets/Hero-Banner.png'
import React, { useState } from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaMap } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import LowerBanner from "./LowerBanner"

const Hero = () => {

  
  const bgImage = {
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
  };

  const socials = [
    <a href="#" id="facebook"><GrFacebookOption className="md:hidden"/></a>,
    <a href="#" id="instagram"><SlSocialInstagram className="md:hidden"/></a>,
    <a href="#" id="twitter"><FaXTwitter className="md:hidden"/></a>,
    <a href="#" id="map"><FaMap className="md:hidden"/> </a>,
    
  ]

  return (
    <div style={bgImage}>
      <div className="m-0 p-0 mb-0 xs:hidden">
        <div className='flex flex-col items-center justify-between basis-1 border-b-4 border-white-100 text-white'>
          <div></div>
          <div className="flex ml-5 items-center ">
            {socials.map((icon, index) => (
              <span key={index} className='ml-4 text-white font-sans'>{icon}</span>
            ))}

          </div>
      <p>133 Mulberry St, New York, NY 10013</p>
      <div></div>
        </div>
        
        <LowerBanner />
      </div>
 
    </div>
  )
}

export default Hero