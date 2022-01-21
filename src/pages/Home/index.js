import React, {useState} from 'react'
import HeroSection from '../../components/HeroSection'
import IntroSection from '../../components/IntroSection'
import HobbySection from '../../components/HobbySection'
import Information from '../../components/Information'

const Home = () => {

  return (
    <div>

      <HeroSection />
      <IntroSection />
      <HobbySection />
      <Information />
    </div>
  )
}

export default Home
