import React from "react"
import { useNavigate } from "react-router-dom"
import pic from '../assets/home/Donation.jpg'
const Bannersection = () => {
    const Navigate = useNavigate();
    const doo = () =>{
        Navigate('./donation')
    }
    return (
        <div className='bg-gray-200 py-10'>
            <div className='container md:h-[500px] flex items-center justify-center py-10'>
                <div className='grid grid-cols-1 items-center gap-4 sm:grid-cols-2 '>
                    {/* image container */}
                    <img src={pic} alt="" className='mx-auto w-full p-4 md:max-w-full h-[350px] md:h-[450px] object-fill rounded-3xl' data-aos="fade-right" / >
                    {/* text container */}
                    <div className='lg:max-w[400px] ' data-aos="fade-left">
                        <h1 className='text-2xl font-semibold  md:text-4xl mb-4'>Donate For Education</h1>
                        <ul className='flex list-inside list-disc flex-col gap-2 md:gap-4 pb-4'>
                            <li className='font-medium'>
                            Help underprivileged children receive quality education and Islamic knowledge.                            </li>
                            <li className='font-medium'>
                            Your donation can empower young minds for a brighter future.
                            </li>
                            <li className='font-medium'>
                            Together, we can spread knowledge and transform communities.                            </li>
                        </ul>
                        <button onClick={doo} className="bg-blue-950 text-white font-semibold hover:bg-blue-700 p-4 rounded-xl w-full ">
                            Donate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bannersection