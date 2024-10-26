
import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Slider from "../compunentIndex/Slider";
import Footer from "../compunentIndex/Footer";
import Detail from "../compunentCourse/Detail";
import Course from "../compunentCourse/Course";

import 'flowbite';
function Index(){

    return(
       <div >
           <Navbar />

            <Slider />

            <Detail />

            <Course />

            <Footer />

        </div>
          

        
    )
}
export default Index;