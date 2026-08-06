import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBookQuran,
  FaChalkboardUser,
  FaGlobe,
  FaPeopleGroup,
} from "react-icons/fa6";
import heroImg from "../assets/home/bg.jpg";
import introImg from "../assets/home/Donation.jpg";
import missionImg from "../assets/home/online.jpg";

const VALUES = [
  {
    icon: FaBookQuran,
    title: "Authentic Islamic Education",
    text: "Every course is rooted in the Quran and Sunnah, taught with correct Tajweed and sound Islamic scholarship.",
  },
  {
    icon: FaChalkboardUser,
    title: "Qualified Teachers",
    text: "Our teachers are experienced, dedicated, and both male and female tutors are available for every course.",
  },
  {
    icon: FaGlobe,
    title: "Learn From Anywhere",
    text: "Live online classes bring quality Islamic education to your doorstep, wherever in the world you are.",
  },
  {
    icon: FaPeopleGroup,
    title: "For Every Age",
    text: "From children to adults, our courses are designed to welcome and guide learners at every stage of life.",
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200">
      {/* Hero */}
      <div
        className="relative flex items-center justify-center text-center px-4 py-24 md:py-36"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 15, 40, 0.75), rgba(10, 15, 40, 0.8)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            About Fahm-ul-Uloom
          </h1>
          <p className="text-blue-100 text-base md:text-xl mt-4 max-w-2xl mx-auto">
            Education At Your Doorstep — bringing authentic Islamic knowledge
            to homes around the world.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section id="introduction" className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
          <img
            src={introImg}
            alt="Students learning at Fahm-ul-Uloom"
            className="w-full h-[280px] md:h-[380px] object-cover rounded-3xl shadow-xl"
          />
          <div>
            <span className="inline-block bg-blue-100 text-blue-950 text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              Who We Are
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Introduction
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Fahm-ul-Uloom is an online Islamic academy committed to
              spreading the teachings of Islam to every home. We believe that
              quality Islamic education should never be out of reach — so we
              bring qualified teachers directly to your doorstep through
              live, interactive online classes.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              From the Holy Quran and Tajweed to Islamic jurisprudence and
              the complete Alim course, our curriculum is designed for
              children and adults alike, guiding the next generation on the
              path shown by the Holy Prophet ﷺ.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section id="mission" className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14 mb-14">
            <div className="order-2 md:order-1">
              <span className="inline-block bg-blue-100 text-blue-950 text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Our Purpose
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our mission is to make authentic Islamic education
                accessible to everyone, everywhere — free from the barriers
                of distance and time. We strive to nurture a generation that
                understands the Quran, follows the Sunnah, and carries the
                message of Islam forward with knowledge and sincerity.
              </p>
            </div>
            <img
              src={missionImg}
              alt="Online Islamic class"
              className="order-1 md:order-2 w-full h-[280px] md:h-[380px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-blue-950 text-white flex items-center justify-center text-xl">
                  <Icon />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 md:py-16 text-center px-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
          Begin Your Journey of Knowledge Today
        </h2>
        <p className="text-blue-200 max-w-xl mx-auto mb-6">
          Join hundreds of students learning the Quran and Islamic sciences
          online, at their own pace, from qualified teachers.
        </p>
        <button
          onClick={() => navigate("/feeregistration")}
          className="bg-white text-blue-950 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition"
        >
          Register Now
        </button>
      </section>
    </div>
  );
}
