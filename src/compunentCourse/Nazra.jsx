import React, { useState } from "react";
import { FaArrowRight, FaCircleCheck, FaClock } from "react-icons/fa6";
import hafiz from "../assets/courseOne/hafiz.png";
import Nazra from "../assets/courseOne/nazra1.jpg";
import norani from "../assets/courseOne/norani.jpg";
import namaz from "../assets/courseOne/namaz.jpg";
import tajheez from "../assets/courseOne/Tajhiz-O-Takfeen.png";
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
      name1: "Tajheez o Takfeen Course",
      btn: " Enroll Now",
      img: tajheez,
      dscpt1: "Correct Islamic method of Ghusl (bathing the deceased)",
      dscpt2: "Proper way of Kafan (shrouding)",
      dscpt3: "Rules of Janazah prayer and burial (Dafan)",
      dscpt4: "A 2-day short course on Google Meet, 3:00 PM to 4:00 PM",
      Doration:
        "2-Day Course on 8th & 9th August (Sat & Sun), 3:00 PM to 4:00 PM, via Google Meet",
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
      name1: "تجہیز و تکفین کورس",
      btn: " Enroll Now",
      img: tajheez,
      dscpt1: "میت کو غسل دینے کا صحیح اسلامی طریقہ",
      dscpt2: "کفن پہنانے کا درست طریقہ",
      dscpt3: "نماز جنازہ اور تدفین کے احکام",
      dscpt4: "گوگل میٹ پر دو روزہ کورس، دوپہر 3 بجے سے 4 بجے تک",
      Doration:
        "8 اور 9 اگست (ہفتہ و اتوار) دو روزہ کورس، دوپہر 3:00 تا 4:00، گوگل میٹ پر",
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
          Common Courses
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Our most popular courses for building a strong foundation in
          Quran and everyday Islamic practice.
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
                  {[activeCourse.dscpt1, activeCourse.dscpt2, activeCourse.dscpt3, activeCourse.dscpt4]
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
