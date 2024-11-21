import React from "react";
import { useNavigate } from "react-router-dom";
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
          className="mx-auto w-full md:w-[45%] h-[30vh] sm:h-[40vh] md:h-[45vh] object-cover rounded-3xl"
          data-aos="fade-right"
        />
        
        {/* Text Container */}
        <div className="text-center md:text-left md:w-[50%] px-4" data-aos="flip-up">
          <h1 className="text-2xl font-semibold md:text-4xl mb-4">
            Donate For Education
          </h1>
          <ul className="list-disc list-inside flex flex-col gap-2 md:gap-4 pb-4">
            <li className="font-medium">
              Help underprivileged children receive quality education and Islamic knowledge.
            </li>
            <li className="font-medium">
              Your donation can empower young minds for a brighter future.
            </li>
            <li className="font-medium">
              Together, we can spread knowledge and transform communities.
            </li>
          </ul>
          <button
            onClick={doo}
            className="bg-blue-950 text-white font-semibold hover:bg-blue-700 p-4 rounded-xl w-full md:w-auto"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bannersection;
