import React, {useEffect} from "react";
import { Navbar,Button } from "flowbite-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

export default function Navbarr(){
    useEffect(() => {
        AOS.init({
          duration: 1500, // Duration of animation in milliseconds
        });
      }, []);
    
    return(
        <div>
            <div className="bg-blue-950 text-white sm:text-2xl text-md items-center flex justify-center px-6 w-full h-[60px] ">
                
        
      <h1>
        <Typewriter
          options={{
            strings: ['الْحَمْدُ لِلَّهِ رَبِّ  الْعَلَمِينَ وَالصَّلوةُ وَالسَّلَامُ عَلَى خَاتم النبين',  ' امَّا بَعْدُ فَأَعُوذُ بِاللَّهِ مِنَ الشَّيْطَنِ الرَّحِيمِ بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيم'],
            autoStart: true,
            loop: true,
            delay: 30, 
          }}
        />
      </h1>
              
            </div>
            <div className="w-full h-20 flex justify-around items-center">
                <button data-aos="fade-right" className="bg-blue-950 text-white rounded-md p-2 font-semibold uppercase ">quran</button>
                <button data-aos="zoom-in" className="bg-blue-950 text-white rounded-md p-2 font-semibold uppercase ">hadith</button>
                <button data-aos="fade-left" className="bg-blue-950 text-white rounded-md p-2 font-semibold uppercase ">books</button>
            </div>

            <div data-aos="zoom-in" className="h-[150px] w-full flex justify-center p-4">
                <img src="https://resources.dawateislami.net/global/globalhomeweb/resources/assets/images/main-img/logo.jpg" className="h-[100px]" alt="" />
            </div>

        <Navbar data-aos="fade-up" fluid rounded className="bg-blue-950 cursor-pointer   z-20 w-full">
        <Navbar.Brand href="https://flowbite-react.com">
          <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Fahm Ul Alum" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="bg-white hover:text-white text-black text-lg">Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className=" rounded-3xl   px-4 text-center">
        <Navbar.Link   className=' text-blue-500 md:hover:bg-white bg-white rounded-md md:p-2    font-semibold text-2xl' >
          Home
        </Navbar.Link>
        <Navbar.Link    className=' md:hover:bg-white  text-white hover:text-blue-500  rounded-md md:p-2  font-semibold text-2xl'>ABOUT</Navbar.Link>
        <Navbar.Link  className=' md:hover:bg-white  text-white hover:text-blue-500 rounded-md md:p-2   font-semibold text-2xl'>COURSE</Navbar.Link>
        <Navbar.Link  className=' md:hover:bg-white  text-white hover:text-blue-500  rounded-md md:p-2  font-semibold text-2xl'>TUTOR</Navbar.Link>
        <Navbar.Link  className=' md:hover:bg-white  text-white hover:text-blue-500 rounded-md md:p-2  font-semibold text-2xl'>DONATION</Navbar.Link>
        <Navbar.Link  className=' md:hover:bg-white   text-white hover:text-blue-500 rounded-md md:p-2  font-semibold text-2xl'>CONTACT</Navbar.Link>
      </Navbar.Collapse>
      </Navbar>

        </div>
    )

}
// الْحَمْدُ لِلَّهِ رَبِّ  الْعَلَمِينَ وَالصَّلوةُ وَالسَّلَامُ عَلَى خَاتم النبين
// امَّا بَعْدُ فَأَعُوذُ بِاللَّهِ مِنَ الشَّيْطَنِ الرَّحِيمِ بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيم