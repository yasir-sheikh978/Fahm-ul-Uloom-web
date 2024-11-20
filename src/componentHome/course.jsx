import React from "react";
import quran from "../assets/courseOne/quran.png";
import '../App.css'
import { useNavigate } from "react-router-dom";

export default function CourseHome(){
    const Navigate = useNavigate();

    const as = () =>{
        Navigate('./courseone')
    }
   return(
    <div>
        <div className="bg w-[100%] h-screen fixed bottom-0 -z-50">
.
        </div>
        <div className="w-full h-[40vh] md:h-[75vh] bg-transparent flex justify-center md:justify-around  items-center ">
            <div>

            <h1 className="text-4xl sm:text-6xl text-white playfair" data-aos="fade-down">
                Learn Quran
            </h1>
            <button data-aos="flip-up" onClick={as} className="w-40 bg-white text-blue-900 font-bold my-4 p-2 rounded-xl hover:bg-blue-500 hover:text-black">
                Explore More
            </button>
            </div>
            <div>

            </div>
        </div>
    
    </div>
   )
}