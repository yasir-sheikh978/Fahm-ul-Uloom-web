import React, { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import imageCompression from "browser-image-compression";
// import { CgNametag } from "react-icons/cg";

const CustomForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [img, setimg] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  // const [idd, setdata] = useState({name:"zain"});

  
  


  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Compress the image
        const options = {
          maxSizeMB: 0.05, // Target size: 50KB
          maxWidthOrHeight: 800, // Maintain good resolution while reducing size
          useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);

        // Convert the compressed file to Base64
        const reader = new FileReader();
        reader.onloadend = () => {
          setimg(reader.result); // Store the compressed image as Base64
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        // console.error("Error compressing image:", error);
      }
    }
  };
  // const myArray = ["Item 1", "Item 2", "Item 3"];
  // const idd = myArray.join(", ");
  // console.log(idd);

  const handleSubmit = (e) => {

    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name,
      email,
      phoneNumber,
      message,
      img,
    };

    const dummy = "Thank you for contacting us! We’ve received your Question, and you can expect a reply within 10 days ."
    const dummy2 = "If you need a quick fatwa, please contact us at this number: 03009214180"

    emailjs.send(
        'service_moxew3c',      // Replace with your EmailJS Service ID
        'template_71wdf83',      // Replace with your EmailJS Template ID
        templateParams,
        'cXCGc231ud9jHkTt9'           // Replace with your EmailJS User ID
      )

    .then(
      (response) => {
        // console.log('Message sent successfully!', response.status, response.text);
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
        if (fileInputRef.current) fileInputRef.current.value = "";
        setimg(null);
        
        // Send auto-reply
        emailjs.send(
          'service_moxew3c',      // Replace with your EmailJS Service ID
          'template_7bx3fwl',   // Replace with Template ID for auto-reply
            { email,dummy,dummy2,name },               // Only the user's email is required here
            'cXCGc231ud9jHkTt9'           // Same User ID/Public Key
          )
  
        .then((response) => {
          // console.log('Auto-reply sent successfully!', response.status, response.text);
          alert('Your message was sent! You will receive a confirmation email shortly.');
        })
        .catch((error) => console.error('Auto-reply failed...', error))
        .finally(() => setLoading(false));
      },
      (error) => {
        // console.error('Failed to send message...', error);
        alert("Variables size limit. The maximum allowed variables size is 50Kb",error);
        setLoading(false);
      }
    );
  };

  return (
    <div className="w-[85vw] sm:w-[70vw] mx-auto p-8 my-10 bg-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Ask Your Quetion</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            placeholder='Enter Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-[100%] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-[100%] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder="Please enter WhatsApp number"
            className="w-[100%] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            rows="5"
            value={message}
            placeholder='Ask Your Question'
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-[100%] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <h1 className='text-center'>
          Or
        </h1>
        <div>
          <label htmlFor="img" className="block text-sm font-medium text-gray-700 mb-1">Img</label>
          <input
            id="img"
            type='file'
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            
            className="w-[100%] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        <button
          type="submit"
          className="w-[100%] bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
