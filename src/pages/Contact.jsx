import React from "react";
import Hero from "../components/ReuseableComponents/Hero";
import ContactMap from "../components/Contact/ContactMap";
import ContactDetails from "../components/Contact/ContactDetails";
import ContactForm from "../components/Contact/ContactForm";


const Contact = () => {
  return (
    <div>
      <Hero backgroundImage="/assets/img/banner/bradcam3.png" title="Get in Touch" />
      <ContactMap/>
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center p-4 md:p-10 py-20">
        <ContactForm />
        <ContactDetails />
      </div>
    </div>
  );
};

export default Contact;
