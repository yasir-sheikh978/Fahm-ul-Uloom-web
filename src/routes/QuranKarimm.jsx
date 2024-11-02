import React, { useState } from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import SurahBaqara from '../compunentQuran/surah/SurahBaqara'
import SurahFatiha from '../compunentQuran/surah/SurahFatiha'
import fatiha from '../assets/quran/surahfatiha.png'
import baqarah from '../assets/quran/surahbaqara.jpg'
import QuranBg from '../assets/quran/Quran-bg.jpg'
import Navbar from '../compunentIndex/Navbar'


export default function Book(){
    const [hid , sethid] = useState("hidden")
    const [flx , setflx] = useState("flex")
    const [id , setid] = useState(0)
    const bookName =[
      {img:  fatiha,name: "Surah Fatiha"},
        {img:  baqarah,name: "Surah Al-baqara"},
    ]
    const booklink =[
        {link: <SurahFatiha />},
        {link: <SurahBaqara />},
    ]

    return(
      <div>
      <Navbar />
      <div data-aos="zoom-in">
        <img src={QuranBg} className="w-full h-[80vh]" />
      </div>
      
      
                        <div className={` w-full ${hid} h-screen z-40 fixed bottom-0 backdrop-blur-sm justify-center items-center `}>

             <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center`}>
             <div className="absolute top-12 right-12 text-xl md:text-8xl cursor-pointer text-black" onClick={() =>{
                 sethid("hidden")
                 setflx("flex")
                }}>
      &times;
    </div>
    <div className=" bg-gray-300 text-white sm:leading-loose font-serif tracking-wider leading-loose text-2xl sm:text-4xl pt-8 w-full overflow-scroll h-[100vh]">
        {booklink[id].link}
    </div> 
  </div>
  </div>

        <div className={`bg-gray-300 ${flx} py-8 flex flex-wrap gap-4 justify-center`}>
            {bookName.map((items, index) => (
               <Card key={index}
               className="h-100 sa"
               imgAlt="Meaningful alt text for an image that is not purely decorative"
               imgSrc={items.img}
             >
                <h1 className="text-center text-xl font-bold">
                    {items.name}
                </h1>
              
               <Button color="blue" key={index} onClick={() =>{
                 sethid("flex")
                 setflx("hidden")
                 setid(index)
                }}>
                Reads
               </Button>
             </Card>
            ))}
        </div>
        </div>
    )
}