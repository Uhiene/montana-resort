import React from "react";

const Reservations = () => {
  return (
    <div className="flex justify-center items-center py-10 md:py-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-5/6 md:w-4/5 border border-gray-400 p-6 md:p-12 gap-4 md:gap-0">
        <h2 className="text-gray-800 text-xl md:text-3xl">For Reservation 0r Query?</h2>
        <button className="text-white h-fit w-52 px-6 py-3 bg-sky-400 border text-sm rounded-full font-light hover:bg-white hover:text-sky-500 hover:border-sky-500 transition-colors duration-300">
          +234 567 890
        </button>
      </div>
    </div>
  );
};

export default Reservations;
