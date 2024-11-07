import React from 'react'
import SearedOcto from '../../assets/Seared-Octopus-rotated.jpg'
import TableDrink from '../../assets/Table-Drink.jpg' 
import FoodImg from '../../assets/foodimg.jpg'

const About = () => {

  return (

    <>
    <div className='py-32'>
      <div className='w-[1280px] max-w-[100%] my-0 mx-auto' >
        <div className='mb-20 mx-auto text-center'>
          <h2 className='text-center text-black font-sans mb-[24px] sm:text-[64.9px] text-[40px] font-thin animate-fadeInUpSlight'>Italian Cuisine At Its Finest</h2>
          <h5 className='text-[18px] leading-[1.1] tracking-[2px] font-medium uppercase mb-6 font-serif text-Brown'> Buon Appetito</h5>
          <div className='text-[14px] font-normal leading-[1.6] tracking-[0.1px] text-light-black relative max-w-[420px] my-0 mx-auto '>
            <p className='text-center text-[100%]'>Experience the essence of Italy at Osteria Barocca - where tradition meets culinary innovation.</p>
          </div>
        </div>
        <div className='mb-20 mx-auto text-center animate-zoomIn'>
          <div className='relative leading-[1.6] tracking-[0.1px]'> 
            <div className='h-auto py-[12.4%] px-[20%] box-border w-[100%]'>
              <div className="translate-x-[0%] translate-y-[-30%]">
              <img src={SearedOcto} alt="" className='shadow-xl animate-zoomIn z-[3] max-w-[100%] h-auto'/>
              </div>
            </div>
            <div className='absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] h-auto py-[12.4%] px-[20%] box-border w-[100%]'>
              <div className="translate-x-[20%] translate-y-[30%]">
                <img src={TableDrink} alt="" className='shadow-xl animate-zoomIn z-[1] max-w-[100%] h-auto'/>
              </div>
            </div>
            <div className='absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] h-auto py-[12.4%] px-[20%] box-border w-[100%]'>
              <div className="translate-x-[-20%] translate-y-[0%]">
                <img src={FoodImg} alt="" className="max-w-[100%] h-auto " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default About
