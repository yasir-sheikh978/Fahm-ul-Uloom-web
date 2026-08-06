import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../compunentIndex/Navbar";
import Nab from "../compunentIndex/nabs";
import Whatsapp from "../compunentIndex/Whatsapp";
import Footer from "../compunentIndex/Footer";
import About from "../componentAbout/About";

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Navbar />
      <Whatsapp />
      <Nab />
      <About />
      <Footer />
    </div>
  );
}
