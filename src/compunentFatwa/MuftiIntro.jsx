import React from "react";
import { FaCircleCheck, FaClock, FaShieldHalved } from "react-icons/fa6";
import zeeshanPic from "../assets/logo/muftizeeshan.png";

const HADEES = [
  {
    arabic: "إِنَّ الْعُلَمَاءَ وَرَثَةُ الأَنْبِيَاءِ",
    translation:
      "Indeed, the scholars are the heirs of the Prophets.",
    reference: "Sunan Abi Dawud 3641",
  },
  {
    arabic: "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ",
    translation:
      "Whoever Allah wishes good for, He gives him understanding of the religion (Fiqh).",
    reference: "Sahih al-Bukhari 71 · Sahih Muslim 1037",
  },
];

export default function MuftiIntro() {
  return (
    <div className="bg-gray-200 pt-10 md:pt-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-2xl md:text-4xl font-serif text-blue-700">
          Ask Mufti
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2 mb-10">
          Have a question about Islamic rulings, Fiqh or everyday matters?
          Submit it below and our qualified Mufti will answer you, in the
          light of the Quran and Sunnah.
        </p>

        {/* Hadees cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {HADEES.map((h) => (
            <div
              key={h.reference}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center"
            >
              <p className="quranic-text text-blue-950 break-words">
                {h.arabic}
              </p>
              <p className="text-gray-700 text-sm md:text-base mt-3 italic">
                “{h.translation}”
              </p>
              <p className="text-blue-950 text-xs font-bold uppercase tracking-wide mt-3">
                {h.reference}
              </p>
            </div>
          ))}
        </div>

        {/* Meet your Mufti */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 mb-10">
          <img
            src={zeeshanPic}
            alt="Mufti Zeeshan"
            className="flex-shrink-0 w-20 h-20 rounded-full object-cover border-2 border-blue-950"
          />
          <div className="text-center sm:text-left">
            <h2 className="font-bold text-lg text-gray-900">Mufti Zeeshan Hanafi</h2>
            <p dir="rtl" className="quranic-text text-blue-950">
              مفتی زیشان حنفی
            </p>
            <p className="text-blue-950 text-sm font-semibold mt-1">
              Most Senior Teacher — Fiqh &amp; Fatwa
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Your question will be reviewed and answered by Mufti Zeeshan,
              our most senior scholar with 10+ years of experience in Fiqh
              and Fatwa and a certified Sharia Auditor, grounded in the
              Quran, Hadees and the rulings of our trusted scholars.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-4">
              <span className="flex items-center gap-2 text-sm text-gray-700">
                <FaCircleCheck className="text-blue-950" />
                Verified Islamic scholar
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-700">
                <FaShieldHalved className="text-blue-950" />
                Certified Sharia Auditor
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-700">
                <FaClock className="text-blue-950" />
                Reply within 10 days
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
