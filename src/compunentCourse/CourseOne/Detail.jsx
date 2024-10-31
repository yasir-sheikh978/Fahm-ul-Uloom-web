import React from 'react';
import CountUp from 'react-countup';
import { FaGraduationCap, FaBuilding, FaUser, FaBook } from 'react-icons/fa'; // Icons

function Statistics() {
  const stats = [
    { icon: <FaGraduationCap />, value: 31211, label: 'Certified Aalims' },
    { icon: <FaBuilding />, value: 1500, label: 'Branches' },
    { icon: <FaUser />, value: 124000, label: 'Male & Female Students' },
    { icon: <FaBook />, value: 13, label: 'Aalim Courses' },
  ];

  return (
    <div className=" py-10 px-4 bg-gray-300">
      <div data-aos="zoom-in" className=" bg-blue-950 py-6 container mx-auto flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center text-white">
            <div className="text-6xl mb-2">{stat.icon}</div>
            <CountUp end={stat.value} duration={5} separator="," className="text-4xl font-bold" />+
            <p className="mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
