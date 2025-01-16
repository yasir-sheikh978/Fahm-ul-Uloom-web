import React, {useEffect,useState} from "react";
import post from "../assets/popup/post.jpg"
import { useNavigate } from "react-router-dom";


export default function Promotion() {

 // Check localStorage on component mount
  useEffect(() => {
    const hidden = localStorage.getItem("divHidd");
    if (hidden === "true") {
        setIsVisible(false);
      }
    }, []);
    
    // Hide the div and store the state in localStorage
    const hideDiv = () => {
      localStorage.setItem("divHidd", "true");
    setIsVisible(false);
  };
const Navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true);
  const oneDay = () => {
    setIsVisible(false);
    localStorage.setItem("divHidd", "true");
    Navigate("/registration");
  };

    return(
<div>


<div>
      {isVisible && (
        <div className="h-[100%] w-[100%] fixed z-50 bg-transparent backdrop-blur-2xl	 	">
          <button onClick={hideDiv} style={{ color: "black", border: "none",}} className="text-end px-4  w-full text-4xl text-black">
            ✖
          </button>
          <div className="block sm:flex justify-around items-center h-full  ">
            <div className="w-[100%] sm:w-[40%] flex justify-center items-center">
          <img src={post} className="w-[85%] sm:w-[70%] " alt="" />

            </div>


          <div className="flex items-center justify-center flex-col">
          <p className="text-2xl font-semibold py-2 text-white">For Registration</p>
          <button onClick={oneDay} className="bg-blue-600 rounded p-2 text-white font-semibold hover:bg-blue-800">Click Here</button>

          </div>
          </div>
        </div>
      )}
    </div>
     <div className="flex justify-between sm:justify-around sm:font-semibold items-center px-2 bg-yellow-200 text-sm sm:text-xl py-2">
          Registration For Q&A Session On E-Commerce <button onClick={oneDay} className="bg-blue-400 rounded p-2 text-white sm:font-semibold hover:bg-blue-600">Click Here</button>
        </div>
</div>

    )

}
