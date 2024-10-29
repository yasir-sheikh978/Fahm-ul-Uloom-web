import React, { useState } from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import quran from '../../assets/courseOne/Quran.jpg'
import tijarat from '../../assets/courseOne/tijarat.jpg'
import bank from '../../assets/courseOne/bank.jpg'

export default function Course(){
    const CourseDtails = [
        {name1: 'Tajweed e Quran Course',name2: 'تجوید القرآن کورس', img: quran, dscpt1:'Method of reading Holy Quran with proper Makharij', dscpt2:'Rules of Waqf and Ibtida', dscpt3:'Pleasing to Allah', dscpt4:'Preserves Meaning', Doration: 'Typically completed in 3 to 6 months, with daily classes of 1-2 hours'},
        {name1: 'Ahkam-e-Tijarat',name2: 'احکامِ تجارت کورس', img: tijarat, dscpt1:'Introduction to Islamic Business Ethics', dscpt2:'Halal and Haram in Trade', dscpt3:'Riba (Interest)', dscpt4:'Islamic Contracts: Murabaha, Mudarabah, Musharakah', Doration: 'Typically completed in 3 to 6 months, with daily classes of 1-2 hours'},
        {name1: 'Islamic Banking course',name2: 'اسلامی بینکنگ کورس', img: bank, dscpt1:'Skill Development for Islamic Financial Institutions', dscpt2:'Islamic Banking Products and Services', dscpt3:'Role of Shariah Boards', dscpt4:'Modern Challenges and Solutions', Doration: 'This course typically takes 4-6 months with weekly sessions covering each topic'},
        {name1: 'Tajweed e Quran Course',name2: 'تجوید القرآن کورس', img: quran, dscpt1:'Method of reading Holy Quran with proper Makharij', dscpt2:'Rules of Waqf and Ibtida', dscpt3:'Pleasing to Allah', dscpt4:'Preserves Meaning', Doration: 'Typically completed in 3 to 6 months, with daily classes of 1-2 hours'},
        {name1: 'Tajweed e Quran Course',name2: 'تجوید القرآن کورس', img: quran, dscpt1:'Method of reading Holy Quran with proper Makharij', dscpt2:'Rules of Waqf and Ibtida', dscpt3:'Pleasing to Allah', dscpt4:'Preserves Meaning', Doration: 'Typically completed in 3 to 6 months, with daily classes of 1-2 hours'},
        
    ]
const [id , setid] = useState(0);
const [hid , sethid] = useState("hidden");


    return(
        <div>
            <div className={`w-full ${hid} h-screen  z-40 fixed bottom-0 backdrop-blur-sm justify-center items-center `}>
            <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center ${hid}`}>
  <div className="relative overflow-scroll bg-gray-300 w-[90vw] md:w-[95vw] h-[85vh] md:h-[95vh] flex flex-col md:flex-row justify-around items-center p-2 rounded-sm">
    {/* Close Button */}
    <div className="absolute top-4 right-4 text-4xl md:text-6xl cursor-pointer text-gray-700" onClick={() => sethid("hidden")}>
      &times;
    </div>



    <div className="w-[75vw] sm:w-3/4 md:w-2/3 flex justify-start p-4">
      <img src={CourseDtails[id].img} alt="" className="w-full md:w-3/4 object-contain rounded-lg" />
    </div>



    {/* Course Details */}
    <div className="w-full md:w-1/2  px-4">
    <div className="text-center md:text-left ">

      <h1 className="text-lg md:text-xl font-semibold font-serif mb-4">{CourseDtails[id].name1}</h1>
      <h1 className="text-lg md:text-xl md:text-end font-semibold font-serif mb-4">{CourseDtails[id].name2}</h1>
    </div>
      <div>

      <h2 className="text-md md:text-lg font-medium">Course Benefits :</h2>
      <p className="pt-2">~{CourseDtails[id].dscpt1}</p>
      <p className="pt-2">~{CourseDtails[id].dscpt2}</p>
      <p className="pt-2">~{CourseDtails[id].dscpt3}</p>
      <p className="pt-2">~{CourseDtails[id].dscpt4}</p>
      </div>
      <div className="py-2">
      <h2 className="text-md md:text-lg font-medium">Duration :</h2>
      <p className="pt-2">~{CourseDtails[id].Doration}</p>
      </div>
      <div>
      <Button color="blue" className="mt-4 w-full">Enroll Now</Button>
      </div>
    </div>
    
    
   
  </div>
</div>

            </div>

        <div className="bg-gray-300 py-8 flex flex-wrap gap-4 justify-center " >
  {CourseDtails.map((items, index) => (
    <Card key={index}
    data-aos="flip-down"
    className="max-w-sm sa"
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={items.img}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {items.name1}
    </h5>
    <h5 className="text-2xl text-end font-bold tracking-tight text-gray-900 dark:text-white">
      {items.name2}
    </h5>
    <p className="w-full text-gray-700 dark:text-gray-400">
      {items.dscpt1}
    </p>
    <p className="w-full text-gray-700 dark:text-gray-400">
     {items.dscpt2}
    </p>
    <Button color="blue" onClick={e => {
        setid(index)
        sethid("flex")
    }} key={index}>Details</Button>
  </Card>
  ))}
</div>
</div>

    )
}