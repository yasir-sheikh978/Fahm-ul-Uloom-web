import React, { useState } from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";


export default function Course(){
    const CourseDtails = [
        {name: 'Habib', img:'https://dawateislami.org/uploads/img/Haji%20Abdul%20Habib%20Attari.jpg', dscpt:'my name is habib'},
        {name: 'zain', img:'https://dawateislami.org/uploads/img/Haji%20Abdul%20Habib%20Attari.jpg', dscpt:'my name is habib'},
        {name: 'fakhar', img:'https://dawateislami.org/uploads/img/Haji%20Abdul%20Habib%20Attari.jpg', dscpt:'my name is habib'},
        {name: 'fahad', img:'https://dawateislami.org/uploads/img/Haji%20Abdul%20Habib%20Attari.jpg', dscpt:'my name is habib'},
        {name: 'haris', img:'https://dawateislami.org/uploads/img/Haji%20Abdul%20Habib%20Attari.jpg', dscpt:'my name is habib'},
    ]
const [id , setid] = useState(0);
const [hid , sethid] = useState("hidden");


    return(
        <div>
            <div className={`w-full ${hid} h-screen  z-40 fixed bottom-0 backdrop-blur-sm justify-center items-center `}>
            <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center ${hid}`}>
  <div className="relative bg-white w-[90vw] md:w-[70vw] h-[85vh] md:h-[75vh] flex flex-col md:flex-row justify-around items-center p-6 rounded-sm">
    {/* Close Button */}
    <div className="absolute top-4 right-4 text-4xl md:text-6xl cursor-pointer text-gray-700" onClick={() => sethid("hidden")}>
      &times;
    </div>



    <div className="w-full md:w-1/2 flex justify-center p-4">
      <img src={CourseDtails[id].img} alt="" className="w-full md:w-3/4 object-contain rounded-lg" />
    </div>



    {/* Course Details */}
    <div className="w-full md:w-1/2 text-center md:text-left px-4">
      <h1 className="text-2xl md:text-4xl font-semibold mb-4">{CourseDtails[id].name}</h1>
      <p className="mb-4">{CourseDtails[id].dscpt}</p>
      <p>{CourseDtails[id].name}</p>
    </div>
    
    
   
  </div>
</div>

            </div>

        <div className="bg-gray-300 flex flex-wrap gap-4 justify-center ">
  {CourseDtails.map((items, index) => (
    <Card key={index}
    className="max-w-sm"
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={items.img}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {items.name}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
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