import React from "react";
import pic from "../assets/WhatsApp.svg.png";

export default function Whatsapp() {
  function navigateToWhatsApp() {
    const phoneNumber = "923009214180"; // WhatsApp number in international format
    const message = "Hello, I would like to know more about your services."; // Default message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  }

  return (
    <div className="w-[100%] h-20 px-4 flex justify-end fixed bottom-0 z-50" >
      {/* Chat Box */}
      <div className="absolute bottom-20 right-4 bg-green-100 border border-green-500 rounded-lg p-2 shadow-lg">
        <p className="text-gray-800 font-medium">How can I help you?</p>
      </div>

      {/* WhatsApp Icon */}
      <div className="cursor-pointer" onClick={navigateToWhatsApp}>
        <img src={pic} alt="whatsapp" className="h-16 sm:h-20" />
      </div>
    </div>
  );
}
