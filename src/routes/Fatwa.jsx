
import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Slider from "../compunentIndex/Slider";
import Footer from "../compunentIndex/Footer";
import Form from '../compunentFatwa/FatwaForm'

import 'flowbite';
function CourseOne(){

    return(
       <div >
           <Navbar />

            <Slider />

            <Form />

            <Footer />

        </div>
          

        
    )
}
export default CourseOne;