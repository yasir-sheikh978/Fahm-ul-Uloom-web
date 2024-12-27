// src/ContactForm.jsx
import React from "react";

const ContactForm = () => {
  return (
    <div className="h-fit bg-gray-100 flex items-center justify-center flex-col p-6">
        <div className=" flex justify-around w-[100%] h-40 items-center">
        <p className="bg-blue-700 p-4  rounded-md my-2 w-40 text-center  text-white font-bold text-xl hover:scale-110">
          facebook
        </p>
        <p className="bg-green-700 p-4  rounded-md my-2 w-40 text-center  text-white font-bold text-xl hover:scale-110">
          whatsapp
        </p>
        <p className="bg-red-600 p-4  rounded-md my-2 w-40 text-center  text-white font-bold text-xl hover:scale-110">
          Youtube 
        </p>
      </div>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
  

      </div>
    
        <div className="mt-8 w-full h-screen">
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Find Us Here</h3>
          <iframe
            title="map"
            className="w-full h-screen rounded border border-gray-300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14474.706755012376!2d67.02132814999999!3d24.860734450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5c4d3b2235%3A0x4d6ec9b9e6e87b6!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
    </div>
  );
};

export default ContactForm;
