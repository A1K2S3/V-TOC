import React from 'react'
import NavBar from './NavBar'
import HeroSection from '../components/HeroSection'
import MainContentSection from '../components/MainContentSection'
import CTASection from '../components/CTASection'

const HomePage = () => {
  return (
    <>
      <main>
        <div className="max-w-[1440px] mx-auto m-h-screen px-4">
          <NavBar />
          <HeroSection />
          <MainContentSection />
          <CTASection />
        </div>
      </main>
    </>
  )
}

export default HomePage