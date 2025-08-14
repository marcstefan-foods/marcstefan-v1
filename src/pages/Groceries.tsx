import React from 'react'
import HeroSection from '../components/Groceries/HeroSection'
import SpecialOffers from '../components/Groceries/SpecialOffers'
import BrowseGroceries from '../components/Groceries/BrowseGroceries'
import DeliveryInfo from '../components/Groceries/DeliveryInfo'


const Groceries = () => {
  return (
    <div>
        <HeroSection />
        <SpecialOffers />
        <BrowseGroceries />
        <DeliveryInfo />
      
    </div>
  )
}

export default Groceries
