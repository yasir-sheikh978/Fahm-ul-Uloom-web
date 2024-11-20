import React from "react";
import quran from "../assets/courseOne/quran.png";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function CourseHome() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("./courseone");
  };

  return (
    <div>
      {/* Background */}
      <div className="bg w-[100%] h-screen fixed bottom-0 -z-50"></div>

      {/* Content */}
      <div className="w-[100%] h-[50vh] md:h-[75vh] bg-transparent flex flex-col md:flex-row justify-center items-center md:justify-around">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl text-white playfair"
            data-aos="fade-down"
          >
            Learn Quran
          </h1>
          <button
            data-aos="flip-up"
            onClick={handleNavigation}
            className="w-36 sm:w-40 bg-white text-blue-900 font-bold my-4 p-2 rounded-xl hover:bg-blue-500 hover:text-black transition-all duration-300"
          >
            Explore More
          </button>
        </div>

        {/* Right Content */}
        <div className="mt-8 md:mt-0">
          {/* <img
            src={quran}
            alt="Quran"
            className="h-40 md:h-64 lg:h-80 object-contain"
            data-aos="zoom-in"
          /> */}
        </div>
      </div>
    </div>
  );
}
