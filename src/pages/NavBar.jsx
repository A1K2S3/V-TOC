import React from 'react'
import Logo from "../assets/Images/logo.svg"

const NavBar = () => {
  return (
    <header className="text-fluid-base leading-none h-[10vh] flex items-center justify-between px-4 ">
      <div className="flex items-center gap-4">
        <img src={ Logo } alt="" className='w-6' />
        <p className='uppercase text-sm'>Virtual Fashion Lab</p>
      </div>
      <p className='text-sm'>2023</p>
    </header>
  )
}

export default NavBar