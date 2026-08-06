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
      if (location.hash) {
        const el = document.getElementById(location.hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      window.scrollTo(0, 0);
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
