import React from "react";
import online from '../assets/home/online.jpg';
import { useNavigate } from "react-router-dom";

const Bannersection = () => {
    const Navigate = useNavigate();

    const doo = () => {
        Navigate('./courseone');
    };

    return (
        <div className='bg-gray-200  h-fit md:h-screen flex items-center'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-center py-10 gap-8 md:gap-12'>
                {/* Text Container */}
                <div className='w-[90%] md:w-[45%] space-y-6 px-6 text-center md:text-left' data-aos="fade-right">
                    <h1 className='text-2xl font-semibold md:text-4xl mb-4'>Online Short Courses</h1>
                    <ul className='list-disc list-inside flex flex-col gap-2 md:gap-4'>
                        <li className='font-medium'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, recusandae!
                        </li>
                        <li className='font-medium'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi delectus reiciendis ullam error qui vero.
                        </li>
                        <li className='font-medium'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem modi dolore, rerum repudiandae reprehenderit incidunt?
                        </li>
                    </ul>
                    <button 
                        onClick={doo} 
                        className="bg-blue-950 w-[100%] md:w-auto text-white font-semibold hover:bg-blue-700 p-4 rounded-xl">
                        Explore
                    </button>
                </div>
                
                {/* Image Container */}
                <img 
                    data-aos="flip-up" 
                    src={online} 
                    alt="Online Courses" 
                    className='w-[90%] md:w-[45%] h-[40vh] sm:h-[55vh] object-contain rounded-3xl mx-auto' 
                />
            </div>
        </div>
    );
};

export default Bannersection;
