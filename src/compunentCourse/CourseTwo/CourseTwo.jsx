import React, { useState } from "react";
import { FaArrowRight, FaCircleCheck, FaClock } from "react-icons/fa6";
import tajweed from "../../assets/coursetwo/alim.jpg";
import alim from "../../assets/coursetwo/alimtwo.jpg";
import { useNavigate } from "react-router-dom";

export default function Course() {

       const Navigate = useNavigate();
      const register = ()=>{
          Navigate("/feeregistration");
      }

  const CourseDtails = [
    {
      name1: "Dar e Nizami (Alim Course) ",
      btn: " Enroll Now",
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
      btn: " Enroll Now",
      img: alim,
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
      btn: " Enroll Now",
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
      btn: " Enroll Now",
      img: alim,
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
    <div id="long-courses" className="bg-gray-200 py-4 scroll-mt-24">
      <div className="text-center py-10 px-4">
        <h1 className="text-2xl md:text-4xl font-serif text-blue-700">
          Long Courses
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          In-depth, multi-year programs for students seeking a deep,
          scholarly grounding in Islamic sciences.
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
