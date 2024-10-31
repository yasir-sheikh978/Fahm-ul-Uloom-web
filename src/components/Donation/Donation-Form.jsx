import React, { useState } from 'react';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [lastname, setLastName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission logic here
    console.log({ amount, name, email,lastname,address });
  };

  return (
    <div className="w-[70vw] md:w-[40vw] mx-auto p-4 bg-white rounded-lg  ">
      <h2 className="text-2xl font-bold mb-4 text-black">Donate Now</h2>
      <form onSubmit={handleSubmit} className="space-y-1">
        <div>
          <label className="block text-sm font-medium mb-1 text-black" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-black" htmlFor=" Lastname"> Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-black" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-black" htmlFor="address">Address</label>
          <input
            type="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-black" htmlFor="amount">Donation Amount ($)</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500  p-2 rounded-md hover:bg-blue-600 transition text-black"
        >
          Donate
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
