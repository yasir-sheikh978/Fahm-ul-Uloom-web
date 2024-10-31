
import React from "react";
import '../routes/Index';
import pic from '../assets/slider/sliderthree.jpg';
import pic2 from '../assets/slider/slidertwo.jpg';
import '../App.css'

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const images = [pic];


  
 export default function Slideshow() {
  
      return (
        <div className="h-fit ">
          

        <div className="slide-container">
          <Zoom scale={1.5} cssClass="-z-20">
            {
                images.map((each, index) => <img key={index} className="h-[45vw] md:h-[65vh] xl:h-[80vh] sm:h-[50vw]" style={{width: "100vw"}} src={each} />)
            }
          </Zoom>
        </div>


        {/* Swiper  */}


      






    </div>
      )
  }
    




  


    
