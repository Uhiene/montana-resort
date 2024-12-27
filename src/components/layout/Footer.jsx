import React from "react";
import { Link } from "react-router-dom";
import SocialIcons from "../ReuseableComponents/SocialIcons"

const links = [
  { path: "/", label: "Home" },
  { path: "/rooms", label: "Rooms" },
  { path: "/about", label: "About" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];
const Footer = () => {
  return (
    <div className="bg-black p-5 md:p-10 py-14 md:py-20">

      <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between border-b border-neutral-800 pb-10 md:pb-20">

        {/* Address */}
        <div className="w-full md:w-1/5 space-y-2 md:space-y-4">
          <h2 className="text-white text-2xl md:mb-6">Address</h2>
          <p className="text-neutral-400">
            {" "}
            200, Green road, Mongla, New York City USA
          </p>
          <button className="text-neutral-400 underline underline-offset-8 hover:text-sky-500 hover:transition duration-200">
            Get Direction
          </button>
        </div>
        <div className="w-full md:w-1/5 space-y-2 md:space-y-4">
          <h2 className="text-white text-2xl md:mb-6">Reservation</h2>
          <p className="text-neutral-400"> +10 367 267 2678</p>
          <p className="text-neutral-400"> reservation@montana.com</p>
        </div>

        {/* Navigation */}
        <div className="w-full md:w-1/5 space-y-2 md:space-y-4">
          <h2 className="text-white text-2xl md:mb-6">Navigation</h2>
          {links.map((link) => (
            <li className="flex flex-col gap-2 text-neutral-400">
              <Link
                to={link.path}
                className={`cursor-pointer hover:text-yellow-400 transition-all ${
                  location.pathname === link.path ? "text-yellow-400" : " "
                } }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </div>

        {/* Newsletter */}
        <div className="space-y-2 md:space-y-4">
          <h2 className="text-white text-2xl md:mb-6">NewsLetter</h2>
          <div className="flex justify-between w-full md:w-80 bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <input
              type="text"
              placeholder="Enter your mail"
              className="flex-1 border p-2"
            />
            <button className="px-4 py-2 bg-sky-500 text-white focus:outline-none hover:bg-sky-600">
              Submit
            </button>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-start justify-between pt-6">
      <div>
        <p className="text-neutral-400">Copyright ©2024 All rights reserved | ❤️ This template is made with by CodeDuchess</p>
      </div>
      <SocialIcons/>
      </div>
    </div>
  );
};

export default Footer;
