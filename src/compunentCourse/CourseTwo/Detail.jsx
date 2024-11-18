import React from 'react';

function Stats() {
  const stats = [
    { id: 1, value: '31211+', label: 'Certified Aalims', icon: '🎓' },
    { id: 2, value: '1500+', label: 'Branches', icon: '🏢' },
    { id: 3, value: '124000+', label: 'Male & Female Students', icon: '📘' },
    { id: 4, value: '13+', label: 'Aalim Courses', icon: '🔠' },
  ];

  return (
    <div className='h-96 py-16 bg-gray-200' >
   <div className="bg-blue-950 text-white  py-10" data-aos="zoom-in">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center space-y-2">
            <span className="text-5xl">{stat.icon}</span>
            <h2 className="text-3xl font-bold">{stat.value}</h2>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Stats;
