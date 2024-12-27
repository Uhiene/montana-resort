import React from "react";

const ContactMap = () => {
  return (
    <div className="p-10 pt-20 h-96 md:h-[600px] w-full">
      <iframe
        title="Random Map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15,51.48,-0.09,51.52&layer=mapnik"
        style={{ border: "none", height: "100%", width: "100%" }}
      ></iframe>
    </div>
  );
};

export default ContactMap;