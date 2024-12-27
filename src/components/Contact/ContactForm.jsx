import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-3xl flex-1">
      <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
      <form action="" onSubmit={handleSubmit} className="space-y-6">
        <div>
          <textarea 
            id="message"
            name="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="border border-gray-300 py-2 px-4 w-full placeholder:font-light focus:ring-0 focus:outline-none"
          />
        </div>

        <div className="flex gap-5">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 py-2 px-4 w-full placeholder:font-light focus:ring-0 focus:outline-none"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 py-2 px-4 w-full placeholder:font-light focus:ring-0 focus:outline-none"
          />
        </div>

        <div>
        <input
            type="subject"
            id="subject"
            name="subject"
            placeholder="Your Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border border-gray-300 py-2 px-4 w-full placeholder:font-light focus:ring-0 focus:outline-none"
          />
        </div>

        <div>
        <button type="submit" className='bg-white border border-sky-500 text-sky-500 w-36 px-4 py-2 hover:text-white hover:bg-sky-500 hover:transition duration-200 text-sm'>Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
