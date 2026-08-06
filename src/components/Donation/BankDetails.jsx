import React, { useState } from "react";
import {
  FaMobileScreenButton,
  FaBuildingColumns,
  FaRegCopy,
  FaCheck,
} from "react-icons/fa6";

const ACCOUNT_TITLE = "Sheikh Muhammad Yasir Qadri";

const PAYMENT_METHODS = [
  {
    icon: FaMobileScreenButton,
    label: "Easypaisa / NayaPay",
    value: "0300 9214180",
    raw: "03009214180",
  },
  {
    icon: FaBuildingColumns,
    label: "Meezan Bank — Account Number",
    value: "0109 6105 18",
    raw: "0109610518",
    extra: "Branch Code: 9985",
  },
];

export default function BankDetails() {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (raw) => {
    try {
      await navigator.clipboard.writeText(raw);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = raw;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(raw);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div id="bank-details" className="bg-gray-200 py-10 md:py-16 px-4 scroll-mt-24">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
          Donate via Easypaisa or Bank Transfer
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Prefer a direct transfer? Send your donation using the details
          below — for donors inside and outside Pakistan.
        </p>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-blue-50 border-b border-gray-200 px-5 py-3 text-center">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
              Account Title
            </p>
            <p className="text-blue-950 font-bold">{ACCOUNT_TITLE}</p>
          </div>
          <div className="divide-y divide-gray-100">
          {PAYMENT_METHODS.map(({ icon: Icon, label, value, raw, extra }) => (
            <div
              key={label}
              className="flex items-center justify-between gap-4 p-5"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-blue-950 text-white">
                  <Icon />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-gray-900 font-bold text-lg tracking-wide break-all">
                    {value}
                  </p>
                  {extra && (
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      {extra}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleCopy(raw)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition ${
                  copied === raw
                    ? "bg-green-600 text-white"
                    : "bg-blue-950 text-white hover:bg-blue-800"
                }`}
              >
                {copied === raw ? (
                  <>
                    <FaCheck /> Copied
                  </>
                ) : (
                  <>
                    <FaRegCopy /> Copy
                  </>
                )}
              </button>
            </div>
          ))}
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          After sending, please share your transaction screenshot on{" "}
          <a
            href="https://wa.me/923009214180"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-950 font-semibold hover:underline"
          >
            WhatsApp
          </a>{" "}
          so we can confirm your donation.
        </p>
      </div>
    </div>
  );
}
