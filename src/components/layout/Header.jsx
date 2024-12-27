import logo from "/assets/img/logo.png";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import SocialIcons from "../ReuseableComponents/SocialIcons";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 w-full flex justify-between items-center transition-colors duration-300 p-4 md:px-10  ${
        isScrolled
          ? "bg-black text-white shadow-lg"
          : "bg-transparent text-black"
      }`}
    >
      <div className="hidden md:flex">
        <Navbar />
      </div>
      <img src={logo} alt="" className="w-14 md:w-24" />
      <div className="hidden md:flex items-center gap-10">
        <SocialIcons />
        <button className="bg-sky-500 text-white px-6 py-3 w-40 text-sm font-light hover:bg-white hover:border hover:border-sky-500 hover:text-sky-500 transition-colors duration-300">
          Book Now
        </button>
      </div>
      <div className="flex md:hidden text-white text-2xl">
        <FaBars onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>

      {/* sidebar for mobile */}
      {isSidebarOpen && (
        <div className="fixed bg-black opacity-95 w-full h-screen z-50 left-0 top-0 flex flex-col justify-center items-center">
          <div className="absolute top-5 right-5 cursor-pointer">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-3xl text-red-500"
            >
              <FaTimes />
            </button>
          </div>
          <div>
            <Navbar />
            <button className="bg-sky-500 text-white px-6 py-3 w-40 text-sm font-light hover:bg-white hover:border hover:border-sky-500 hover:text-sky-500 transition-colors duration-300 mt-6">
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
