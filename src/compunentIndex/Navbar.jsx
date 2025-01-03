import React, { useEffect } from "react";

import "aos/dist/aos.css";
import "../App.css";
import logoOne from "../assets/logo/logoOne.png";
import { useNavigate } from "react-router-dom";
// import Typewriter from "typewriter-effect";


 
export default function Navbarr() {
  const Navigate = useNavigate();

  const fat = () => {
    Navigate("/fatwa");
  };

  // const qur = ()=>{
  //   Navigate('/quran')
  //   Navigate('https://alqurankarim.net/')
  //   onClick={qur}
  // }

  

  return (
    <div  className="bg-gray-200">
      <div className="bg-blue-950 z-10 text-white sm:text-2xl text-md items-center flex justify-center px-6 w-[100%] h-[60px] ">
        <h1 className="text-2xl">
           بِسْم
          اللهِ الرَّحْمَنِ الرَّحِيم
          {/* <Typewriter
          options={{
            strings: ['الْحَمْدُ لِلَّهِ رَبِّ  الْعَلَمِينَ وَالصَّلوةُ وَالسَّلَامُ عَلَى خَاتم النبين',  ' امَّا بَعْدُ فَأَعُوذُ بِاللَّهِ مِنَ الشَّيْطَنِ الرَّحِيمِ بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيم'],
            autoStart: true,
            loop: true,
            delay: 30, 
          }}
        /> */}
        </h1>
      </div>
      <div className=" sm:flex w-[100%] sm:justify-between sm:items-center">

      <div className="w-[100%] h-fit flex justify-around items-center sm:flex-col sm:items-start sm:w-[10%]">
        <button
          data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          className="bg-blue-950 text-white hover:bg-blue-800 rounded-lg sm:rounded-r-3xl	  my-2 p-2 font-semibold uppercase "
        >
          <a href="https://quran.com/1" target="blank">
            quran
          </a>
        </button>
        <button
          data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          className="bg-blue-950 text-white hover:bg-blue-800 rounded-lg sm:rounded-r-3xl	  my-2 p-2 font-semibold uppercase "
        >
          hadith
        </button>
        <button
          data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          className="bg-blue-950 text-white hover:bg-blue-800  rounded-lg sm:rounded-r-3xl my-2 p-2 font-semibold uppercase "
        >
          <a href="https://www.dawateislami.net/bookslibrary/" target="blank">
            books
          </a>
        </button>
        <button
          data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          onClick={fat}
          className="bg-blue-950 text-white hover:bg-blue-800 w-28 rounded-lg sm:rounded-r-3xl my-2 p-2 font-semibold uppercase "
        >
          ask mufti
        </button>
      </div>

      <div data-aos="zoom-in" className="h-28 sm:h-36 w-[90%]  flex justify-start items-center py-2">
        <img src={logoOne} className="h-20  sm:h-32" alt="" />
      </div>
      </div>

    </div>
  );
}
