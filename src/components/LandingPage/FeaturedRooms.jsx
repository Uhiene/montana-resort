import React from "react";
import Header from "../ReuseableComponents/Header";
import { motion } from "framer-motion";

const FeaturedRooms = () => {
  const images = [
    {
      src: "/assets/img/rooms/1.png",
      header: "Superior Room",
      text: "From $250/night",
    },
    {
      src: "/assets/img/rooms/2.png",
      header: "Deluxe Room",
      text: "From $250/night",
    },
    {
      src: "/assets/img/rooms/3.png",
      header: "Signature Room",
      text: "From $250/night",
    },
    {
      src: "/assets/img/rooms/4.png",
      header: "Couple Room",
      text: "From $250/night",
    },
  ];
  return (
    <div className="pt-10 md:pt-20">
      <Header subtitle="Featured Rooms" title="Choose a Better Room" />
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 md:space-y-0">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-56 md:h-96 group"
            >
              <img
                src={image.src}
                alt={image.header}
                className="h-full min-w-full object-cover transition-all duration-300"
              />
              <div className="absolute bg-black bg-opacity-40 group-hover:opacity-70 transition-opacity duration-300 inset-0 flex flex-col justify-end text-white p-7 md:p-14">
                <p className="mt-2 text-xs font-light">{image.text}</p>
                <h3 className="text-2xl md:text-4xl font-medium">{image.header}</h3>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
