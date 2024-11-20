import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Slider from "../compunentIndex/Slider";
import Whatsapp from "../compunentIndex/Whatsapp";
import Footer from "../compunentIndex/Footer";
import Welcom from '../componentHome/Welcom'
import Donate from '../componentHome/Donation'
import CourseHome from '../componentHome/Quran'
import Short from '../componentHome/short'
import 'flowbite';


function Index(){

    return(
       <div>
           <Navbar />
           <Whatsapp />
            <Slider />
            <Welcom />
            <Donate />
            <CourseHome />
            <Short />
            <Footer />
        </div>
    )
}
export default Index;