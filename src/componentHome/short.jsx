import React from "react";
import online from '../assets/home/online.jpg';
import { useNavigate } from "react-router-dom";
import { FaLaptop, FaClock, FaCertificate } from "react-icons/fa6";

const Bannersection = () => {
    const Navigate = useNavigate();

    const doo = () => {
        Navigate('./courseone');
    };

    return (
        <div className='bg-gray-200 py-10 md:py-16'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12'>
                {/* Text Container */}
                <div className='w-[90%] md:w-[45%] space-y-4 md:space-y-6 px-6 text-center md:text-left' data-aos="fade-right">
                    <h1 className='text-2xl font-semibold md:text-4xl'>Online Short Courses</h1>
                    <p className="text-gray-700">
                        Learn Quran, Tajweed, Namaaz and other Islamic subjects from
                        qualified teachers, live online — from anywhere, at your own pace.
                    </p>
                    <ul className='flex flex-col gap-3 md:gap-4'>
                        <li className="flex items-center gap-3 text-left">
                            <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-950">
                                <FaLaptop className="text-base" />
                            </span>
                            <span className='font-medium'>
                                Live one-on-one and group classes from the comfort of your home.
                            </span>
                        </li>
                        <li className="flex items-center gap-3 text-left">
                            <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-950">
                                <FaClock className="text-base" />
                            </span>
                            <span className='font-medium'>
                                Flexible class timings that fit around your daily routine.
                            </span>
                        </li>
                        <li className="flex items-center gap-3 text-left">
                            <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-950">
                                <FaCertificate className="text-base" />
                            </span>
                            <span className='font-medium'>
                                Structured courses taught by qualified, experienced teachers.
                            </span>
                        </li>
                    </ul>
                    <button
                        onClick={doo}
                        className="group inline-flex items-center justify-center gap-2 bg-blue-950 w-full text-white font-semibold hover:bg-blue-800 px-8 py-4 rounded-xl shadow-lg shadow-blue-950/20 transition duration-300">
                        Explore Courses
                        <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </button>
                </div>
                
                {/* Image Container */}
                <img
                    data-aos="flip-up"
                    src={online}
                    alt="Online Courses"
                    className='w-[90%] md:w-[45%] h-[40vh] sm:h-[60vw] md:h-[30vw] object-cover rounded-3xl mx-auto'
                />
            </div>
        </div>
    );
};

export default Bannersection;
