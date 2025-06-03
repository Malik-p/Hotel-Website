import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonials from '../components/Testimonials'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import RecommendedHotels from '../components/RecommendedHotels'

const Home = () => {
  return (
    <div>

      <Hero />
      <RecommendedHotels />
      <FeatureDestination />
      <ExclusiveOffers />
      <Testimonials />
      <NewsLetter />

    </div>
  )
}

export default Home
