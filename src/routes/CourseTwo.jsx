import React,{useEffect} from "react";
import {useLocation } from 'react-router-dom';
import Navbar from "../compunentIndex/Navbar";
import Nab from "../compunentIndex/nabs";
import Slider from "../compunentIndex/Slider";
import Footer from "../compunentIndex/Footer";
import Fees from "../compunentCourse/Fees";
import LongCourse from "../compunentCourse/CourseTwo/CourseTwo";
import Nazra from "../compunentCourse/Nazra";
import Whatsapp from "../compunentIndex/Whatsapp";

// import Detail from "../compunentCourse/CourseOne/Detail";
// import Course from "../compunentCourse/Course";

import "flowbite";
function CourseTwo() {

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
      {/* <Detail /> */}
      <Fees />
      <Nazra />

      <LongCourse />

      <Footer />
    </div>
  );
}
export default CourseTwo;
