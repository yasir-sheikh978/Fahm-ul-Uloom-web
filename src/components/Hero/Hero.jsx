import { easeInOut } from "framer-motion";
import DonationForm from "../Donation/Donation-form";
import Heroimage from "../Images/world-.jpg"
import { motion } from "framer-motion";



const bgstyle = {
  backgroundImage: `url(${Heroimage})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  width: "100%"
};
const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
  };
};
const Hero = () => {
  return (
    <div style={bgstyle}>
      <div className="min-h-[650px] md:min-h-[750px] pt-3 pb-10 md:pt-48">
        <div className="container">
          <div className="grid gird-cols-1 lg:grid-cols-2 items-center gap-12 text-amber-50">
            {/* hero text section */}
            <div className=" flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg-max-w-[450px]">
              <motion.h1 variants={FadeUp(0.2)} initial="initial" animate="animate" className="text-5xl  lg:text-7xl font-bold">join us in chnaging lives</motion.h1>
              <motion.p variants={FadeUp(0.4)} initial="initial" animate="animate">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad atque quas accusantium tenetur ut nostrum, autem dignissimos aut amet nemo explicabo beatae exercitationem. Inventore.
              </motion.p>
              <div className="space-x-4">
                <motion.button variants={FadeUp(0.6)} initial="initial" animate="animate" className="btn-outline bg-indigo-900">
                  Get started
                </motion.button>
                <motion.button variants={FadeUp(0.8)} initial="initial" animate="animate" className="btn-outline">
                  login
                </motion.button>
              </div>
            </div>
            {/* form section */}
            <div>
              <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 100 }} className=" flex items-center justify-center ">
                <DonationForm/>
              </motion.div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;