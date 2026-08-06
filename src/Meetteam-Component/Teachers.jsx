import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBookQuran } from "react-icons/fa6";
import Navbar from "../compunentIndex/Navbar";
import Nab from "../compunentIndex/nabs";
import Whatsapp from "../compunentIndex/Whatsapp";
import Footer from "../compunentIndex/Footer";
import daniyalPic from "../assets/logo/daniyal.jpeg";
import touseefPic from "../assets/logo/Allamatouseef.png";
import yasirPic from "../assets/logo/Allamayasir.png";
import zeeshanPic from "../assets/logo/muftizeeshan.png";

// Subjects are our own placeholder assignment based on the course list —
// the academy can edit these per teacher.
const TEACHERS = [
  {
    name: "Allama Yasir Raza Qadri",
    title: "Founder",
    badge: "Senior Teacher",
    subject: "Alim Course (Dars-e-Nizami) & Overall Supervision",
    photo: yasirPic,
  },
  {
    name: "Allama Touseef Raza Qadri",
    arabicName: "علامہ توصیف رضا قادری",
    title: "Nazim-e-Taleemaat",
    badge: "Senior Teacher",
    subject: "Tajheez o Takfeen & Fiqh",
    photo: touseefPic,
  },
  {
    name: "Mufti Zeeshan Hanafi",
    arabicName: "مفتی زیشان حنفی",

    badge: "Most Senior Teacher",
    subject: "Fiqh & Fatwa",
    photo: zeeshanPic,
    bio: "10+ years of experience in Fiqh and Fatwa, and a certified Sharia Auditor.",
  },
  {
    name: "Mufti Hussain",
    // title: "Mufti",
    subject: "Hadees e Rasool",
  },
  {
    name: "Mufti Umair Syed",
    // title: "Mufti",
    subject: "Aqaid & Radd e Ilhad",
  },
  {
    name: "Allama Hamza Warsi",
    // title: "Allama",
    subject: "Tafseer e Quran",
  },
  {
    name: "Allama Ali",
    // title: "Allama",
    subject: "Tajweed e Quran",
  },
  {
    name: "Allama Jamal",
    // title: "Allama",
    subject: "Nazra e Quran & Norani Qaida",
  },
  {
    name: "Allama Muneeb",
    // title: "Allama",
    subject: "Hifzul Quran",
  },
  {
    name: "Allama Daniyal Raza Qadri",
    arabicName: "علامہ دانیال رضا قادری",
    subject: "Seerat e Mustafa & Namaaz Course",
    photo: daniyalPic,
    bio: "First batch passout of Fahm-ul-Uloom — studied here himself and graduated as 1st Position Holder.",
  },
];

function initials(name) {
  return name
    .replace(/^(Allama|Mufti)\s+/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Teachers() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [previewTeacher, setPreviewTeacher] = useState(null);

  return (
    <div>
      <Navbar />
      <Whatsapp />
      <Nab />

      <div className="bg-gray-200 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center text-2xl md:text-4xl font-serif text-blue-700 mb-4">
            Our Teachers
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Meet the qualified teachers of Fahm-ul-Uloom, dedicated to
            teaching the Quran, Hadees, Fiqh and Islamic sciences with
            sincerity and knowledge.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEACHERS.map((teacher) => (
              <div
                key={teacher.name}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center hover:shadow-xl transition duration-300"
              >
                {teacher.photo ? (
                  <button
                    type="button"
                    onClick={() => setPreviewTeacher(teacher)}
                    className="mx-auto mb-4 block w-16 h-16 rounded-full overflow-hidden border-2 border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:opacity-90 transition"
                    aria-label={`View larger photo of ${teacher.name}`}
                  >
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ) : (
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-950 text-white flex items-center justify-center text-lg font-bold">
                    {initials(teacher.name)}
                  </div>
                )}
                <h2 className="font-bold text-gray-900">{teacher.name}</h2>
                {teacher.arabicName && (
                  <p dir="rtl" className="quranic-text text-blue-950 mt-1">
                    {teacher.arabicName}
                  </p>
                )}
                {teacher.title && (
                  <p className="text-blue-950 text-sm font-semibold mt-1">
                    {teacher.title}
                  </p>
                )}
                {teacher.badge && (
                  <span className="inline-block bg-blue-100 text-blue-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mt-2">
                    {teacher.badge}
                  </span>
                )}
                <p className="flex items-center justify-center gap-2 text-gray-600 text-sm mt-4">
                  <FaBookQuran className="text-blue-950 flex-shrink-0" />
                  {teacher.subject}
                </p>
                {teacher.bio && (
                  <p className="text-gray-500 text-xs italic mt-3 border-t border-gray-100 pt-3">
                    {teacher.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {previewTeacher && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75 px-4 py-6"
          onClick={() => setPreviewTeacher(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={previewTeacher.photo}
                alt={previewTeacher.name}
                className="w-full h-auto object-cover"
              />
              <button
                onClick={() => setPreviewTeacher(null)}
                className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-800 rounded-full w-9 h-9 text-2xl leading-none shadow"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="p-4 text-center">
              <h2 className="font-bold text-gray-900">{previewTeacher.name}</h2>
              <p className="text-blue-950 text-sm font-semibold">
                {previewTeacher.subject}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
