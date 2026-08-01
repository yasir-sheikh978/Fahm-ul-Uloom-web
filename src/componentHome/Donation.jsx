import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaHandHoldingHeart, FaPeopleGroup } from "react-icons/fa6";
import pic from "../assets/home/Donation.jpg";

const Bannersection = () => {
  const Navigate = useNavigate();
  const doo = () => {
    Navigate("./donation");
  };

  return (
    <div className="bg-gray-200 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-10">
        {/* Image Container */}
        <img
          src={pic}
          alt="Donation"
          className="mx-auto w-[100%] md:w-[45%] h-[40vh] sm:h-[60vw] md:h-[30vw] object-cover rounded-3xl"
          data-aos="fade-right"
        />
        
        {/* Text Container */}
        <div className="text-center md:text-left md:w-[45%] px-4" data-aos="zoom-in">
          <span className="inline-block bg-blue-100 text-blue-950 text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Our First Batch
          </span>
          <h1 className="text-2xl font-semibold md:text-4xl mb-4">
            Donate For Education
          </h1>
          <p className="text-gray-700 mb-4 md:mb-6">
            These are the students of our very first batch, learning Sarf
            (Arabic grammar) from our teacher. Your support helps us teach
            more students like them and grow our institute.
          </p>
          <ul className="flex flex-col gap-3 md:gap-4 pb-6">
            <li className="flex items-center gap-3 text-left">
              <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-950">
                <FaBookOpen className="text-base" />
              </span>
              <span className="font-medium">
                Help underprivileged children receive quality education and Islamic knowledge.
              </span>
            </li>
            <li className="flex items-center gap-3 text-left">
              <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-950">
                <FaHandHoldingHeart className="text-base" />
              </span>
              <span className="font-medium">
                Your donation can empower young minds for a brighter future.
              </span>
            </li>
            <li className="flex items-center gap-3 text-left">
              <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-950">
                <FaPeopleGroup className="text-base" />
              </span>
              <span className="font-medium">
                Together, we can spread knowledge and transform communities.
              </span>
            </li>
          </ul>
          <button
            onClick={doo}
            className="group inline-flex items-center justify-center gap-2 bg-blue-950 text-white font-semibold hover:bg-blue-800 px-8 py-4 rounded-xl w-full md:w-auto shadow-lg shadow-blue-950/20 transition duration-300"
          >
            Donate Now
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bannersection;
