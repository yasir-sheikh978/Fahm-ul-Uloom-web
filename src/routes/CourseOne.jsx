
import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Slider from "../compunentIndex/Slider";
import Footer from "../compunentIndex/Footer";
// import Detail from "../compunentCourse/CourseOne/Detail";
import ShortCourse from "../compunentCourse/CourseOne/CourseOne";
import Nazra from "../compunentCourse/CourseOne/Nazra";

import 'flowbite';
function CourseOne(){

    return(
       <div >
           <Navbar />

            <Slider />
            <Nazra />

            {/* <Detail /> */}

            <ShortCourse />

            <Footer />

        </div>
          

        
    )
}
export default CourseOne;