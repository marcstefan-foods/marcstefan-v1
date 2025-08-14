import React from 'react'
import HeroSection from '../components/Catering/HeroSection'
import OurCatering from '../components/Catering/OurCatering'
import CateringService from '../components/Catering/CateringService'
import HowitWorks from '../components/Catering/HowitWorks'
import Reviews from '../components/Catering/Review'
import ContactUs from '../components/Catering/ContactUs'

const Catering = () => {
  return (
    <div>
        <HeroSection />
        <OurCatering />
        <CateringService />
        <HowitWorks />
        <Reviews />
        <ContactUs />
      
    </div>
  )
}

export default Catering
