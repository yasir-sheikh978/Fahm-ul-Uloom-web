import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa6";
import Navbar from "../compunentIndex/Navbar";
import Nab from "../compunentIndex/nabs";
import Whatsapp from "../compunentIndex/Whatsapp";
import Footer from "../compunentIndex/Footer";
import hashirPic from "../assets/logo/Hashir.png";
import zainPic from "../assets/logo/zain.jpg";

const TEAM = [
  {
    name: "Muhammad Hashir Salman Rajput",
    role: "Junior Full Stack Developer",
    tagline: "React Native · Vibe Coding · Payment Integrations",
    initials: "HS",
    photo: hashirPic,
    summary:
      "Junior Full Stack & React Native Developer with 1+ years of professional experience delivering scalable web and mobile applications. Hands-on experience in payment integrations (Stripe, NMI), PostgreSQL, Laravel and Firebase.",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Laravel",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Stripe",
      "NMI",
    ],
    phone: "0316 1038075",
    phoneHref: "tel:03161038075",
    email: "hashirsalman78@gmail.com",
    github: "github.com/hashirsalman78",
    githubHref: "https://github.com/hashirsalman78",
    linkedin: "linkedin.com/in/hashir-rajput-93a208319",
    linkedinHref: "https://linkedin.com/in/hashir-rajput-93a208319",
  },
  {
    name: "Farzain Ghouri",
    role: "Senior Full Stack Developer & Team Lead",
    tagline: "React Native · Vibe Coding · Payment Integrations",
    initials: "FG",
    photo: zainPic,
    summary:
      "Full Stack & React Native Developer with 2+ years of professional experience delivering scalable web and mobile applications. Proven track record as Team Lead — mentoring junior developers and shipping production-quality software with AI-assisted tools.",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Laravel",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Stripe",
      "NMI",
    ],
    phone: "0318 2320684",
    phoneHref: "tel:03182320684",
    email: "farzain.khan007@gmail.com",
    github: "github.com/Farzainghouri",
    githubHref: "https://github.com/Farzainghouri",
    linkedin: "linkedin.com/in/farzain-khan-a51abb2a9",
    linkedinHref: "https://linkedin.com/in/farzain-khan-a51abb2a9",
  },
];

export default function IT() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [previewMember, setPreviewMember] = useState(null);

  return (
    <div>
      <Navbar />
      <Whatsapp />
      <Nab />

      <div className="bg-gray-200 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-2xl md:text-4xl font-serif text-blue-700 mb-4">
          Meet Our IT Team
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          The developers behind Fahm-ul-Uloom's website — building and
          maintaining the platform that powers our online education.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM.map((member) => (
            <div
              key={member.email}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-blue-950 text-white p-6 flex items-center gap-4">
                {member.photo ? (
                  <button
                    type="button"
                    onClick={() => setPreviewMember(member)}
                    className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-white hover:opacity-90 transition"
                    aria-label={`View larger photo of ${member.name}`}
                  >
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ) : (
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center text-xl font-bold">
                    {member.initials}
                  </div>
                )}
                <div>
                  <h2 className="text-lg md:text-xl font-bold leading-tight">
                    {member.name}
                  </h2>
                  <p className="text-blue-200 text-sm md:text-base font-medium">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs md:text-sm text-blue-900 font-semibold uppercase tracking-wide mb-3">
                  {member.tagline}
                </p>
                <p className="text-gray-700 text-sm md:text-base mb-5">
                  {member.summary}
                </p>

                <div className="mb-5">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2">
                    <FaCode className="text-blue-950" /> Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-50 text-blue-900 text-xs md:text-sm px-3 py-1 rounded-full border border-blue-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="mt-auto pt-4 border-t border-gray-100 space-y-2 text-sm md:text-base">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-950 transition"
                  >
                    <FaEnvelope className="text-blue-950 flex-shrink-0" />
                    {member.email}
                  </a>
                  <a
                    href={member.phoneHref}
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-950 transition"
                  >
                    <FaPhone className="text-blue-950 flex-shrink-0" />
                    {member.phone}
                  </a>
                  <a
                    href={member.githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-950 transition"
                  >
                    <FaGithub className="text-blue-950 flex-shrink-0" />
                    {member.github}
                  </a>
                  <a
                    href={member.linkedinHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-950 transition"
                  >
                    <FaLinkedin className="text-blue-950 flex-shrink-0" />
                    {member.linkedin}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      {previewMember && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75 px-4 py-6"
          onClick={() => setPreviewMember(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={previewMember.photo}
                alt={previewMember.name}
                className="w-full h-auto object-cover"
              />
              <button
                onClick={() => setPreviewMember(null)}
                className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-800 rounded-full w-9 h-9 text-2xl leading-none shadow"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="p-4 text-center">
              <h2 className="font-bold text-gray-900">{previewMember.name}</h2>
              <p className="text-blue-950 text-sm font-semibold">
                {previewMember.role}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
