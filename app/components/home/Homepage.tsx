import React from 'react'
import Hero from './Hero'
import FlashSale from './FlashSale'
import Category from './Category'
import BestSelling from './BestSelling'
import Banner from './Banner'
import ExploreProducts from './ExploreProducts'
import NewArrival from './NewArrival'

const Homepage = () => {
  return (
    <>
     <Hero/>
     <FlashSale/>
     <Category/>
     <BestSelling/>
     <Banner/>
     <ExploreProducts/>
     <NewArrival/>
    </>
  )
}

export default Homepage