
import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Slider from "../compunentIndex/Slider";
import Footer from "../compunentIndex/Footer";
import Quran from '../compunentQuran/QuranKarimm'

import 'flowbite';
function CourseOne(){

    return(
       <div >
           <Navbar />

            <Slider />

           <Quran />

            <Footer />

        </div>
          

        
    )
}
export default CourseOne;