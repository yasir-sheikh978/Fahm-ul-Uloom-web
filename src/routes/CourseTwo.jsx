
import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Slider from "../compunentIndex/Slider";
import Footer from "../compunentIndex/Footer";
import Detail from "../compunentCourse/CourseOne/Detail";
// import Course from "../compunentCourse/Course";

import 'flowbite';
function CourseTwo(){

    return(
       <div >
           <Navbar />

            <Slider />

            <Detail />

            {/* <Course /> */}

            <Footer />

        </div>
          

        
    )
}
export default CourseTwo;