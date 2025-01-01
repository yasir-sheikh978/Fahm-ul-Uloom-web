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
import 'flowbite';
import { useNavigate } from "react-router-dom";


function Index(){
  const Navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true);
  const oneDay = () => {
    Navigate("/courseone");
  };

  // Check localStorage on component mount
  useEffect(() => {
    const hidden = localStorage.getItem("divHiddn");
    if (hidden === "true") {
      setIsVisible(false);
    }
  }, []);
  
  // Hide the div and store the state in localStorage
  const hideDiv = () => {
    setIsVisible(false);
    localStorage.setItem("divHiddn", "true");
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
        <div className="h-screen w-[100%] fixed z-50 bg-gray-100 ">
          <button onClick={hideDiv} style={{ color: "white", border: "none", padding: "5px 10px" }} className="text-end w-full text-4xl">
            ✖
          </button>
          <div className="flex justify-center items-center ">

          <p className="text-xl text-red-500">GOOD NEWS FOR YOU </p>
          </div>
        </div>
      )}
    </div>

    <div className="flex justify-between items-center px-2 bg-yellow-200 text-xl py-2">
      One Day Program<button onClick={oneDay} className="bg-blue-400 rounded p-2 text-white font-semibold hover:bg-blue-600">Learn More</button>
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