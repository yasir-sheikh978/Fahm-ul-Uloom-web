import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import bgImg from "../assets/home/bg.jpg";
import '../App.css'

const LongCourse = () => {
    const navigate = useNavigate();

    const doo = () => {
        navigate('/coursetwo#long-courses');
    };

    return (
        <div
            className="w-full py-14 md:py-20 px-4"
            style={{
                backgroundImage: `linear-gradient(rgba(10, 15, 40, 0.8), rgba(10, 15, 40, 0.85)), url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-10 text-center text-white">
                <span className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                    Hadith
                </span>

                <div data-aos="fade-down" className="space-y-3">
                    <p className="font-semibold">
                        :عن أبي هريرة رضي الله عنه قال رسول الله ﷺ
                    </p>
                    <p className="quranic-text break-words">
                        إِنَّ مِنْ أَبَرِّ صَدَقَاتِ الْمَرْءِ عَلَيْهِ أَنْ يُعَلِّمَ وَلَدَهُ وَيُدَّرِبَهُ عَلَى الْمَعَارِفِ وَيُفِيضَ عَلَيْهِ مِنْ أَنْوَاعِ الْعِلْمِ
                    </p>
                    <p className="font-semibold">: رسول اللہ  ﷺ  نے فرمایا</p>
                    <p>انسان پر سب سے بہترین صدقہ یہ ہے کہ وہ اپنے بچے کو علم سکھائے، اور اسے معارف کی تربیت دے، اور اسے علم کی مختلف قسموں سے نوازے</p>
                    <p className="font-semibold">Muhammad ﷺ Said</p>
                    <p className="text-blue-100">
                        The best charity a person can give is to teach their child
                        knowledge, nurture them with understanding, and bless them
                        with different branches of learning.
                    </p>
                </div>

                <p data-aos="zoom-in" className="text-xl md:text-2xl font-bold mt-6 mb-2">
                    Make your children scholars (Alim)
                </p>

                <button
                    onClick={doo}
                    className="group inline-flex items-center justify-center gap-2 bg-white text-blue-950 mt-4 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition duration-300 w-full sm:w-auto"
                >
                    Join Now
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    );
};

export default LongCourse;
