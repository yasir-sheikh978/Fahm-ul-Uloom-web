import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import namaz from "../assets/courseOne/namaz.jpg";
import logo from "../assets/logo/logoOne.png";

// Promotional popup shown on the home page announcing the Namaaz Course.
// The Register button opens the registration form with the course locked in.
function NamaazCoursePopup() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Don't fight with the class-invite popup (?join=1 from invitation emails)
    if (searchParams.get("join") === "1") return;
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, [searchParams]);

  const handleRegister = () => {
    setOpen(false);
    navigate("/feeregistration?course=Namaaz%20Course");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black bg-opacity-60 px-4 py-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img src={namaz} alt="Namaaz Course" className="w-full h-36 sm:h-44 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/30 to-transparent"></div>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full w-9 h-9 text-2xl leading-none shadow"
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={logo}
            alt="Fahm-ul-Uloom"
            className="absolute bottom-3 left-4 h-10 sm:h-12 bg-white rounded-full p-1 shadow"
          />
          <span className="absolute bottom-4 right-4 bg-green-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 sm:px-3 py-1 rounded-full shadow">
            Admissions Open
          </span>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-950">Namaaz Course</h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Learn the accurate postures, words, and actions of Salah — with its
            deeper meanings — from qualified teachers, online at your doorstep.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs sm:text-sm">
            <span className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full border border-blue-100">
              For Children &amp; Adults
            </span>
            <span className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full border border-blue-100">
              Online Classes
            </span>
          </div>

          <button
            onClick={handleRegister}
            className="mt-5 sm:mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-base sm:text-lg"
          >
            Register Now
          </button>

          <button
            onClick={() => setOpen(false)}
            className="mt-3 w-full text-gray-500 hover:text-gray-700 text-sm py-2"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

export default NamaazCoursePopup;
