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
import Promotion from '../componentHome/Promotion'
import 'flowbite';
import AOS from "aos";

function Index(){
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  

 
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
        {/* <Promotion /> */}

   
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