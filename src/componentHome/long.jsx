
import { useNavigate } from "react-router-dom";
import '../App.css'

const longCourse = () => {
    const Navigate = useNavigate();

    const doo = () => {
        Navigate('./courseone');
    };

    return (
       
        <div className="bg w-full h-[80vh] flex justify-between items-center text-white">
            <div className="flex flex-col justify-center items-center">

        <p className="text-white brightness-200 text-xl w-[80%] text-center">
        Come, gain knowledge and teach others as well. Make your children scholars (Alim)
        </p>
            <button className="bg-white w-40 text-black mt-8 p-2 rounded-lg font-semibold">
                Join Now
            </button>
            </div>
        <div className="  px-8">
            <h1 className="text-center text-2xl font-semibold">

        Hadees
            </h1>
        <p className="">
             “Ilm Haasil Karna Har Musalmaan Par Farz Hai”.
        <p className="text-end">
            (Miskat P:24)
            </p>
        </p>
        </div>
        </div>
     
    );
};

export default longCourse;
