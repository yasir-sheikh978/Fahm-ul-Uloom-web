import React, { useState } from "react";
import emailjs from 'emailjs-com';
// import { AiFillEnvironment } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
      const [loading, setLoading] = useState(false);
      const [status, setStatus] = useState('');
      const Navigate = useNavigate();

  const Fees = () => {
    Navigate("/courseone");
  };
     
    
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    sessionType: "",
    education: "Matric", 
    mode: "online", 
    Environment: "Seprate", 
  });

  const [isPolicyChecked, setIsPolicyChecked] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    // Handle checkbox state
    const handleCheckboxChange = (e) => {
        setIsPolicyChecked(e.target.checked);
      };

      

      const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isPolicyChecked) {
          alert("Please confirm that you have read all the policy and fees structure.");
          return;
        }
       
        if (formData.sessionType == "Select Course") {
          alert("Please Select Your Course")
        }else{
    
    
        setLoading(true);
        
        e.preventDefault();
        setStatus('Sending....');
        try {
            const response = await fetch('https://email-tem-one.vercel.app/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                
            });
    
            if (response.ok) {
              formData.firstName= "",
              formData.lastName= "",
              formData.email= "",
              formData.whatsapp= "",
              formData.phone= "",
              formData.country= "",
              formData.city= "",
              formData.address= "",
              formData.sessionType= "",
              setLoading(false);
                setStatus('Auto-reply email sennt successfully!');
            } else {
              setLoading(false);
                throw new Error('Failed to send the email.');
            }


        } catch (error) {
            console.error(error);
            setLoading(false);
            setStatus('Failed to send the email.');
        }
      }
    
    };
    

  return (
    <div className="h-fit py-20 flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full"
      >
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Registration Form
        </h2>

        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* WhatsApp and Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-gray-700">WhatsApp Number</label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter WhatsApp number"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone number"
            />
          </div>
        </div>

        {/* Country and City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter country"
            />
          </div>
          <div>
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter city"
            />
          </div>
        </div>

        {/* Complete Address */}
        <div className="mt-4">
          <label className="block text-gray-700">Complete Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your complete address"
          ></textarea>
        </div>

        {/* Session Type Dropdown */}
        <div className="mt-4">
  <label className="block text-gray-700">Session</label>
  <select
  required
    name="sessionType"
    value={formData.sessionType}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Select Course</option>
    <option value="Norani Qaida">Norani Qaida</option>
    <option value="Nazra e Quran">Nazra e Quran</option>
    <option value="Hifzul Quran">Hifzul Quran</option>
    <option value="Tajweed e Quran Course">Tajweed e Quran Course</option>
    <option value="Tafseer e Quran Course">Tafseer e Quran Course</option>
    <option value="Hadees e Rasool Course">Hadees e Rasool Course</option>
    <option value="Namaaz Course">Namaaz Course</option>
    <option value="Ahkam-e-Tijarat">Ahkam-e-Tijarat</option>
    <option value="Islamic Banking Course">Islamic Banking Course</option>
    <option value="Aqaid Course">Aqaid Course</option>
    <option value="Radd e Ilhad">Radd e Ilhad</option>
    <option value="Tayari Ramzan Course">Tayari Ramzan Course</option>
    <option value="Aqidah Khatm e Nabuwat">Aqidah Khatm e Nabuwat</option>
    <option value="Seerat e Mustafa Course">Seerat e Mustafa Course</option>
    <option value="Ahkam e Qurbani Course">Ahkam e Qurbani Course</option>
    <option value="Dar e Nizami (Alim Course)">Dar e Nizami (Alim Course)</option>
    <option value="One Year Alim Diploma">One Year Alim Diploma</option>
  </select>
</div>


        {/* Education Dropdown */}
        <div className="mt-4">
          <label className="block text-gray-700">Education</label>
          <select
            name="education"
            required
            value={formData.education}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="High School"> Matric</option>
            <option value="Undergraduate">Intermediate</option>
            <option value="Graduate">Undergraduation</option>
            <option value="Postgraduate">Graduate</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        {/* Online/Onsite Radio Buttons */}
        <div className="mt-4">
          <label className="block text-gray-700 mb-2">Mode</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="mode"
                value="online"
                checked={formData.mode === "online"}
                onChange={handleChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-gray-700">Online</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="mode"
                value="onsite"
                checked={formData.mode === "onsite"}
                onChange={handleChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-gray-700">physically</span>
            </label>
          </div>
        </div>

        {/* Enviroment */}

        <div className="mt-4">
          <label className="block text-gray-700 mb-2">Environment </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="Environment"
                value="Seprate"
                checked={formData.Environment === "Seprate"}
                onChange={handleChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-gray-700">Seprate classes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="Environment"
                value="Combine"
                checked={formData.Environment === "Combine"}
                onChange={handleChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-gray-700">Combine classes</span>
            </label>
          </div>
        </div>

          {/* Checkbox for Policy Confirmation */}
          <div className="mt-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isPolicyChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox text-blue-500"
            />
            <span className="text-gray-700">
              I read all the <a className="text-blue-600 underline">policy</a> and <a className="text-blue-600 underline" onClick={Fees}>fees structure.</a>
            </span>
          </label>
        </div>

      

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
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
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
