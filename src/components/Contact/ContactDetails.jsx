import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";

const ContactDetails = () => {
  const contactData = [
    {
      id: 1,
      Icon: AiOutlineHome,
      header: "Buttonwood, California.",
      text: " Rosemead, CA 91770",
    },
    {
      id: 2,
      Icon: IoMdPhonePortrait,
      header: "+1 253 565 2365",
      text: "Mon to Fri 9am to 6pm",
    },
    {
      id: 3,
      Icon: MdMailOutline,
      header: "support@colorlib.com",
      text: "Send us your query anytime!",
    },
  ];

  return (
    <div className="flex flex-col items-start w-full md:w-fit space-y-4">
      {contactData.map((item) => (
        <ContactInfoItem
          key={item.id}
          Icon={item.Icon}
          header={item.header}
          text={item.text}
        />
      ))}
    </div>
  );
};

const ContactInfoItem = ({ Icon, header, text }) => {
  return (
    <div className="flex items-start gap-3 space-x-2">
      <Icon className="text-3xl text-gray-500" />
      <div>
        <h3 className="text-lg font-medium text-gray-600">{header}</h3>
        <p className="text-gray-500 text-sm font-light">{text}</p>
      </div>
    </div>
  );
};

export default ContactDetails;
