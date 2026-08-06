import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChalkboardUser,
  FaVenusMars,
  FaChartLine,
  FaWifi,
  FaCertificate,
  FaChildren,
  FaSackDollar,
  FaTags,
  FaArrowRight,
} from "react-icons/fa6";

const FEATURES = [
  { icon: FaChalkboardUser, text: "Experienced Instructors" },
  { icon: FaVenusMars, text: "Male and Female Tutors Available" },
  { icon: FaChartLine, text: "Monthly Performance Reports" },
  { icon: FaWifi, text: "Good Internet Service" },
  { icon: FaCertificate, text: "Certificate Offered Upon Course Completion" },
  { icon: FaChildren, text: "Courses for Both Children and Adults" },
  { icon: FaSackDollar, text: "Affordable Fees" },
  { icon: FaTags, text: "Discount Packages" },
];

const FEE_ROWS = [
  {
    name: "Norani Qaida",
    combine: "$15 / month",
    separate: "$20 / month",
    courseName: "Norani Qaida",
    description:
      "The foundation course for correct Quranic reading — learn the Arabic alphabet, correct pronunciation and basic Tajweed rules.",
  },
  {
    name: "Nazra Quran",
    combine: "$20 / month",
    separate: "$30 / month",
    courseName: "Nazra e Quran",
    description:
      "Learn to recite the complete Quran with proper pronunciation, fluency and discipline, for children and adults alike.",
  },
  {
    name: "Hifzul Quran",
    combine: "$35 / month",
    separate: "$40 / month",
    courseName: "Hifzul Quran",
    description:
      "Memorize the Holy Quran under the guidance of qualified teachers, with structured daily revision.",
  },
  {
    name: "Short Courses",
    combine: "$50 – $60 / course",
    separate: null,
    link: "/courseone#short-courses",
    linkLabel: "View Short Courses",
    description:
      "Focused courses such as Tajweed, Tafseer, Hadees, Aqaid, Seerat and more — see the full list and pick a course to enroll.",
  },
  {
    name: "Long Courses",
    combine: "$40 – $50 / month",
    separate: null,
    link: "/coursetwo#long-courses",
    linkLabel: "View Long Courses",
    description:
      "Multi-year programs including Dars-e-Nizami (Alim Course) and the One Year Alim Diploma for in-depth Islamic scholarship.",
  },
];

export default function Fees() {
  const navigate = useNavigate();
  const [selectedFee, setSelectedFee] = useState(null);

  const handleCTA = (fee) => {
    setSelectedFee(null);
    if (fee.courseName) {
      navigate(`/feeregistration?course=${encodeURIComponent(fee.courseName)}`);
    } else if (fee.link) {
      navigate(fee.link);
    }
  };

  return (
    <div className="bg-gray-200">
      <div className="px-4 md:px-8 lg:px-16 py-4">
        <h1 className="w-[100%] text-center text-2xl md:text-4xl font-serif text-blue-700 pt-6">
          Why Choose Our Academy
        </h1>

        <p className="text-base md:text-xl text-center max-w-3xl mx-auto py-4 md:py-6 text-gray-700">
          Choosing our platform for your educational journey means accessing a
          diverse range of courses designed to enrich your knowledge and
          skills.
        </p>

        <h2 className="py-6 md:py-10 text-center font-serif w-[100%] text-2xl md:text-4xl text-blue-700">
          Some Features of Our Academy
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto pb-4">
          {FEATURES.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-blue-950 text-white flex items-center justify-center text-xl">
                <Icon />
              </div>
              <p className="font-semibold text-gray-800 text-sm md:text-base">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="py-12 text-center font-serif w-[100%] text-4xl text-blue-700">
        Fee Structure
      </h2>

      <div className="overflow-x-auto mx-2 md:mx-8 rounded-2xl shadow-xl border border-gray-200">
        <table className="w-full min-w-[560px] font-serif border-collapse">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="p-4 md:p-5 text-left text-sm sm:text-base md:text-xl font-bold tracking-wide">
                Courses
              </th>
              <th className="p-4 md:p-5 text-sm sm:text-base md:text-xl font-bold tracking-wide">
                Combine Class
              </th>
              <th className="p-4 md:p-5 text-sm sm:text-base md:text-xl font-bold tracking-wide">
                Separate Class
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {FEE_ROWS.map((row, index) => (
              <tr
                key={row.name}
                onClick={() => setSelectedFee(row)}
                className={`text-center border-b border-gray-100 last:border-b-0 cursor-pointer transition-colors hover:bg-blue-50 ${
                  index % 2 === 1 ? "bg-gray-50" : ""
                }`}
              >
                <td className="p-4 md:p-5 text-left text-sm sm:text-base md:text-lg font-bold text-gray-800">
                  {row.name}
                </td>
                <td className="p-4 md:p-5 text-sm sm:text-base md:text-lg font-bold text-blue-950">
                  {row.combine}
                </td>
                <td className="p-4 md:p-5">
                  {row.separate ? (
                    <span className="text-sm sm:text-base md:text-lg font-bold text-blue-950">
                      {row.separate}
                    </span>
                  ) : (
                    <span className="inline-block bg-gray-100 text-gray-500 text-xs sm:text-sm md:text-base px-3 py-1 rounded-full font-medium">
                      Not Available
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="max-w-2xl mx-auto text-center text-blue-950 font-serif italic text-lg md:text-2xl leading-relaxed py-16 px-4">
        “Join us to benefit from a community of learners dedicated to
        personal and spiritual growth through education.”
      </p>

      {selectedFee && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70 px-4 py-6"
          onClick={() => setSelectedFee(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-blue-950 px-6 py-5 flex items-start justify-between">
              <h2 className="text-xl font-bold text-white">{selectedFee.name}</h2>
              <button
                onClick={() => setSelectedFee(null)}
                className="text-white text-3xl leading-none hover:text-blue-200"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-700 mb-6">{selectedFee.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between bg-blue-50 rounded-xl p-4">
                  <span className="text-sm font-semibold text-gray-700">
                    Combine Class
                  </span>
                  <span className="font-bold text-blue-950">{selectedFee.combine}</span>
                </div>
                <div className="flex items-center justify-between bg-blue-50 rounded-xl p-4">
                  <span className="text-sm font-semibold text-gray-700">
                    Separate Class
                  </span>
                  {selectedFee.separate ? (
                    <span className="font-bold text-blue-950">{selectedFee.separate}</span>
                  ) : (
                    <span className="text-gray-500 text-sm font-medium">Not Available</span>
                  )}
                </div>
              </div>

              <button
                onClick={() => handleCTA(selectedFee)}
                className="group inline-flex items-center justify-center gap-2 w-full bg-blue-950 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition"
              >
                {selectedFee.courseName ? "Register Now" : selectedFee.linkLabel}
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
