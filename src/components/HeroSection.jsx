import React from 'react'
import model1 from '../assets/Images/model1.jpg'
import model2 from '../assets/Images/model2.jpg'
import model3 from '../assets/Images/model3.jpg'
import clothesRack from '../assets/Images/clothesRack.jpg'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
      <div className="h-[90vh]">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className='text-fluid-header leading-none uppercase font-secondary relative'>v-toc</h1>
          <div className="absolute w-[60%] h-[55%] bg-transparent border border-accent-100/50 rounded-[50%] rotate-[15deg]"></div>
          <div className="absolute w-[60%] h-[55%] bg-transparent border border-accent-100/50 rounded-[50%] -rotate-[24deg]"></div>
          <div className="absolute w-[60%] h-[55%] bg-transparent border border-accent-100/50 rounded-[50%] -rotate-[10deg]"></div>
          <p className='uppercase'>Virtual Fashion Lab</p>
        </div>
      </div>
      
        
        {/* <div className="">
          <Link to={'/SignUp'}>
            <div className="p-4 bg-white text-black">Sign Up</div>
          </Link>
        </div> */}
    </>
  )
}

export default HeroSection