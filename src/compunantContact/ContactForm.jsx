// src/ContactForm.jsx
import React, { useState } from "react";
import {
  FaLocationDot,
  FaLocationArrow,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  function navigateToWhatsApp() {
    const phoneNumber = "923009214180"; // WhatsApp number in international format
    const message = "Hello, I would like to know more about your services."; // Default message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="bg-gray-200 py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left column: intro + form */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 mb-8">
            Have a question about our courses, admissions, or fees? Fill in
            your details below and our team will get back to you as soon as
            possible — or reach out directly on WhatsApp.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <button
              type="button"
              className="flex items-center gap-2 bg-blue-950 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              <FaFacebook /> Facebook
            </button>
            <button
              type="button"
              onClick={navigateToWhatsApp}
              className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              <FaWhatsapp /> WhatsApp
            </button>
            <button
              type="button"
              className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              <FaYoutube /> YouTube
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl border border-gray-200 p-6 md:p-8"
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {sent && (
              <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                Your message has been sent! We'll get back to you soon.
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-950 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right column: contact info + map */}
        <div className="bg-white shadow-xl rounded-2xl border border-gray-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Contact Information
          </h2>
          <p className="flex items-start gap-2 text-gray-600 mb-6">
            <FaClock className="text-blue-950 mt-1 flex-shrink-0" />
            Our team is available Monday through Saturday to answer your
            questions about admissions, courses and fees.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-950">
                <FaLocationDot />
              </span>
              <span className="text-gray-800 font-medium flex-1">
                X3V9+W92, Sector 5M, New Karachi Town, Karachi
              </span>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=X3V9%2BW92%2C+Sector+5M+New+Karachi+Town%2C+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-blue-950 text-white hover:bg-blue-800 transition"
                title="Get Directions"
              >
                <FaLocationArrow className="text-sm" />
              </a>
            </div>
            <a
              href="tel:+923009214180"
              className="flex items-center gap-3 group"
            >
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-950">
                <FaPhone />
              </span>
              <span className="text-gray-800 font-medium group-hover:text-blue-950">
                +92 300 9214180
              </span>
            </a>
            <a
              href="mailto:fahmululoom@gmail.com"
              className="flex items-center gap-3 group"
            >
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-950">
                <FaEnvelope />
              </span>
              <span className="text-gray-800 font-medium group-hover:text-blue-950">
                fahmululoom@gmail.com
              </span>
            </a>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Find Us Here
          </h3>
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <iframe
              title="map"
              className="w-full h-64 md:h-72"
              src="https://www.google.com/maps?q=X3V9%2BW92%2C+Sector+5M+New+Karachi+Town%2C+Karachi&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
