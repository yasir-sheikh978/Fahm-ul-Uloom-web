
import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Slider from "../compunentIndex/Slider";
import Footer from "../compunentIndex/Footer";
import Detail from "../compunentCourse/CourseOne/Detail";
import ShortCourse from "../compunentCourse/CourseOne/CourseOne";

import 'flowbite';
function CourseOne(){

    return(
       <div >
           <Navbar />

            <Slider />

            <Detail />

            <ShortCourse />

            <Footer />

        </div>
          

        
    )
}
export default CourseOne;