import React from 'react';
import './Loader.css'; // Add styles for the loader

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Loading, please wait...</p>
    </div>
  );
};

export default Loader;
