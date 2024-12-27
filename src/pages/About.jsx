import React from "react";
import Hero from "../components/ReuseableComponents/Hero";
import AboutSection from "../components/LandingPage/AboutSection"
import AboutMain from "../components/About/AboutMain";
import Reservations from '../components/LandingPage/Reservations'
import ImageGrid from '../components/LandingPage/ImageGrid'

const About = () => {
  return (
    <div>
      <Hero
        backgroundImage="/assets/img/banner/bradcam.png"
        title="About Montana"
      />
      <AboutSection
        images={[
          "/assets/img/about/about_1.png",
          "/assets/img/about/about_2.png",
        ]}
        title="Discover our unique luxury hotel"
        subtitle="About Us"
        description="We provide the perfect blend of comfort, elegance, and exclusivity, making our rooms truly special. Our rooms are designed with the latest amenities, and our staff are committed to creating a welcoming and enjoyable stay for our guests."
        buttonText="Book Now"
        reverse={true}
      />
      <AboutMain/>
      <Reservations/>
      <ImageGrid/>
    </div>
  );
};

export default About;
