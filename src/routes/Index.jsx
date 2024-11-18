
import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Slider from "../compunentIndex/Slider";
import Footer from "../compunentIndex/Footer";
import Welcom from '../componentHome/Welcom'

import 'flowbite';
function Index(){

    return(
       <div >
           <Navbar />

            <Slider />
            <Welcom />


            <Footer />
        </div>


          

        
    )
}
export default Index;