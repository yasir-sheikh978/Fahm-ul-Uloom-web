import React from "react";
import "../App.css";

export default function Welcom() {
  return (
    <div className="bg-gray-200 py-16   ">
      <h1 className="text-4xl md:text-6xl playfair font-bold text-center pt-8 pb-2" data-aos="zoom-in">
        Welcome to the Islamic World
      </h1>
      <p className="text-center text-lg md:text-2xl font-semibold pb-10" data-aos="zoom-in">
        Education at Your Doorstep
      </p>

      <div className="p-6 geist leading-6 md:leading-9 text-sm md:text-xl  border-2 border-black rounded-lg shadow-xl bg-gray-100  shadow-gray-700 mx-auto max-w-2xl" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
        <p>
          Our organization is committed to spreading Islam to every home. Now,
          it is no longer necessary to go anywhere because education will come
          to your doorstep. Join us in this mission, learn the teachings of
          Islam yourself, and invite others as well. Come, learn the Quran,
          understand its message, and discover what our religion teaches us.
        </p>
        <p>
          We also offer short courses, the details of which you can find in the
          course section. Additionally, we are providing an Alim course to guide
          the next generation towards the path of righteousness and to propagate
          the religion brought by the Holy Prophet (PBUH). Join us and embark on
          this journey of knowledge!
        </p>
      </div>
    </div>
  );
}
