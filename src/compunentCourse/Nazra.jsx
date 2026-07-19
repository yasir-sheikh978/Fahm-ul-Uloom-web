import React, { useState } from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import hafiz from "../assets/courseOne/hafiz.png";
import Nazra from "../assets/courseOne/nazra1.jpg";
import norani from "../assets/courseOne/norani.jpg";
import namaz from "../assets/courseOne/namaz.jpg";
import { useNavigate } from "react-router-dom";

export default function Course() {
  const Navigate = useNavigate();
  const register = ()=>{
      Navigate("/feeregistration");
  }


     
  const CourseDtails = [
    {
      name1: "Online Norani Qaida",
      btn: " Enroll Now",
      img: norani,
      dscpt1: "Foundation of Quranic Reading",
      dscpt2: "Correct Pronunciation and Tajweed",
      dscpt3: "Preparation for Quranic Recitation",
      dscpt4: "Course For Both Children And Adults",
      Doration:
        "Class 4 Days In A Week , Combine And Individual Classes Available",
    },
    {
      name1: "Namaaz Course",
      btn: " Enroll Now",
      img: namaz,
      dscpt1:
        "Learn the accurate postures, words, and actions for each part of Namaaz",
      dscpt2: "Understand the deeper meanings and significance of the prayer",
      dscpt3: "Tips for consistency, concentration, and devotion in Salah",
      dscpt4: "Opportunities to ask questions and clarify doubts",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
    },
    {
      name1: "Online Nazra e Quran",
      btn: " Enroll Now",
      img: Nazra,
      dscpt1: "Proper Pronunciation and Recitation",
      dscpt2: "Familiarity with Quranic Text",
      dscpt3: "Enhanced Focus and Discipline",
      dscpt4: "Course For Both Children And Adults",
      Doration:
        "Class 4 Days In A Week , Combine And Individual Classes Available",
    },
    {
      name1: "Online Hifzul Quran",
      btn: " Enroll Now",
      img: hafiz,
      dscpt1: "Cognitive Development",
      dscpt2: "Reward in the Hereafter",
      dscpt3: "Understanding of Islamic Teachings",
      dscpt4: "Course For Both Children And Adults",
      Doration:
        "Class 4 Days In A Week , Combine And Individual Classes Available",
    },
  ];
  const UrduTrans = [
    {
      name1: "  ناظرہ قرآن کورس",
      btn: " Enroll Now",
      img: norani,
      dscpt1: "قرآنی پڑھائی کی بنیاد",
      dscpt2: "صحیح تلفظ اور تجوید",
      dscpt3: "قرآن کی تلاوت کی تیاری",
      dscpt4: "یہ کورس بچوں اور بڑوں دونوں کے لیے ہے",
      Doration: "ہفتے میں 4 دن کلاس، اجتماعی اور انفرادی کلاسز دستیاب ہیں",
    },
    {
      name1: "نماز کورس",
      btn: " Enroll Now",
      img: namaz,
      dscpt1: "نماز کے ہر رکن کے درست انداز، الفاظ اور حرکات کو سیکھنا",
      dscpt2: "نماز کے گہرے معانی اور اہمیت کو سمجھنا",
      dscpt3: "نماز میں توجہ، استقامت اور خشوع حاصل کرنے کے طریقے",
      dscpt4: "سوالات پوچھنے اور وضاحت حاصل کرنے کے مواقع",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
    },
    {
      name1: "  نورانی قاعدہ کورس",
      btn: " Enroll Now",
      img: Nazra,
      dscpt1: "صحیح تلفظ اور تجوید",
      dscpt2: "قرآنی متن سے واقفیت",
      dscpt3: "توجہ اور نظم و ضبط میں بہتری",
      dscpt4: "یہ کورس بچوں اور بڑوں دونوں کے لیے ہے",
      Doration: "ہفتے میں 4 دن کلاس، اجتماعی اور انفرادی کلاسز دستیاب ہیں",
    },
    {
      name1: "  ناظرہ قرآن کورس",
      btn: " Enroll Now",
      img: hafiz,
      dscpt1: "ذہنی ترقی",
      dscpt2: "آخرت میں انعامات",
      dscpt3: "اسلامی تعلیمات کی سمجھ",
      dscpt4: "یہ کورس بچوں اور بڑوں دونوں کے لیے ہے",
      Doration: "ہفتے میں 4 دن کلاس، اجتماعی اور انفرادی کلاسز دستیاب ہیں",
    },
  ];
  const [id, setid] = useState(0);
  const [hid, sethid] = useState("hidden");
  const [Urdu, seturdu] = useState("hidden");
  const [eng, seteng] = useState("flex");

  return (
    <div className="bg-gray-200">
       <h1 className="flex justify-center items-center bg-gray-200 text-center h-20  text-4xl font-semibold font-serif border-b-2 border-gray-400">
        COMMON COURSES
      </h1>
     
      <div
        className={`w-[100%] ${hid} h-screen  z-40 fixed bottom-0 backdrop-blur-sm justify-center items-center `}
      >
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 ${eng} items-center justify-center`}
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
                className="w-[100%] md:w-3/4 object-contain rounded-lg"
              />
            </div>

            {/* Course Details */}
            <div className="w-[100%] md:w-1/2  px-4">
              <div className="text-center md:text-left ">
                <h1 className="text-lg md:text-xl font-semibold font-serif mb-4">
                  {CourseDtails[id].name1}
                </h1>
                {/* <h1 className="text-lg md:text-xl md:text-end font-semibold font-serif mb-4">{CourseDtails[id].name2}</h1> */}
              </div>
              <div>
                <h2 className="text-md md:text-lg font-medium">
                  Some Feature :
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
                <Button color="blue" className="mt-4 w-[100%]" onClick={register}>
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
                className="w-[100%] md:w-3/4 object-contain rounded-lg"
              />
            </div>

            {/* Course Details */}
            <div className="w-[100%] md:w-1/2  px-4">
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
                <h2 className="text-md  md:text-lg font-medium">:مدت</h2>
                <p className="pt-2">{UrduTrans[id].Doration}~</p>
              </div>
              <div>
                <Button color="blue" className="mt-4 w-[100%]" onClick={register}>
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
            <p className="w-[100%] text-gray-700 dark:text-gray-400">
              {items.dscpt1}
            </p>
            <p className="w-[100%] text-gray-700 dark:text-gray-400">
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
