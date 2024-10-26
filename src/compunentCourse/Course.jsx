import React from "react";

export default function Course(){
    const CourseDtails = [
        {name: 'Habib', img:'https://dawateislami.org/uploads/img/Haji%20Abdul%20Habib%20Attari.jpg', dscpt:'my name is habib'},
        {name: 'Habib', img:'https://dawateislami.org/uploads/img/Haji%20Abdul%20Habib%20Attari.jpg', dscpt:'my name is habib'},
        {name: 'Habib', img:'https://dawateislami.org/uploads/img/Haji%20Abdul%20Habib%20Attari.jpg', dscpt:'my name is habib'},
        {name: 'Habib', img:'https://dawateislami.org/uploads/img/Haji%20Abdul%20Habib%20Attari.jpg', dscpt:'my name is habib'},
    ]

    return(
        <div className="bg-gray-300">
  {CourseDtails.map((items, index) => (
    <div
      key={index}
      className="h-auto md:h-[80vh] flex flex-col md:flex-row items-center justify-between px-4 py-8"
    >
      <div
        className="w-full md:w-[50%] flex justify-center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <img src={items.img} alt="" className="w-[80%] md:w-full" />
      </div>
      <div className="w-full h-80 md:w-[50%] " data-aos="fade-left">
        <h1 className="text-2xl h-20 md:text-4xl font-semibold pt-6 md:pt-0 text-center">{items.name}</h1>
        <p className="px-4 md:px-2 text-center md:text-start">{items.dscpt}</p>
      </div>
    </div>
  ))}
</div>
    )
}