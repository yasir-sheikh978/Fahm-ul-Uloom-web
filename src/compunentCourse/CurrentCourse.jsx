import React, { useState } from "react";
import { FaArrowRight, FaCircleCheck, FaClock } from "react-icons/fa6";
import post from "../assets/popup/post.jpg"
import { useNavigate } from "react-router-dom";
export default function Course() {
     const Navigate = useNavigate();
    const register = ()=>{
        // Navigate("/registration");
        alert("Admission Off")
    }



  const CourseDtails = [
    {
      name1: "Q%A Session On E-Commerce",
      img: post,
      dscpt1: "Online Trading And Marketing ",
      dscpt2: "Stock Market",
      dscpt3: "Bitcoin And Virtual Currencise",
      dscpt4: "Drop Shipping",
      dscpt5: "Freelancing And Commission",
      btn:"Admission Off",
      Doration:
        "One Day Program After Isha (8:15 to 9:45) 11 Jan Saturday",
    },
 
  
  ];
  const UrduTrans = [
    {
      name1: "  ناظرہ قرآن کورس",
      img: post,
      dscpt1: "قرآنی پڑھائی کی بنیاد",
      dscpt2: "صحیح تلفظ اور تجوید",
      dscpt3: "قرآن کی تلاوت کی تیاری",
      dscpt4: "یہ کورس بچوں اور بڑوں دونوں کے لیے ہے",
      dscpt5: "یہ کورس بچوں اور بڑوں دونوں کے لیے ہے",
      Doration: "ہفتے میں 4 دن کلاس، اجتماعی اور انفرادی کلاسز دستیاب ہیں",
      btn: "Admission Off"
    },
  
  ];
  const [id, setid] = useState(0);
  const [hid, sethid] = useState("hidden");
  const [Urdu, seturdu] = useState("hidden");
  const [eng, seteng] = useState("flex");

  const openDetails = (index) => {
    setid(index);
    sethid("flex");
  };
  const closeDetails = () => sethid("hidden");
  const toggleLanguage = () => {
    if (eng === "flex") {
      seteng("hidden");
      seturdu("flex");
    } else {
      seteng("flex");
      seturdu("hidden");
    }
  };

  const activeCourse = eng === "flex" ? CourseDtails[id] : UrduTrans[id];
  const isUrdu = eng === "hidden";

  return (
    <div className="bg-gray-200 py-4">
      <div className="text-center py-10 px-4">
        <h1 className="text-2xl md:text-4xl font-serif text-blue-700">
          Current Courses
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Special sessions and workshops happening right now — open to
          everyone.
        </p>
      </div>

      {hid !== "hidden" && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70 px-4 py-6"
          onClick={closeDetails}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-4 border-b border-gray-100">
              <button
                onClick={toggleLanguage}
                className="text-sm font-semibold border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50"
              >
                {isUrdu ? "English" : "اردو"}
              </button>
              <button
                onClick={closeDetails}
                className="text-3xl leading-none text-gray-400 hover:text-gray-700"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <div className={`flex flex-col md:flex-row gap-6 p-6 ${isUrdu ? "md:flex-row-reverse" : ""}`}>
              <img
                src={CourseDtails[id].img}
                alt={CourseDtails[id].name1}
                className="w-full md:w-2/5 h-56 md:h-64 object-cover rounded-2xl flex-shrink-0"
              />

              <div className={`flex-1 ${isUrdu ? "text-right" : "text-left"}`} dir={isUrdu ? "rtl" : "ltr"}>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {activeCourse.name1}
                </h2>

                <h3 className="text-sm font-bold text-blue-950 uppercase tracking-wide mb-2">
                  {isUrdu ? "فوائد" : "Course Benefits"}
                </h3>
                <ul className="space-y-2 mb-5">
                  {[
                    activeCourse.dscpt1,
                    activeCourse.dscpt2,
                    activeCourse.dscpt3,
                    activeCourse.dscpt4,
                    activeCourse.dscpt5,
                  ]
                    .filter(Boolean)
                    .map((point, i) => (
                      <li key={i} className={`flex items-start gap-2 text-gray-700 ${isUrdu ? "flex-row-reverse" : ""}`}>
                        <FaCircleCheck className="text-blue-950 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                </ul>

                <div className={`flex items-start gap-2 bg-blue-50 text-blue-950 rounded-xl p-4 mb-5 ${isUrdu ? "flex-row-reverse" : ""}`}>
                  <FaClock className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide">
                      {isUrdu ? "مدت" : "Duration"}
                    </p>
                    <p className="text-sm">{activeCourse.Doration}</p>
                  </div>
                </div>

                <button
                  onClick={register}
                  className="group inline-flex items-center justify-center gap-2 w-full bg-blue-950 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition"
                >
                  {activeCourse.btn}
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CourseDtails.map((items, index) => (
          <div
            key={index}
            data-aos="zoom-in-down"
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
          >
            <img
              src={items.img}
              alt={items.name1}
              className="w-full h-44 object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h5 className="font-bold text-lg text-gray-900 mb-2">
                {items.name1}
              </h5>
              <ul className="space-y-1.5 mb-4">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCircleCheck className="text-blue-950 mt-0.5 flex-shrink-0 text-xs" />
                  {items.dscpt1}
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCircleCheck className="text-blue-950 mt-0.5 flex-shrink-0 text-xs" />
                  {items.dscpt2}
                </li>
              </ul>
              <button
                onClick={() => openDetails(index)}
                className="mt-auto w-full bg-blue-950 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-lg transition"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
