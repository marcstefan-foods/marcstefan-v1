import React from 'react'
import Header from '../components/LandingPage/Header'
import HeroSection from '../components/LandingPage/HeroSection'
import CategoriesSection from '../components/LandingPage/Categories'
import CateringServicesSection from '../components/LandingPage/CateringServices'
import FeaturedProductsSection from '../components/LandingPage/FeaturedProducts'
import Footer from '../components/LandingPage/Footer'

const LandingPage = () => {
  return (
    <div>
    <Header />
    <HeroSection />
    <CategoriesSection />
    <FeaturedProductsSection />
    <CateringServicesSection />
    <Footer />
  </div>
  )
}

export default LandingPage
