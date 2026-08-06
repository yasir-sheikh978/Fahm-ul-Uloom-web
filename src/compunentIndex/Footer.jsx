import React from "react";
import "../routes/Index"; // Import Tailwind CSS first
import "../App.css";
import logoTwo from "../assets/logo/logoTwo.png";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

export default function Footer() {
  function navigateToWhatsApp() {
    const phoneNumber = "923009214180"; // WhatsApp number in international format
    const message = "Hello, I would like to know more about your services."; // Default message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  }

  const Navigate = useNavigate();

  const Home = () => Navigate("/");
  const Short = () => Navigate("/courseone");
  const Long = () => Navigate("/coursetwo");
  const Donation = () => Navigate("/donation");
  const Contact = () => Navigate("/contact");
  const Mufti = () => Navigate("/fatwa");
  const AboutUs = () => Navigate("/about");
  const ItTeam = () => Navigate("/it");

  const socialLinks = [
    { icon: FaFacebookF, label: "Facebook", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaYoutube, label: "YouTube", href: "#" },
    { icon: FaWhatsapp, label: "WhatsApp", onClick: navigateToWhatsApp },
  ];

  const quickLinks = [
    { label: "Home", onClick: Home },
    { label: "About Us", onClick: AboutUs },
    { label: "Short Courses", onClick: Short },
    { label: "Long Courses", onClick: Long },
    { label: "Donation", onClick: Donation },
    { label: "Contact", onClick: Contact },
  ];

  const helpLinks = [
    { label: "Ask Mufti", onClick: Mufti },
    { label: "IT Team", onClick: ItTeam },
  ];

  return (
    <footer className="bg-blue-950">
      <div className="px-6 md:px-10 lg:px-16 py-5 sm:py-6 lg:py-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-4 gap-x-8">
          {/* Brand */}
          <div className="min-w-0 sm:col-span-2 md:col-span-4 lg:col-span-2 lg:pr-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img className="w-24 sm:w-28" src={logoTwo} alt="Fahm-ul-Uloom" />
              <p className="text-sm text-blue-200 mt-1 max-w-xs">
                Education at Your Doorstep — bringing authentic Quranic and
                Islamic education to homes around the world.
              </p>
            </div>

            <ul className="flex items-center justify-center md:justify-start gap-3 mt-2">
              {socialLinks.map(({ icon: Icon, label, href, onClick }) => (
                <li key={label}>
                  {onClick ? (
                    <button
                      onClick={onClick}
                      aria-label={label}
                      className="flex items-center justify-center text-white transition-all duration-200 bg-white/10 rounded-full w-9 h-9 hover:bg-white hover:text-blue-950"
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ) : (
                    <a
                      href={href}
                      aria-label={label}
                      className="flex items-center justify-center text-white transition-all duration-200 bg-white/10 rounded-full w-9 h-9 hover:bg-white hover:text-blue-950"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-widest text-blue-300 uppercase">
              Quick Links
            </p>
            <ul className="mt-2 space-y-1">
              {quickLinks.map(({ label, onClick }) => (
                <li key={label}>
                  <button
                    onClick={onClick}
                    className="text-sm text-blue-100 transition-all duration-200 hover:text-white"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="min-w-0">
            <p className="text-xs font-bold tracking-widest text-blue-300 uppercase">
              Help
            </p>
            <ul className="mt-2 space-y-1">
              {helpLinks.map(({ label, onClick }) => (
                <li key={label}>
                  <button
                    onClick={onClick}
                    className="text-sm text-blue-100 transition-all duration-200 hover:text-white"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0 sm:col-span-2 md:col-span-4 lg:col-span-2 lg:pl-8">
            <p className="text-xs font-bold tracking-widest text-blue-300 uppercase mb-2">
              Contact
            </p>
            <ul className="space-y-1">
              <li className="min-w-0">
                <a
                  href="mailto:fahmululoom@gmail.com"
                  className="flex items-center gap-3 text-sm text-blue-100 transition-all duration-200 hover:text-white min-w-0"
                >
                  <FaEnvelope className="flex-shrink-0" />
                  <span className="break-all">fahmululoom@gmail.com</span>
                </a>
              </li>
              <li>
                <button
                  onClick={navigateToWhatsApp}
                  className="flex items-center gap-3 text-sm text-blue-100 transition-all duration-200 hover:text-white"
                >
                  <FaPhone className="flex-shrink-0" />
                  +92 300 9214180
                </button>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-100">
                <FaLocationDot className="flex-shrink-0" />
                Karachi, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-4 mb-2 border-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-blue-300">
            Copyright © {new Date().getFullYear()}, All Rights Reserved by
            Fahm-Ul-Uloom
          </p>
          <button
            onClick={ItTeam}
            className="text-xs sm:text-sm text-blue-300 hover:text-white transition"
          >
            Developed By IT Department of Fahm-Ul-Uloom
          </button>
        </div>
      </div>
    </footer>
  );
}
