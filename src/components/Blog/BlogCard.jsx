import React from "react";
import { FaComments, FaUserAlt } from "react-icons/fa";

const BlogCard = ({ image, date, title, description, category, comments }) => {
  return (
    <div className="w-full md:max-w-3xl overflow-hidden shadow-md shadow-gray-100 bg-white ">
      <div className="relative">
        <img src={image} alt="Blog img" className="w-full h-40 md:h-96 object-cover" />
        <div className="bg-sky-500 p-3 md:p-5 absolute -bottom-4 left-5 md:left-10 flex flex-col text-white text-center rounded">
          <span className="font-bold text-lg md:text-3xl">{date}</span>
          <span className="text-sm md:text-lg font-light">Jan</span>
        </div>
      </div>

      <div className="p-3 md:p-6">
        <h2 className="text-lg md:text-2xl font-semibold mt-2">{title}</h2>
        <p className="text-gray-600 font-light mt-2">{description}</p>

        <div className="flex gap-4 items-center mt-4 text-sm text-gray-600 font-light">
          <span className="mr-4 flex gap-4">
            <FaUserAlt />
            {category}
          </span>

          <span className="pl-4 border-gray-400 border-l flex gap-4">
            <FaComments />
            {comments}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
