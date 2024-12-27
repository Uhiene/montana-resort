import React from "react";

const BackgroundBanner = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/img/video/video.png')` }}
    >
      <div className="bg-black bg-opacity-55 h-full w-full flex items-center justify-center">
        <div className="md:w-1/2 text-center text-white">
          <p className="text-sm font-light">Montana Sea View</p>
          <h2 className="text-3xl md:text-5xl">Relax and Enjoy your Vacation</h2>
        </div>
      </div>
    </div>
  );
};

export default BackgroundBanner;
