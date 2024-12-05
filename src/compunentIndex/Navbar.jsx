import React, { useEffect } from "react";
import AOS from "aos";
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

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div  className="bg-gray-200">
      <div className="bg-blue-950 z-10 text-white sm:text-2xl text-md items-center flex justify-center px-6 w-full h-[60px] ">
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
      <div className="w-full h-16 flex justify-around items-center">
        <button
          data-aos="fade-right"
          className="bg-blue-950 text-white hover:bg-blue-800 rounded-md p-2 font-semibold uppercase "
        >
          <a href="https://quran.com/1" target="blank">
            quran
          </a>
        </button>
        <button
          data-aos="fade-left"
          className="bg-blue-950 text-white hover:bg-blue-800 rounded-md p-2 font-semibold uppercase "
        >
          hadith
        </button>
        <button
          data-aos="fade-right"
          className="bg-blue-950 text-white hover:bg-blue-800 rounded-md p-2 font-semibold uppercase "
        >
          <a href="https://www.dawateislami.net/bookslibrary/" target="blank">
            books
          </a>
        </button>
        <button
          data-aos="fade-left"
          onClick={fat}
          className="bg-blue-950 text-white hover:bg-blue-800 rounded-md p-2 font-semibold uppercase "
        >
          ask mufti
        </button>
      </div>

      <div data-aos="zoom-in" className="h-36 w-full  flex justify-center py-2">
        <img src={logoOne} className="h-28  sm:h-32" alt="" />
      </div>
    </div>
  );
}
