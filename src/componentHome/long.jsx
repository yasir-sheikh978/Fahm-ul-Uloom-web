import { useNavigate } from "react-router-dom";
import '../App.css'

const longCourse = () => {
    const Navigate = useNavigate();

    const doo = () => {
        Navigate('./coursetwo   ');
    };

    return (
       
        <div className="bg w-full h-[80vh] flex flex-col md:flex-row justify-around items-center text-white px-6 md:px-12">
        <div className="flex flex-col justify-center items-center text-center md:text-left space-y-4">
          <h1 data-aos="fade-down" className="text-2xl font-semibold">"Hadith"</h1>
          <p data-aos="fade-down" className="text-lg w-[92%] md:w-[80%]">Need Hadith Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum dolorum vero asperiores, voluptatibus nihil eveniet, excepturi eius placeat et amet beatae dolor iusto perspiciatis aliquid quo sunt dicta magni.</p>
          <p data-aos="zoom-in" className="text-white text-2xl">
            Make your children scholars (Alim)
            
          </p>
          <button data-aos="flip-up" onClick={doo} className="bg-white w-full md:w-40 text-black mt-4 p-2 rounded-lg font-semibold hover:bg-gray-300">
        
            Join Now
           
          </button>
        </div>
      
        <div className="w-[100%] md:w-1/2 mt-6 md:mt-0 h-20">
          {/* Add your image or additional content here if needed */}
        </div>
      </div>
      
     
    );
};

export default longCourse;
