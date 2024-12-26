import { motion} from 'framer-motion'
import React from 'react'
const fadeanimation = (delay) =>{
    return {
        initial:{
            opacity: 0,
          },
          animate:{
            opacity: 1,
            y:0,
            transition: {
              duration: 0.6,
              delay: delay,
              ease: "easeInOut",
            },
          },
    }
}

const OurVision = () => {
    return (
        <div className='container my-16 bg-white dark:bg-gray-900 dark:text-white'>
            <div className="grid cols-1 sm:grid-cols-2 gap-10">
                <motion.div variants={fadeanimation(0.5)} initial="initial" whileInView="animate" className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-green-800 dark:bg-slate-800'>
                    <h1 className='text-2xl font semibold text-center text-yellow-800'>Make your children scholars (Alim)</h1>
                    <p>
                    <p className="text-center font-semibold">
            :عن أبي هريرة رضي الله عنه قال رسول الله صلى الله عليه وسلم
            </p>
            <p className="quranic-text text-center">إِنَّ مِنْ أَبَرِّ صَدَقَاتِ الْمَرْءِ عَلَيْهِ أَنْ يُعَلِّمَ وَلَدَهُ وَيُدَّرِبَهُ عَلَى الْمَعَارِفِ وَيُفِيضَ عَلَيْهِ مِنْ أَنْوَاعِ الْعِلْمِ</p>
        
          <p className="font-semibold text-end">:ترجمہ</p>
          <p className="text-center">حضرت ابو ہریرہ رضی اللہ عنہ سے روایت ہے کہ رسول اللہ صلی اللہ علیہ وسلم نے فرمایا:</p>
          <p className="text-center">انسان پر سب سے بہترین صدقہ یہ ہے کہ وہ اپنے بچے کو علم سکھائے، اور اسے معارف کی تربیت دے، اور اسے علم کی مختلف قسموں سے نوازے</p>
                    </p>
                    {/* <a href='#'
                    className='inline-block hover:text-indigo-600	 border-b hover:border-blue'>Learn More</a> */}
                </motion.div>
                <motion.div variants={fadeanimation(0.4)} initial="initial" whileInView="animate" className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-yellow-500 dark:bg-slate-800'>
                <h1 className='text-2xl font semibold text-center text-green-700'>The Reward and Blessings of Teaching Knowledge</h1>
                    <p>
                    <p className="text-center font-semibold">
                    قَــالَ رَسُــولُ الـلَّـهِ ﷺ  </p>
            <p className="quranic-text text-center">  مَـنْ دَلَّ عَـلَـىٰ خَـيْـرٍ فَـلَـهُ مِـثْـلُ أَجْـرِ فَـاعِـلِـهِ </p>
        
          <p className="font-semibold text-end">:ترجمہ</p>
          <p className="text-center">رسول اللہ صلی اللہ علیہ وسلم نے فرمایا:</p>
          <p className="text-center ">جو شخص کسی اچھے عمل کی رہنمائی کرتا ہے، اس کو اس عمل کے کرنے والے کے برابر اجر ملتا ہے</p>
                    </p>
                    {/* <a href='#'
                    className='inline-block hover:text-indigo-600 border-b hover:border-blue'>Learn More</a> */}
                </motion.div>
            </div>
        </div>
    )
}

export default OurVision