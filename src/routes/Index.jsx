import React,{useEffect, useState} from "react";
import {useLocation } from 'react-router-dom';

import Navbar from "../compunentIndex/Navbar";
import Nab from "../compunentIndex/nabs";
import Slider from "../compunentIndex/Slider";
import Whatsapp from "../compunentIndex/Whatsapp";
import Footer from "../compunentIndex/Footer";
import Welcom from '../componentHome/Welcom'
import Donate from '../componentHome/Donation'
import CourseHome from '../componentHome/Quran'
import Short from '../componentHome/short'
import Long from '../componentHome/long'
import post from "../assets/popup/post.jpg"
import 'flowbite';
import { useNavigate } from "react-router-dom";


function Index(){
  const Navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true);
  const oneDay = () => {
    setIsVisible(false);
    localStorage.setItem("divHidd", "true");
    Navigate("/registration");
  };

  // Check localStorage on component mount
  useEffect(() => {
    const hidden = localStorage.getItem("divHidd");
    if (hidden === "true") {
      setIsVisible(false);
    }
  }, []);
  
  // Hide the div and store the state in localStorage
  const hideDiv = () => {
    setIsVisible(false);
    localStorage.setItem("divHidd", "true");
  };

    const ScrollToTop = () => {
        const location = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        //   AOS.init({
        //     duration: 1000, // Animation duration in ms
        //     easing: 'ease', // Easing function
        //     once: true,     // Animation will only happen once
        //   });  // Scrolls to the top of the page
        }, [location]);  // This runs every time the route changes
      
        return null;
      }; 

    return( 
       <div>
        <ScrollToTop />
        <div>
      {isVisible && (
        <div className="h-[100%] w-[100%] fixed z-50 bg-gray-50 ">
          <button onClick={hideDiv} style={{ color: "black", border: "none",}} className="text-end px-4  w-full text-4xl text-black">
            ✖
          </button>
          <div className="block sm:flex justify-around items-center h-full  ">
            <div className="w-[100%] sm:w-[40%]">
          <img src={post} className="w-[100%] sm:w-[70%] " alt="" />

            </div>


          <div>
          <p className="text-2xl py-2 text-red-500">For Registration</p>
          <button onClick={oneDay} className="bg-blue-400 rounded p-2 text-white font-semibold hover:bg-blue-600">Click Here</button>

          </div>
          </div>
        </div>
      )}
    </div>

    <div className="flex justify-between sm:justify-around font-semibold items-center px-2 bg-yellow-200 text-lg sm:text-xl py-2">
      Registration For Q&A Session On E-Commerce <button onClick={oneDay} className="bg-blue-400 rounded p-2 text-white sm:font-semibold hover:bg-blue-600">Click Here</button>
    </div>
           <Navbar />
           <Nab />
           <Whatsapp />
            <Slider />
            <Welcom />
            <Donate />
            <CourseHome />
            <Short />
            <Long />
            <Footer />
        </div>
    )
}
export default Index;