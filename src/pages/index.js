import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntroSection'
import MobileNav from '../components/MobileNav'
import HobbySection from '../components/HobbySection'
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("isOpen: "+ isOpen);
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <HeroSection />
      <IntroSection />
      <HobbySection />
      <Footer />
    </div>
  )
}

export default Home
