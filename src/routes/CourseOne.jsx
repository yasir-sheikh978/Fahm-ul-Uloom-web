import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Nab from "../compunentIndex/nabs";
import Slider from "../compunentIndex/Slider";
import Footer from "../compunentIndex/Footer";
// import Detail from "../compunentCourse/CourseOne/Detail";
import ShortCourse from "../compunentCourse/CourseOne/CourseOne";
import Nazra from "../compunentCourse/Nazra";
import Fees from "../compunentCourse/Fees";

import "flowbite";
function CourseOne() {
  return (
    <div>
      <Navbar />
      <Nab />
      <Slider />
      <Fees />
      <Nazra />

      {/* <Detail /> */}

      <ShortCourse />

      <Footer />
    </div>
  );
}
export default CourseOne;
