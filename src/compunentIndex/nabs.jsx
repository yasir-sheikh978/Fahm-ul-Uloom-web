import React, { useEffect } from "react";
import { Navbar, Button } from "flowbite-react";
// import AOS from "aos";
import "aos/dist/aos.css";
// import Typewriter from "typewriter-effect";
import { Dropdown } from "flowbite-react";
import "../App.css";
import logothree from "../assets/logo/logothree.png";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Navbarr() {
  const Navigate = useNavigate();
  const introAleret =() =>{
    alert("Work Is In Progress")
  }
  const long = () => {
    Navigate("/coursetwo");
  };
  const short = () => {
    Navigate("/courseone");
  };
  const ho = () => {
    Navigate("/");
  };
  const don = () => {
    Navigate("/donation");
  };
  const fat = () => {
    Navigate("/fatwa");
  };
  const logothre = () => {
    Navigate("/");
  };
  const cont = () => {
    Navigate("/contact");
  };
  const admin = () => {
    Navigate("/meeting-management");
  };
 

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, 
  //   });
  // }, []);

  return (
   

      <div className="ha sticky top-0 z-40" >
        <Navbar
          fluid
          rounded
          className="bg-blue-950 cursor-pointer   z-20 w-[100%]"
        >
          <Navbar.Brand onClick={logothre}>
            <img
              src={logothree}
              className="mr-3 h-10 sm:h-14 bg-white rounded-full"
              alt="Fahm Ul Alum"
            />
          </Navbar.Brand>
          <div className="flex md:order-2 gap-2">
            <Button onClick={admin} className="bg-white hover:text-white text-black text-lg">
            Admin
            </Button>
            <Button onClick={don} className="bg-white hover:text-white text-black text-lg">
            Donation
            </Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className=" rounded-3xl   px-4 text-center">
            <Navbar.Link
              onClick={ho}
              className=" text-white hover:bg-blue-950  hover:text-blue-500 border-black  rounded-md md:p-2    font-semibold text-2xl"
            >
              Home
            </Navbar.Link>
            <Navbar className="bg-blue-950 hh  text-white hover:text-black  rounded-md md:p-2  font-semibold text-2xl">
              <Dropdown label="About" inline>
                <Dropdown.Item onClick={introAleret}>Introduction</Dropdown.Item>
                {/* <Dropdown.Item>Founder</Dropdown.Item>   */}
                <Dropdown.Item onClick={introAleret}>Our Mission</Dropdown.Item>
              </Dropdown>
            </Navbar>
            <Navbar className="bg-blue-950 hh  text-white hover:text-black  rounded-md md:p-2  font-semibold text-2xl">
              <Dropdown label="Course" inline>
                <Dropdown.Item onClick={short}>Short Course</Dropdown.Item>
                <Dropdown.Item onClick={long}>Long Course</Dropdown.Item>
              </Dropdown>
            </Navbar>
            <Navbar className="bg-blue-950 hh  text-center  text-white hover:text-black   rounded-md   font-semibold text-2xl ">
              <Dropdown label="Meet The Team" inline className="hh">
                <Dropdown.Item onClick={introAleret}>Our Treacher</Dropdown.Item>
                <Dropdown.Item onClick={introAleret}>IT Team</Dropdown.Item>
                {/* <Dropdown.Item>Our Muftis</Dropdown.Item> */}
              </Dropdown>
            </Navbar>
            {/* <Navbar.Link
              onClick={don}
              className="  border-black  text-white hover:bg-blue-950  rounded-md md:p-2  font-semibold text-2xl"
            >
              Donatio
            </Navbar.Link> */}
            <Navbar.Link onClick={cont} className="  border-black   text-white hover:bg-blue-950  rounded-md md:p-2  font-semibold text-2xl">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
}
