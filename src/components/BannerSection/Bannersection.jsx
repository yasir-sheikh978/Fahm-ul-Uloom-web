import pic from '../../assets/home/Donation.jpg'


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
                    <img src={pic} alt="" className='mx-auto w-[100%] p-4 md:max-w-[100%] h-[350px] md:h-[450px] object-fill rounded-3xl' />
                    {/* text container */}
                    <div className='lg:max-w[400px] '>
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
                        <button onClick={scrollToTop} className="bg-blue-950 text-white font-semibold hover:bg-blue-700 p-4 rounded-xl w-[100%] ">
                            Donate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bannersection