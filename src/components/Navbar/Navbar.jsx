import { BiPhoneCall } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";



const Navbar = () => {
    return (
        <>
            <nav className="bg-violet-900	 text-white fixed top-left-0 w-[100%] border-b-[1px] border-primary/50">
                <div className="container">
                    <div className="flex items-center justify-between h-[70px] py-2">
                {/* logo section */}
                <div className="text-2xl md:text-3xl text-white uppercase">
                    <a href="#">Unity{""}
                        <span className="inline-block font-bold text-yellow-400	">Fund</span>
                    </a>
                </div>
                {/* Destop Menu section */}
                <div>
                    <ul className="flex items-center gap-10">
                        <li className="group relative cursor-pointer">
                            <a href="#" className="text-amber-50 flex item-center gap-[2px] h-[20px]">
                                Home{""}
                                <span>
                                    <FaCaretDown className="text-amber-50 group-hover:rotate-180 transition-all duration-200	"/>
                                </span>
                            </a>
                        </li>
                        <li className="text-amber-50">
                            About us
                        </li>
                        <div className="flex items -center gap-4">
                            {/* icon here */}
                            <div>
                                <BiPhoneCall className="text-amber-50 text-2-xl h-[40px] w-[40px] rounded-md  bg-yellow-300	hover:bg-yellow-300/90	"/>
                            </div>
                            {/* mobile no */}
                            <div>
                                <p className="text-amber-50">Talk to us</p>
                                <p className="text-amber-50">0316-1038075</p>
                            </div>
                        </div>
                    </ul>
                </div>
                {/* Mobile Menu section */}


                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;