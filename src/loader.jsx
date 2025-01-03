import React from 'react';
// import './loader.css'; // Add styles for the loader
import logo from './assets/logo/logothree.png'

const Loader = () => {
  return (
    <div className="h-screen flex justify-center flex-col items-center text-black w-full">
        <div><img src={logo} width={200} alt="" /></div>
      <div className="spinner"></div>
      <p>Loading, please wait...</p>
    </div>
  );
};

export default Loader;
