import React from 'react'

const VideoBanner = () => {
  return (
    <div className='bg-indigo-900	'>
        <div className='container py-8 md:py-16'>
            <div className='grid grid-cols-1 items-center md:grid-cols gap-4 md:gap-8'>
                {/* video section */}
                <div>
                <iframe  src="https://www.youtube.com/embed/LyRLq2C3BEk?si=JcG6BqndC1m-erPq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen  className='aspect-video w-full'></iframe>
                </div>
                {/* text section */}
                <div className='space-y-4 text-center md:text-left text-white'>
                    <h1 className='text-4xl font-bold'>Watch our video</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veritatis voluptatibus blanditiis consequuntur ipsa et, ipsum ducimus architecto libero ea vel praesentium optio quod soluta odit tempora excepturi repudiandae, eum beatae labore.
                    </p>
                    <button className="btn-primary !bg-white !text-black font-bold">
                            Donate
                        </button>
                </div>

            </div>
        </div>

    </div>
  )
}

export default VideoBanner;