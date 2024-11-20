import React from "react";
import pic from '../assets/WhatsApp.svg.png'
export default function Whatsapp(){

    function navigateToWhatsApp() {
        const phoneNumber = "03182320684"; // Replace with your WhatsApp number in international format, e.g., "923001234567"
        const message = "Hello, I would like to know more about your services."; // Optional: Replace with your default message
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappURL, "_blank");
      }
      
    return(
        <div className="w-full h-20 flex justify-end fixed bottom-0 z-50">
            <a href="https://wa.me/03182320684" target="_blank" onclick="navigateToWhatsApp()">

<img src={pic} alt="whatsapp"  className="h-20 "/>
</a>

        </div>
    )
}