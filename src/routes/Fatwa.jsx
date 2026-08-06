import React from "react";
import Navbar from "../compunentIndex/Navbar";
import Nab from "../compunentIndex/nabs";
import Slider from "../compunentIndex/Slider";
import Footer from "../compunentIndex/Footer";
import Form from "../compunentFatwa/FatwaForm";
import MuftiIntro from "../compunentFatwa/MuftiIntro";
import Whatsapp from "../compunentIndex/Whatsapp";

import "flowbite";
function CourseOne() {
  return (
    <div>
      <Navbar />
        <Whatsapp />
      <Nab />
      <Slider />

      <MuftiIntro />
      <Form />

      <Footer />
    </div>
  );
}
export default CourseOne;
