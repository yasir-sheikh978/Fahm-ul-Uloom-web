import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import poster from "../assets/popup/islamicbanking.jpeg";

const SEEN_KEY = "islamic_banking_popup_seen";
const WHATSAPP_NUMBER = "923009214180";
const WHATSAPP_MESSAGE =
  "Assalam o Alaikum, I want details about the Islamic Banking awareness session on 13 November.";
// Stop showing the popup once the session (13 Nov 2026, 8:30 PM) is over
const EVENT_END = new Date("2026-11-13T23:59:59+05:00");

// Home page popup announcing the Islamic Banking awareness session.
function IslamicBankingPopup() {
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Don't fight with the class-invite popup (?join=1 from invitation emails)
    if (searchParams.get("join") === "1") return;
    if (new Date() > EVENT_END) return;
    // Show only once per browser session so it doesn't annoy on every visit
    if (sessionStorage.getItem(SEEN_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, [searchParams]);

  // Close with the Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && dismiss();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const dismiss = () => {
    sessionStorage.setItem(SEEN_KEY, "1");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/70 backdrop-blur-sm px-3 py-4"
      onClick={dismiss}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Islamic Banking awareness session"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#0f1f45] rounded-2xl shadow-2xl ring-2 ring-[#c9a54c] overflow-hidden"
        // Poster is 1131x1600 — size the card so the whole poster fits on screen
        style={{ width: "min(92vw, 30rem, calc((92vh - 7.5rem) * 0.707))" }}
      >
        <button
          onClick={dismiss}
          className="absolute top-2 right-2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full w-9 h-9 text-2xl leading-none shadow-lg"
          aria-label="Close"
        >
          &times;
        </button>

        <a href={poster} target="_blank" rel="noopener noreferrer" title="Open full-size poster">
          <img
            src={poster}
            alt="Islamic Banking: Fundamentals & Practical Aspects — 13 November 2026, 8:30 PM at Darul Uloom Shah Ahmed Raza"
            className="block w-full h-auto"
          />
        </a>

        <div className="p-3 sm:p-4 bg-[#0f1f45]">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg transition text-sm sm:text-base"
            >
              <FaWhatsapp className="text-lg" /> WhatsApp
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center justify-center gap-2 bg-[#c9a54c] hover:bg-[#b8933c] text-[#0f1f45] font-semibold py-2.5 rounded-lg transition text-sm sm:text-base"
            >
              <FaPhoneAlt /> Call Now
            </a>
          </div>
          <button
            onClick={dismiss}
            className="mt-2 w-full text-gray-300 hover:text-white text-xs sm:text-sm py-1"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

export default IslamicBankingPopup;
