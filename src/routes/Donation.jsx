import React,{useEffect} from "react";
import {useLocation } from 'react-router-dom';
import Bannersection from "../components/BannerSection/Bannersection";
import Bannersection2 from "../components/BannerSection/Bannersection2";
import Blogsection from "../components/Blogs/Blogsection";
import Hero from "../components/Hero/Hero";
import Navbar from "../compunentIndex/Navbar";
import Nab from "../compunentIndex/nabs";
import Footer from "../compunentIndex/Footer";
import OurVision from "../components/OurVision/OurVision";
import Whatsapp from "../compunentIndex/Whatsapp";

// import Overveiwcounter from "../components/Overveiwcounter/Overveiwcounter";
import VideoBanner from "../components/VideoBanner/VideoBanner";



export const App = () => {
  const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    //   AOS.init({
    //     duration: 1000, // Animation duration in ms
    //     easing: 'ease', // Easing function
    //     once: true,     // Animation will only happen once
    //   });  // Scrolls to the top of the page
    }, [location]);  // This runs every time the route changes
  
    return null;
  }; 
  return (
    <>
    <main className="overflow-x"> 
      <ScrollToTop />
      <Navbar/>
        <Whatsapp />
      <Nab />
      <Hero/>
      {/* <Overveiwcounter/> */}
      <OurVision/>
      <Bannersection/>
      <Bannersection2/>
      <VideoBanner/>
      <Blogsection/>
      <Footer/>
    </main>
    </>
  )
}
export default App;