import React from "react";
import HeroSection from "../components/LandingPage/HeroSection";
import AboutSection from "../components/LandingPage/AboutSection";
import Offers from "../components/Offers/Offers";
import BackgroundBanner from "../components/LandingPage/BackgroundBanner";
import FeaturedRooms from "../components/LandingPage/FeaturedRooms";
import Reservations from "../components/LandingPage/Reservations";
import ImageGrid from "../components/LandingPage/ImageGrid";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
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
      <Offers />
      <BackgroundBanner />
      <AboutSection
        images={[
          "/assets/img/about/1.png",
          "/assets/img/about/2.png",
        ]}
        title="We Serve Fresh and Delicious Food"
        subtitle="Delicious Food"
        description="We provide the perfect blend of comfort, elegance, and exclusivity, making our rooms truly special. Our rooms are designed with the latest amenities, and our staff are committed to creating a welcoming and enjoyable stay for our guests."
        buttonText="Book Now"
        reverse={false}
      />
      <FeaturedRooms/>
      <Reservations/>
      <ImageGrid/>
    </div>
  );
};

export default LandingPage;
