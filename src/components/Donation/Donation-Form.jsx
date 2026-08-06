import React, { useState } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaLocationDot,
  FaSackDollar,
} from 'react-icons/fa6';
import { API_BASE } from '../../config/api';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [lastname, setLastName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/api/donations/intent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, lastname, email, address, amount }),
      });
      if (!res.ok) throw new Error('Failed to send');

      setSubmitted(true);
      setName('');
      setLastName('');
      setEmail('');
      setAddress('');
      setAmount('');

      // Guide the donor to the Easypaisa/Bank details to complete the transfer
      document
        .getElementById('bank-details')
        ?.scrollIntoView({ behavior: 'smooth' });
    } catch {
      setError('Something went wrong. Please try again or contact us on WhatsApp.');
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <div className="w-[90vw] sm:w-[83vw] md:w-[40vw] max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-blue-950 px-6 py-5">
        <h2 className="text-2xl font-bold text-white">Donate Now</h2>
        <p className="text-blue-200 text-sm mt-1">
          Every contribution helps a student learn.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="name">
              Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="lastname">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="address">
            Address
          </label>
          <div className="relative">
            <FaLocationDot className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="amount">
            Donation Amount ($)
          </label>
          <div className="relative">
            <FaSackDollar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="number"
              min="1"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {submitted && (
          <div className="p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
            Thank you! We've been notified — please complete your donation
            using the Easypaisa/Bank details below.
          </div>
        )}
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm font-medium">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-950 py-3 rounded-lg hover:bg-blue-800 transition text-white font-semibold shadow-lg shadow-blue-950/20 disabled:opacity-60"
        >
          {loading ? 'Sending...' : 'Notify Us & Continue'}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
