import React from 'react'
import HeroSection from '../components/LandingPage/HeroSection'
import CategoriesSection from '../components/LandingPage/Categories'
import CateringServicesSection from '../components/LandingPage/CateringServices'
import FeaturedProductsSection from '../components/LandingPage/FeaturedProducts'

const LandingPage = () => {
  return (
    <div>
    <HeroSection />
    <CategoriesSection />
    <FeaturedProductsSection />
    <CateringServicesSection />
  </div>
  )
}

export default LandingPage
