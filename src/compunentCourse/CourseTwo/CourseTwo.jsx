import React, { useState } from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import tajweed from "../../assets/courseOne/tajweed.jpg";

export default function Course() {
  const CourseDtails = [
    {
      name1: "Dar e Nizami (Alim Course) ",
      btn: " Admission Off",
      img: tajweed,
      dscpt1: "Study Quran, Hadith, Fiqh, and other key subjects in depth.",
      dscpt2: "Learn the Arabic language to access Islamic texts directly",
      dscpt3: "Gain skills to apply Islamic principles in modern contexts",
      dscpt4: "Regular assessments and a certificate upon completion",
      Doration:
        "Completed in 6 years, with daily classes of 1-2 hours",
    },
    {
      name1: "One Year Alim Diploma ",
      btn: " Admission Off",
      img: tajweed,
      dscpt1: "Comprehensive Understanding",
      dscpt2: "Gain insights on how quranic teachings apply to modern life",
      dscpt3:
        "Paccess to notes, translations, and reference materials for further study",
      dscpt4: "Opportunities to ask questions",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
    },
  ];
  const UrduTrans = [
    {
      name1: "درس نظامی (عالم کورس)",
      btn: " Admission Off",
      img: tajweed,
      dscpt1: "قرآن، حدیث، فقہ اور دیگر اہم مضامین کا گہرائی سے مطالعہ",
      dscpt2: "اسلامی متون کو براہ راست سمجھنے کے لیے عربی زبان سیکھیں۔",
      dscpt3: "جدید دور میں اسلامی اصولوں کو نافذ کرنے کی مہارت حاصل کریں",
      dscpt4: "باقاعدہ جائزے اور کورس کی تکمیل پر سند",
      Doration:
        "یہ کورس 6 سال میں مکمل ہوتا ہے، جس میں روزانہ 1 سے 2 گھنٹے کی کلاسز ہوتی ہیں",
    },
    {
      name1: "تفسیر قرآن کورس ",
      btn: " Admission Off",
      img: tajweed,
      dscpt1: "جامع تفہیم",
      dscpt2: "جدید زندگی میں قرآن کی تعلیمات کو کیسے لاگو کیا جا سکتا ہے",
      dscpt3: "مزید مطالعے کے لیے نوٹس، تراجم اور ریفرنس مواد تک رسائی",
      dscpt4: "سوالات پوچھنے کا موقع",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
    },
  ];
  const [id, setid] = useState(0);
  const [hid, sethid] = useState("hidden");
  const [Urdu, seturdu] = useState("hidden");
  const [eng, seteng] = useState("flex");

  return (
    <div className="bg-gray-200">
      <h1 className="flex justify-center items-center bg-gray-200 text-center h-20  text-4xl font-semibold font-serif border-b-2 border-gray-400">
        LONG COURSES
      </h1>
      <div
        className={`w-full ${hid} h-screen  z-40 fixed bottom-0 backdrop-blur-sm justify-center items-center `}
      >
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 ${eng} items-center justify-center`}
        >
          <div className="relative overflow-scroll bg-gray-200 w-[90vw] md:w-[95vw] h-[85vh] md:h-[95vh] flex flex-col md:flex-row justify-around items-center p-2 rounded-sm">
           
            <div
              className="absolute top-4 right-4 text-4xl md:text-6xl cursor-pointer text-gray-900"
              onClick={() => sethid("hidden")}
            >
              &times;
            </div>
            <div className="absolute h-20 md:h-10 top-4  text-4xl md:text-6xl cursor-pointer text-black">
              <button
                className="text-xl border font-semibold border-black p-2 hover:bg-blue-300 rounded-md"
                onClick={() => {
                  seteng("hidden");
                  seturdu("flex");
                }}
              >
                Urdu
              </button>
            </div>

            <div className="w-[70vw] sm:w-3/4 md:w-2/3 flex justify-start p-4">
              <img
                src={CourseDtails[id].img}
                alt=""
                className="w-full md:w-3/4 object-contain rounded-lg"
              />
            </div>

      
            <div className="w-full md:w-1/2  px-4">
              <div className="text-center md:text-left ">
                <h1 className="text-lg md:text-xl font-semibold font-serif mb-4">
                  {CourseDtails[id].name1}
                </h1>
               
              </div>
              <div>
                <h2 className="text-md md:text-lg font-medium">
                  Course Benefits :
                </h2>
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
                <Button color="blue" className="mt-4 w-full">
                  {CourseDtails[id].btn}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center ${Urdu}`}
        >
          <div className="relative overflow-scroll bg-gray-200 w-[90vw] md:w-[95vw] h-[85vh] md:h-[95vh] flex flex-col md:flex-row justify-around items-center p-2 rounded-sm">
            {/* Close Button */}
            <div
              className="absolute top-4 right-4 text-4xl md:text-6xl cursor-pointer text-gray-900"
              onClick={() => sethid("hidden")}
            >
              &times;
            </div>
            <div className="absolute h-20 md:h-10 top-4  text-4xl md:text-6xl cursor-pointer text-black">
              <button
                className="text-xl border font-semibold border-black p-2 hover:bg-blue-300 rounded-md"
                onClick={() => {
                  seteng("flex");
                  seturdu("hidden");
                }}
              >
                English
              </button>
            </div>

            <div className="w-[70vw] sm:w-3/4 md:w-2/3 flex justify-star p-4">
              <img
                src={CourseDtails[id].img}
                alt=""
                className="w-full md:w-3/4 object-contain rounded-lg"
              />
            </div>

            {/* Course Details */}
            <div className="w-full md:w-1/2  px-4">
              <div className="text-center md:text-left ">
                {/* <h1 className="text-lg md:text-xl font-semibold font-serif mb-4">{CourseDtails[id].name1}</h1> */}
                <h1 className="text-lg md:text-xl md:text-end font-semibold font-serif mb-4">
                  {UrduTrans[id].name1}
                </h1>
              </div>
              <div className="text-end">
                <h2 className="text-md md:text-lg font-medium">:فوائد</h2>
                <p className="pt-2">{UrduTrans[id].dscpt1}~</p>
                <p className="pt-2">{UrduTrans[id].dscpt2}~</p>
                <p className="pt-2">{UrduTrans[id].dscpt3}~</p>
                <p className="pt-2">{UrduTrans[id].dscpt4}~</p>
              </div>
              <div className="py-2 text-end">
                <h2 className="text-md  md:text-lg font-medium">: مدت</h2>
                <p className="pt-2">{UrduTrans[id].Doration} ~</p>
              </div>
              <div>
                <Button color="blue" className="mt-4 w-full">
                  {UrduTrans[id].btn}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-8 flex flex-wrap gap-4 justify-center ">
        {CourseDtails.map((items, index) => (
          <Card
            key={index}
            data-aos="zoom-in-down"
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
            <Button
              color="blue"
              onClick={(e) => {
                setid(index);
                sethid("flex");
              }}
              key={index}
            >
              Details
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
