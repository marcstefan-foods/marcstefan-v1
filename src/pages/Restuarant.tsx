import React from 'react'
import HeroSection from '../components/Restuarant/HeroSection'
import SpecialOffers from '../components/Restuarant/SpecialOffers'
import OurMenu from '../components/Restuarant/OurMenu'
import RestuarantInfo from '../components/Restuarant/RestuarantInfo'

const Restuarant = () => {
  return (
    <div>
      <HeroSection />
      <SpecialOffers />
      <OurMenu />
      <RestuarantInfo />
      
      {/* Additional sections can be added here, such as Reviews, Contact, etc. */}
      {/* Additional sections can be added here, such as Menu, Reviews, etc. */}
    </div>
  )
}

export default Restuarant
