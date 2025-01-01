import React,{useEffect} from "react";
import {useLocation } from 'react-router-dom';
import Navbar from "../compunentIndex/Navbar";
import Nab from "../compunentIndex/nabs";
import Slider from "../compunentIndex/Slider";
import Footer from "../compunentIndex/Footer";
// import Detail from "../compunentCourse/CourseOne/Detail";
import ShortCourse from "../compunentCourse/CourseOne/CourseOne";
import Nazra from "../compunentCourse/Nazra";
import Fees from "../compunentCourse/Fees";
import Whatsapp from "../compunentIndex/Whatsapp";
import CurrentCourse from '../compunentCourse/CurrentCourse'

import "flowbite";
function CourseOne() {

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
  return (
    <div>
        <ScrollToTop />
      <Navbar />
        <Whatsapp />
      <Nab />
      <Slider />
      <Fees />
      <CurrentCourse />

      
      <Nazra />



      <ShortCourse />

      <Footer />
    </div>
  );
}
export default CourseOne;
