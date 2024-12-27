import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const ImageGrid = () => {
  const images = [
    "/assets/img/instragram/1.png",
    "/assets/img/instragram/2.png",
    "/assets/img/instragram/3.png",
    "/assets/img/instragram/4.png",
    "/assets/img/instragram/5.png",
  ];
  return (
    <div className="flex flex-col md:flex-row">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative group overflow-hidden h-56 md:h-64 w-full md:w-80"
        >
          <img
            src={image}
            alt={`Instagram Image ${index + 1}`}
            className="object-cover w-full h-full"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: 1,
              transition: { duration: 0.3 },
            }}
            className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          >
            <div className="flex justify-center items-center h-full">
              <FaInstagram
                size={40}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"
              />
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
