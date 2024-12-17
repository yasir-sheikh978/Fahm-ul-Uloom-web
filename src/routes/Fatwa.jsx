import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Nab from "../compunentIndex/nabs";
import Slider from "../compunentIndex/Slider";
import Footer from "../compunentIndex/Footer";
import Form from "../compunentFatwa/FatwaForm";

import "flowbite";
function CourseOne() {
  return (
    <div>
      <Navbar />
      <Nab />
      <Slider />

      <Form />

      <Footer />
    </div>
  );
}
export default CourseOne;
