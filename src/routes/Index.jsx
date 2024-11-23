import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Nab from "../compunentIndex/nabs";
import Slider from "../compunentIndex/Slider";
import Whatsapp from "../compunentIndex/Whatsapp";
import Footer from "../compunentIndex/Footer";
import Welcom from '../componentHome/Welcom'
import Donate from '../componentHome/Donation'
import CourseHome from '../componentHome/Quran'
import Short from '../componentHome/short'
import Long from '../componentHome/long'
import 'flowbite';


function Index(){

    return(
       <div>
           <Navbar />
           <Nab />
           <Whatsapp />
            <Slider />
            <Welcom />
            <Donate />
            <CourseHome />
            <Short />
            <Long />
            <Footer />
        </div>
    )
}
export default Index;