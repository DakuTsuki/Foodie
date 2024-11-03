import React from 'react'
import lowerBackground from '../../assets/Drop-Banner.png'
import minorImg1 from '../../assets/minorImage.webp'
import lowerBackground2 from '../../assets/background-4.jpg'
import minorImg2 from '../../assets/minorImage2.webp'


const Experience = () => {
  const bgImage2 = {
    backgroundImage: `url(${lowerBackground2})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    // backgroundAttachment: 'fixed'
  }
  const bgImage = {
    backgroundImage: `url(${lowerBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    // backgroundAttachment: 'fixed'
  };
  const minorImage1 = {
    backgroundImage: `url(${minorImg1})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxHeight: '100%', 
    height: '100vh',
    width: '100%'
    
  }
// For the screensize image //
  const minorImag1 = {
    backgroundImage: `url(${minorImg1})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxHeight: '100%', 
    height: '76vh',
    width: '100%',
  }

  const minorImage2 = {
    backgroundImage: `url(${minorImg2})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxHeight: '100%', 
    height: '100vh',
    width: '100%'
    
  }
// For the screensize image //
  const minorImag2 = {
    backgroundImage: `url(${minorImg2})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxHeight: '100%', 
    height: '76vh',
    // width: '100%',
  }
  return (
    <>
    <div style={bgImage}>
 <div className='flex justify-center'>
 <div className="max-w-[1040px] w-[100%] md:w-[80%]  relative z-1 inline-block text-center p-[76px_56px_62px] box-border m-[128px]    bg-light-white ">
        <div className="relative">
          <h2 className='text-black mb-6 text-[48px] tracking-[-1.4px] leading-[1.1] font-light'>Experience</h2>
          <h3 className='mb-6 text-[18px] tracking-[2px] leading-[1.1] font-normal uppercase relative font-sans inline-block text-Brown'>Memorable</h3>
        </div>
        <div className="max-w-[420px] m-[0_auto] box-border text-lighter-black">
        <p className="mb-6 text-lighter-black text-center">Reserve your table at Osteria Barocca and indulge in an unforgettable Italian dining experience.</p>
      </div>
      <a href="" className='outline-none decoration-transparent text-[#444444] m-[7px_0_24px_0] p-[20px_24px_20px] leading-[2px] font-semibold text-[19px] bg-transparent relative border-solid border-black border-2 cursor-pointer inline-block rounded-none z-1 overflow-visible min-w-[150px] shadow-none hover:text-white hover:bg-black ease-in-out duration-300'>Reserve</a>

      </div>
 </div>
     </div>
     <div className='hidden relative tablet:flex'>
        <div className="h-[100%] right-0 absolute top-0 w-[50%] overflow-hidden ">
          <div style={minorImage1} className='left-0 absolute top-0 w-[100%]'></div>
        </div>
      <div className=' w-[50%] bg-black'>
        <div className='text-center p-[15%]'>
          <div className='relative'>
            <h2 className='mb-6 text-white text-[24px] tracking-[-1.4px] leading-[1.1] font-extralight animate-fadeInUpSlight'>Exotic Drinks</h2>
            <h3 className='text-[18px] leading-[1.1] tracking-[2px] font-medium uppercase text-Brown animate-fadeInUpSlight'>Drinks Menu</h3>
          </div>
          <div className='text-white mb-12 max-w-[420px] box-border m-[0_auto]'>
            <p className='mb-6 animate-fadeInUpSlight'>
            Sip on signature cocktails and explore our curated selection of elegant wines at Osteria Barocca, paired with only the best selection of Italian Fine Dining Cuisine.
            </p>
          </div>
          <a href="" className='outline-none decoration-transparent text-white border-white border-solid border-2 mb-[8px] hover:text-black hover:bg-white duration-300 p-[12px_24px_12px]'>View Menu</a>
        </div>
      </div>
     </div>
     <div className='flex flex-col relative tablet:hidden'>
        <div className="h-[100%] w-[100%] overflow-hidden">
          <div style={minorImag1} className='w-[105vw]'></div>
        </div>
      <div className=' w-[100%] bg-black'>
        <div className='text-center p-[15%]'>
          <div className='relative'>
            <h2 className='mb-6 text-white text-[24px] tracking-[-1.4px] leading-[1.1] font-extralight animate-fadeInUpSlight'>Exotic Drinks</h2>
            <h3 className='text-[18px] leading-[1.1] tracking-[2px] font-medium uppercase text-Brown animate-fadeInUpSlight'>Drinks Menu</h3>
          </div>
          <div className='text-white mb-12 max-w-[420px] box-border m-[0_auto]'>
            <p className='mb-6 animate-fadeInUpSlight'>
            Sip on signature cocktails and explore our curated selection of elegant wines at Osteria Barocca, paired with only the best selection of Italian Fine Dining Cuisine.
            </p>
          </div>
          <a href="" className='outline-none decoration-transparent text-white border-white border-solid border-2 mb-[8px] hover:text-black hover:bg-white duration-300 p-[12px_24px_12px]'>View Menu</a>
        </div>
      </div>
     </div>
     <div style={bgImage2}>
      <div className='w-[1280px] max-w-[100%] m-[0_auto] py-[128px] '>
      <div className='hidden relative flex-row-reverse tablet:flex '>
      <div className=' w-[50%] bg-black'>
        <div className='text-center p-[15%]'>
          <div className='relative'>
            <h2 className='mb-6 text-white text-[24px] tracking-[-1.4px] leading-[1.1] font-extralight animate-fadeInUpSlight'>Exotic Drinks</h2>
            <h3 className='text-[18px] leading-[1.1] tracking-[2px] font-medium uppercase text-Brown animate-fadeInUpSlight'>Drinks Menu</h3>
          </div>
          <div className='text-white mb-12 max-w-[420px] box-border m-[0_auto]'>
            <p className='mb-6 animate-fadeInUpSlight'>
            Sip on signature cocktails and explore our curated selection of elegant wines at Osteria Barocca, paired with only the best selection of Italian Fine Dining Cuisine.
            </p>
          </div>
          <a href="" className='outline-none decoration-transparent text-white border-white border-solid border-2 mb-[8px] hover:text-black hover:bg-white duration-300 p-[12px_24px_12px]'>View Menu</a>
        </div>
      </div>
        <div className="h-[100%] left-0 absolute top-0 w-[50%] overflow-hidden ">
          <div style={minorImage2} className='left-0 absolute top-0 w-[100%]'></div>
        </div>
      
     </div>
     <div className='flex flex-col relative tablet:hidden px-[10%]'>
        <div className="h-[100%] w-[50%]">
          <div style={minorImag2} className='w-[77vw]'></div>
        </div>
      <div className=' w-[100%] bg-black'>
        <div className='text-center p-[15%]'>
          <div className='relative'>
            <h2 className='mb-6 text-white text-[24px] tracking-[-1.4px] leading-[1.1] font-extralight animate-fadeInUpSlight'>Exotic Drinks</h2>
            <h3 className='text-[18px] leading-[1.1] tracking-[2px] font-medium uppercase text-Brown animate-fadeInUpSlight'>Drinks Menu</h3>
          </div>
          <div className='text-white mb-12 max-w-[420px] box-border m-[0_auto]'>
            <p className='mb-6 animate-fadeInUpSlight'>
            Sip on signature cocktails and explore our curated selection of elegant wines at Osteria Barocca, paired with only the best selection of Italian Fine Dining Cuisine.
            </p>
          </div>
          <a href="" className='outline-none decoration-transparent text-white border-white border-solid border-2 mb-[8px] hover:text-black hover:bg-white duration-300 p-[12px_24px_12px]'>View Menu</a>
        </div>
      </div>
     </div>
      </div>
     </div>
    </>
  )
}

export default Experience