import React from 'react'
import Hero from './Hero'
import FlashSale from './FlashSale'
import Category from './Category'
import BestSelling from './BestSelling'
import Banner from './Banner'

const Homepage = () => {
  return (
    <>
     <Hero/>
     <FlashSale/>
     <Category/>
     <BestSelling/>
     <Banner/>
    </>
  )
}

export default Homepage