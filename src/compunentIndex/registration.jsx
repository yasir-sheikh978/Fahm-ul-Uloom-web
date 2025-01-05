import React, { useState } from "react";
import emailjs from 'emailjs-com';

function RegistrationForm() {
      const [loading, setLoading] = useState(false);
    
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    sessionType: "Q%A Session On E-Commerce",
    education: "High School", 
    mode: "online", 
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    const emails = formData.email;
    const names = formData.firstName;

    const courseDummy = "Thank you for contacting us! We’ve received your Details.";
    const courseDummy2 = "Now You Registered For Our New Course 'Q&A Session On E-Commerce'.";
    const courseDummy3 = "Timing: After Isha on 11 Jan Saturday 2025 (8:15pm to 9:45pm).";
    const courseDummy4 = "For online participation, you will receive a link via WhatsApp.";

    emailjs
      .send(
        "service_moxew3c", // Replace with your EmailJS Service ID
        "template_71wdf83", // Replace with your EmailJS Template ID
        formData,
        "cXCGc231ud9jHkTt9" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          emailjs
            .send(
              "service_moxew3c", // Replace with your EmailJS Service ID
              "template_7bx3fwl", // Replace with Template ID for auto-reply
              { emails, names, courseDummy, courseDummy2, courseDummy3, courseDummy4 },
              "cXCGc231ud9jHkTt9" // Replace with the same User ID
            )
            .then(() => {
              alert("Your message was sent! You will receive a confirmation email shortly.");
              setLoading(false); // Stop loading after success
            })
            .catch((error) => {
              console.error("Auto-reply failed...", error);
              alert("Failed to send auto-reply. Please try again.");
              setLoading(false);
            });
        },
        (error) => {
          console.error("Failed to send message...", error);
          alert("Failed to send message. Please try again.");
          setLoading(false); // Stop loading after failure
        }
      );
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
    <option value="Q%A Session On E-Commerce">Q%A Session On E-Commerce</option>

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
