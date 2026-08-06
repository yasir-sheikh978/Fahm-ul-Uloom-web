import pic from '../../assets/home/Donation.jpg'
import { FaBookOpen, FaHandHoldingHeart, FaPeopleGroup } from 'react-icons/fa6'


const Bannersection = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 450,
          behavior: "smooth",
        });
      }
    return (
        <div className='bg-gray-200 py-10'>
            <div className='container md:h-[500px] flex items-center justify-center py-10'>
                <div className='grid grid-cols-1 items-center gap-4 sm:grid-cols-2 '>
                    {/* image container */}
                    <img src={pic} alt="Donate for education" className='mx-auto w-[100%] p-4 md:max-w-[100%] h-[350px] md:h-[450px] object-cover rounded-3xl' />
                    {/* text container */}
                    <div className='lg:max-w[400px] '>
                        <h1 className='text-2xl font-semibold  md:text-4xl mb-4'>Donate For Education</h1>
                        <ul className='flex flex-col gap-3 md:gap-4 pb-6'>
                            <li className="flex items-center gap-3 text-left">
                                <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-950">
                                    <FaBookOpen className="text-base" />
                                </span>
                                <span className='font-medium'>
                                    Help underprivileged children receive quality education and Islamic knowledge.
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-left">
                                <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-950">
                                    <FaHandHoldingHeart className="text-base" />
                                </span>
                                <span className='font-medium'>
                                    Your donation can empower young minds for a brighter future.
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-left">
                                <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-950">
                                    <FaPeopleGroup className="text-base" />
                                </span>
                                <span className='font-medium'>
                                    Together, we can spread knowledge and transform communities.
                                </span>
                            </li>
                        </ul>
                        <button
                            onClick={scrollToTop}
                            className="group inline-flex items-center justify-center gap-2 bg-blue-950 text-white font-semibold hover:bg-blue-800 p-4 rounded-xl w-full shadow-lg shadow-blue-950/20 transition duration-300"
                        >
                            Donate Now
                            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bannersection
