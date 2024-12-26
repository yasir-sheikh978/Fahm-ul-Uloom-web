import React from 'react'

const VideoBanner = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 450,
          behavior: "smooth",
        })}
  return (
    <div className='bg-indigo-900	'>
        <div className='container py-8 md:py-16'>
        <div className='space-y-4 flex justify-center items-center w-[100%] text-center  md:text-left text-white'>
                    <div className='w-[90%] md:w-[50%] text-end'>

                    <h1 className='text-4xl font-bold text-center'>Watch our video</h1>
                    <p className='py-5 '>
                        <p className='font-semibold'>:عن عبد الله بن مسعود رضي الله عنه قال</p>
                        <p className='quranic-text '>"قال رسول الله صلى الله عليه وسلم: "ما نقص مال من صدقة، وما زاد الله عبداً بعفوٍ إلا عزًّا، وما تواضع أحدٌ لله إلا رفعه الله."</p>
                        <p>ترجمہ:</p>
                        <p className='leading-7'>حضرت عبد اللہ بن مسعود رضی اللہ عنہ سے روایت ہے کہ رسول اللہ صلی اللہ علیہ وسلم نے فرمایا: "صدقے سے مال کبھی کم نہیں ہوتا، اور اللہ تعالیٰ کسی بندے کو معاف کرنے کی وجہ سے عزت سے بڑھاتا ہے، اور جو اللہ کے لیے عاجزی اختیار کرتا ہے، اللہ اس کو بلند کرتا ہے۔"</p>
                    </p>
                    <button onClick={scrollToTop} className="bg-blue-950 text-white font-semibold  hover:bg-blue-700 p-4 my-4 rounded-xl w-[100%] ">
                            Donate
                        </button>
                    </div>
                </div>
            <div className='grid grid-cols-1 items-center md:grid-cols gap-4 md:gap-8'>
                {/* video section */}
                <div>
                <iframe  src="https://www.youtube.com/embed/LyRLq2C3BEk?si=JcG6BqndC1m-erPq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen  className='aspect-video w-[100%]'></iframe>
                </div>
                {/* text section */}

               

            </div>
        </div>

    </div>
  )
}

export default VideoBanner;