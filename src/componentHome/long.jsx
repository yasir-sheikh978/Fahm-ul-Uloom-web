import { useNavigate } from "react-router-dom";
import '../App.css'

const longCourse = () => {
    const Navigate = useNavigate();

    const doo = () => {
        Navigate('./coursetwo');
    };

    return (
       
        <div className="bg bg-opacity-100 w-[100%] h-fit flex flex-col md:flex-row justify-around items-center text-white px-6 py-10 md:px-12">
        <div className="flex flex-col justify-center items-center text-center md:text-left space-y-2">
          <h1 data-aos="fade-down" className="text-2xl font-semibold">"Hadith"</h1>
          <p data-aos="fade-down" className="text-lg w-[92%] md:w-[80%]">
            <p  className="text-center font-semibold">
            :عن أبي هريرة رضي الله عنه قال رسول الله ﷺ
            </p>
            <p className="quranic-text text-center py-3">إِنَّ مِنْ أَبَرِّ صَدَقَاتِ الْمَرْءِ عَلَيْهِ أَنْ يُعَلِّمَ وَلَدَهُ وَيُدَّرِبَهُ عَلَى الْمَعَارِفِ وَيُفِيضَ عَلَيْهِ مِنْ أَنْوَاعِ الْعِلْمِ</p>
          </p>
          <p data-aos="fade-down" className="text-center">         : رسول اللہ  ﷺ  نے فرمایا</p>
          <p data-aos="fade-down" className="text-center">انسان پر سب سے بہترین صدقہ یہ ہے کہ وہ اپنے بچے کو علم سکھائے، اور اسے معارف کی تربیت دے، اور اسے علم کی مختلف قسموں سے نوازے</p>
          <p>Muhammad ﷺ Said</p>
          <p data-aos="fade-down" className="text-center">The best charity a person can give is to teach their child knowledge, nurture them with understanding, and bless them with different branches of learning</p>
          <p data-aos="zoom-in" className="text-white text-2xl py-4">
            Make your children scholars (Alim)
            
          </p>
          <button  onClick={doo} className="bg-white w-[100%] md:w-40 text-black mt-4 p-2 rounded-lg font-semibold hover:bg-gray-300">
        
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
