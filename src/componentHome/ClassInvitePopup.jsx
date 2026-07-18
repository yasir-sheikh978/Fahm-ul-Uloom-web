import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import logo from "../assets/logo/logoOne.png";

// Shown on the home page when a student arrives from the invitation email
// (link format: /?join=1&session=...&course=...&meet=https://meet.google.com/...)
function ClassInvitePopup() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  const sessionName = searchParams.get("session") || "";
  const course = searchParams.get("course") || "";
  const meetLink = searchParams.get("meet") || "";

  // Only accept real Google Meet links so nobody can abuse the popup
  const isValidMeetLink = /^https:\/\/meet\.google\.com\//.test(meetLink);

  useEffect(() => {
    if (searchParams.get("join") === "1" && isValidMeetLink) {
      setOpen(true);
    }
  }, [searchParams, isValidMeetLink]);

  const handleClose = () => {
    setOpen(false);
    // Clean the URL so refreshing doesn't reopen the popup
    setSearchParams({}, { replace: true });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-[fadeIn_0.3s_ease]">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-6 px-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-3 right-4 text-white text-2xl leading-none hover:text-gray-200"
            aria-label="Close"
          >
            &times;
          </button>
          <img src={logo} alt="Fahm-ul-Uloom" className="h-16 mx-auto mb-2" />
          <h2 className="text-xl font-bold">Fahm-ul-Uloom</h2>
        </div>

        {/* Body */}
        <div className="p-6 text-center">
          <p className="text-lg font-semibold text-gray-800">
            Aap ki class / session start hone wala hai!
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4 text-left text-sm">
            {sessionName && (
              <p className="text-gray-700">
                <span className="font-semibold">Session:</span> {sessionName}
              </p>
            )}
            {course && (
              <p className="text-gray-700 mt-1">
                <span className="font-semibold">Course:</span> {course}
              </p>
            )}
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Neeche diye gaye button par click kar ke apni online class join karein.
          </p>

          <a
            href={meetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" />
            </svg>
            Join Google Meet
          </a>

          <button
            onClick={handleClose}
            className="mt-3 w-full text-gray-500 hover:text-gray-700 text-sm py-2"
          >
            Baad mein join karunga
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClassInvitePopup;
