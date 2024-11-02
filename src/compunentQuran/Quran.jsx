import React from "react";
// import Quran from '../assets/quran/surahfatiha.png'
import { useNavigate,Navigate } from "react-router-dom";
import Quran from '../assets/quran/Quran.jpg'

export default function TarjamaQuran(){
    const Navigate = useNavigate();
    const as =()=>{
        Navigate('/qurantarjama')
    }
    return(
        <div>
          

        <div className="flex flex-wrap gap-4 py-20 justify-center">

        <div className=" border-black w-[350px]">
            <img src={Quran} className="w-full"/>
            <button className="text-center w-full bg-blue-600 h-12 text-white hover:bg-blue-950"  onClick={as}>Red Quran ul Karim</button>
        </div>
        <div>
            <img src={Quran} width={350} />
            <button className="text-center w-full bg-blue-600 h-12 text-white hover:bg-blue-950"  onClick={as}>Red Quran ul Karim</button>
        </div>
       
       

        </div>
        </div>
    )
}