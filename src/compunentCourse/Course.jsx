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
const [hid , sethid] = useState("flex");


    return(
        <div>
            <div className={`w-full ${hid} h-screen  z-40 fixed bottom-0 backdrop-blur-xl justify-center items-center `}>
                <div>
                <div className="text-end text-6xl cursor-pointer" onClick={e => sethid("hidden")}>
                    x
                </div>
                <div className="w-[90vw] h-[85vh] flex justify-around bg-gray-300 items-center rounded-sm">
                    <div>
                        <h1>{CourseDtails[id].name}</h1>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                        <img src={CourseDtails[id].img} alt="" />
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