import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Slider from "../compunentIndex/Slider";
import Footer from "../compunentIndex/Footer";
import Fees from "../compunentCourse/Fees";
import LongCourse from "../compunentCourse/CourseTwo/CourseTwo";
import Nazra from "../compunentCourse/Nazra";

// import Detail from "../compunentCourse/CourseOne/Detail";
// import Course from "../compunentCourse/Course";

import "flowbite";
function CourseTwo() {
  return (
    <div>
      <Navbar />

      <Slider />
      {/* <Detail /> */}
      <Fees />
      <Nazra />

      <LongCourse />

      <Footer />
    </div>
  );
}
export default CourseTwo;
