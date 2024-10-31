import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const OverviewCounter = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.5 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      transition={{ type: 'spring', stiffness: 100 }} 
      className="container p-3 "
    >
      <div className="max-w-full mx-auto my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white shadow-lg dark:bg-gray-800 dark:text-white/70">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-black/80 dark:text-white">
            <CountUp 
              enableScrollSpy={true}
              scrollSpyDelay={true}
              start={0} 
              end={234}
              suffix='+'
              duration={2.75}
            />
          </p>
          <p className="text-sm md:text-lg">Fundraisers</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-black/80 dark:text-white">
            <CountUp 
              enableScrollSpy={true}
              scrollSpyDelay={true}
              start={0} 
              end={56}
              suffix='+'
              duration={2.75}
            />
          </p>
          <p className="text-sm md:text-lg">Raisers</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-black/80 dark:text-white">
            <CountUp 
              enableScrollSpy={true}
              scrollSpyDelay={true}
              start={0} 
              end={234}
              suffix='k'
              duration={2.75}
            />
          </p>
          <p className="text-sm md:text-lg">Donations</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-black/80 dark:text-white">
            <CountUp 
              enableScrollSpy={true}
              scrollSpyDelay={true}
              start={-875.039} 
              end={160527.012}
              suffix='+'
              separator=''
              duration={2.75}
            />
          </p>
          <p className="text-sm md:text-lg">Volunteers</p>
        </div>
      </div>
    </motion.section>
  );
};

export default OverviewCounter;
