

const Bannersection = () => {
    
    return (
        <div className='bg-slate-100 dark:bg-slate-900 dark:text-white'>
            <div className='container md:h-[500px] flex items-center justify-center py-10'>
                <div className='grid grid-cols-1 items-center gap-4 sm:grid-cols-2'>
                    {/* image container */}
                    <img src="https://charitytruth.com/wp-content/uploads/2018/04/Starting-a-charity-concept.jpg" alt="" className='mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl' />
                    {/* text container */}
                    <div className='lg:max-w[400px]'>
                        <h1 className='text-2xl font-semibold  md:text-4xl mb-4'>Help the Needy people</h1>
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
                        <button className="btn-primary">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bannersection