import React from "react";

const AboutSection = ({
  images,
  title,
  subtitle,
  description,
  buttonText,
  reverse,
}) => {
  return (
    <div
      className={`flex ${
        reverse ? "flex-col-reverse md:flex-row-reverse" : "flex-col-reverse  md:flex-row"
      } justify-between items-start gap-10 p-4 md:p-10 py-10 md:py-20`}
    >
      <div className="flex gap-3 md:gap-5 w-1/2 md:w-fit">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`About Image ${index + 1}`}
            className={index !== 0 ? "mt-10" : ""}
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/5 space-y-5">
        <h4 className="text-sky-500 text-sm font-light">{subtitle}</h4>
        <h2 className="text-gray-800 text-3xl md:text-5xl">{title}</h2>
        <p className="text-gray-500">{description}</p>
        <button className="text-gray-500 underline underline-offset-8 hover:text-sky-500 hover:transition duration-200">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
