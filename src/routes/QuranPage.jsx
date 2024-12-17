import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Nab from "../compunentIndex/nabs";
import Slider from "../compunentIndex/Slider";
import Footer from "../compunentIndex/Footer";
import "flowbite";
import Quran from "../compunentQuran/Quran";
function CourseOne() {
  return (
    <div>
      <Navbar />
      <Nab />
      <Slider />

      <Quran />

      <Footer />
    </div>
  );
}
export default CourseOne;
