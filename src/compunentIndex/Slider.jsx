
import React from "react";
import '../routes/Index';
import pic from '../assets/sliderone.jpg';
import pic2 from '../assets/slidertwo.jpg';
import '../App.css'

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const images = [pic,pic2];


  
 export default function Slideshow() {
  
      return (
        <div className="h-fit ">
          

        <div className="slide-container">
          <Zoom scale={1.5}>
            {
                images.map((each, index) => <img key={index} className="h-[50vh] md:h-[80vh]" style={{width: "100vw"}} src={each} />)
            }
          </Zoom>
        </div>


        {/* Swiper  */}


      






    </div>
      )
  }
    




  


    
