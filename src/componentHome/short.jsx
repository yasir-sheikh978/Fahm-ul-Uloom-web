import React from "react"
import online from '../assets/home/online.jpg'
import { useNavigate } from "react-router-dom"

const Bannersection = () => {
    const Navigate = useNavigate();

    const doo = () =>{
        Navigate('./courseone')
    }

    return (
        <div className='bg-gray-200'>
            <div className='container md:h-[500px] flex items-center justify-center py-10'>
                <div className='grid grid-cols-1 items-center gap-4 sm:grid-cols-2'>
                    {/* text container */}
                    <div className='lg:max-w[300px] space-y-6 px-6' data-aos="fade-right">
                        <h1 className='text-2xl font-semibold  md:text-4xl mb-4'>Online Short Courses</h1>
                        <ul className='flex list-inside list-disc flex-col gap-2 md:gap-4'>
                            <li className='font-medium'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, recusandae!
                            </li>
                            <li className='font-medium'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi delectus reiciendis ullam error qui vero.
                            </li>
                            <li className='font-medium'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem modi dolore, rerum repudiandae reprehenderit incidunt?
                            </li>
                        </ul>
                        <button onClick={doo} className="bg-blue-950 w-[100%] text-white font-semibold hover:bg-blue-700 p-4 rounded-xl ">
                            Explore
                        </button>
                    </div>
                    {/* image container */}
                    <img data-aos="flip-up" src={online} alt="" className='mx-auto w-[100%] p-2 md:max-w-[100%] h-[300px] md:h-[350px] object-cover rounded-3xl' />
                </div>
            </div>
        </div>
    )
}

export default Bannersection