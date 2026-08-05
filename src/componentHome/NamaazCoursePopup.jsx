import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import courseImg from "../assets/courseOne/Tajhiz-O-Takfeen.png";

const COURSE_NAME = "Tajheez o Takfeen Course";

// Promotional popup shown on the home page announcing a course.
// The Register button opens the registration form with the course locked in.
function NamaazCoursePopup() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Don't fight with the class-invite popup (?join=1 from invitation emails)
    if (searchParams.get("join") === "1") return;
    // Show only once per browser session so it doesn't annoy on every visit
    if (sessionStorage.getItem("namaaz_popup_seen")) return;
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, [searchParams]);

  const dismiss = () => {
    sessionStorage.setItem("namaaz_popup_seen", "1");
    setOpen(false);
  };

  const handleRegister = () => {
    sessionStorage.setItem("namaaz_popup_seen", "1");
    setOpen(false);
    navigate(`/feeregistration?course=${encodeURIComponent(COURSE_NAME)}`);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black bg-opacity-60 px-4 py-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img
            src={courseImg}
            alt={COURSE_NAME}
            className="w-full h-36 sm:h-44 object-cover object-[20%_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/30 to-transparent"></div>
          <button
            onClick={dismiss}
            className="absolute top-3 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full w-9 h-9 text-2xl leading-none shadow"
            aria-label="Close"
          >
            &times;
          </button>
          <span className="absolute bottom-4 right-4 bg-green-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 sm:px-3 py-1 rounded-full shadow">
            Admissions Open
          </span>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-950">{COURSE_NAME}</h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            A 2-day course covering the correct Islamic method of Ghusl, Kafan,
            Janazah prayer and burial rites — an essential Fard-e-Kifayah skill
            — taught live on Google Meet.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs sm:text-sm">
            <span className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full border border-blue-100">
              8th &amp; 9th August
            </span>
            <span className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full border border-blue-100">
              3:00 PM – 4:00 PM
            </span>
            <span className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full border border-blue-100">
              On Google Meet
            </span>
          </div>

          <button
            onClick={handleRegister}
            className="mt-5 sm:mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-base sm:text-lg"
          >
            Register Now
          </button>

          <button
            onClick={dismiss}
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
