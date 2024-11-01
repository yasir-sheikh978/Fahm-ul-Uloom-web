import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const CustomForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name,
      email,
      phoneNumber,
      message,
    };

    emailjs.send(
        'service_a9ux9eg',      // Replace with your EmailJS Service ID
        'template_jyqxxdm',      // Replace with your EmailJS Template ID
        templateParams,
        'Qisr1QFqKu6kGqHui'           // Replace with your EmailJS User ID
      )

    .then(
      (response) => {
        console.log('Message sent successfully!', response.status, response.text);
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
        
        // Send auto-reply
        emailjs.send(
            'service_a9ux9eg',      // Same EmailJS Service ID
            'template_60elaj9', // Replace with Template ID for auto-reply
            { email,name },               // Only the user's email is required here
            'Qisr1QFqKu6kGqHui'           // Same User ID/Public Key
          )
  
        .then((response) => {
          console.log('Auto-reply sent successfully!', response.status, response.text);
          alert('Your message was sent! You will receive a confirmation email shortly.');
        })
        .catch((error) => console.error('Auto-reply failed...', error))
        .finally(() => setLoading(false));
      },
      (error) => {
        console.error('Failed to send message...', error);
        alert('Failed to send your message. Please try again later.');
        setLoading(false);
      }
    );
  };

  return (
    <div className="w-[85vw] sm:w-[70vw] mx-auto p-8 my-10 bg-gray-300 rounded-lg shadow-lg">
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
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
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
