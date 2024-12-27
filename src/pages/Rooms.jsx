import React from 'react'
import Hero from '../components/ReuseableComponents/Hero'
import Offers from '../components/Offers/Offers'
import FeaturedRooms from '../components/LandingPage/FeaturedRooms'
import Reservations from '../components/LandingPage/Reservations'
import ImageGrid from '../components/LandingPage/ImageGrid'

const Rooms = () => {
  return (
    <div>
      <Hero
      backgroundImage="/assets/img/banner/bradcam2.png"
      title="Discover Our Rooms"
      />
      <Offers/>
      <FeaturedRooms/>
      <Reservations/>
      <ImageGrid/>
    </div>
  )
}

export default Rooms