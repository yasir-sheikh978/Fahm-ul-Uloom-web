import React, { useState } from "react";
import { FaArrowRight, FaCircleCheck, FaClock } from "react-icons/fa6";
import tajweed from "../../assets/courseOne/tajweed.jpg";
import tijarat from "../../assets/courseOne/tijarat.jpg";
import bank from "../../assets/courseOne/bank.jpg";
import aqaid from "../../assets/courseOne/aqaid.jpg";
import ilhad from "../../assets/courseOne/ilhad.jpg";
import ramzan from "../../assets/courseOne/ramzan.jpg";
import nabuwat from "../../assets/courseOne/nabuwat.jpg";
import seerat from "../../assets/courseOne/seerat.jpg";
import qurbani from "../../assets/courseOne/qurbani.jpg";
import quran from "../../assets/courseOne/quran.png";
import hadees from "../../assets/courseOne/hadees.jpg";
import { useNavigate } from "react-router-dom";

export default function Course() {
   const Navigate = useNavigate();
     const register = ()=>{
         Navigate("/feeregistration");
     }

  const CourseDtails = [
    {
      name1: "Tajweed e quran Course",
      btn: " Enroll Now",
      img: tajweed,
      dscpt1: "Method of reading Holy quran with proper Makharij",
      dscpt2: "Rules of Waqf and Ibtida",
      dscpt3: "Pleasing to Allah",
      dscpt4: "Preserves Meaning",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
    },
    {
      name1: "Tafseer e quran Course",
      btn: " Enroll Now",
      img: quran,
      dscpt1: "Comprehensive Understanding",
      dscpt2: "Gain insights on how quranic teachings apply to modern life",
      dscpt3:
        "Paccess to notes, translations, and reference materials for further study",
      dscpt4: "Opportunities to ask questions",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
    },
    {
      name1: "Hadees e Rasool Course",
      btn: " Enroll Now",
      img: hadees,
      dscpt1: "Learn the meanings, context, and wisdom behind various ahadith",
      dscpt2: "Understand how to apply the Prophet's teachings to modern life",
      dscpt3: "Access to notes, references, and historical context",
      dscpt4: "ask questions for deeper understanding.",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
    },
    {
      name1: "Ahkam-e-Tijarat",
      btn: " Enroll Now",
      img: tijarat,
      dscpt1: "Introduction to Islamic Business Ethics",
      dscpt2: "Halal and Haram in Trade",
      dscpt3: "Riba (Interest)",
      dscpt4: "Islamic Contracts: Murabaha, Mudarabah, Musharakah",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
    },
    {
      name1: "Islamic Banking course",
      btn: " Enroll Now",
      img: bank,
      dscpt1: "Skill Development for Islamic Financial Institutions",
      dscpt2: "Islamic Banking Products and Services",
      dscpt3: "Role of Shariah Boards",
      dscpt4: "Modern Challenges and Solutions",
      Doration:
        "This course typically takes 4-6 months with weekly sessions covering each topic",
    },
    {
      name1: "Aqaid Course",
      btn: " Enroll Now",
      img: aqaid,
      dscpt1: "Khuda Zaat-Sifaat",
      dscpt2: "Understanding the attributes of Allah and His Oneness",
      dscpt3: "Importance of the Prophethood and the role of intercession",
      dscpt4: "Toheed , Shirk , Sunnat , Bid'at",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
    },
    {
      name1: "Radd e Ilhad",
      btn: " Enroll Now",
      img: ilhad,
      dscpt1: "History of atheism and its fundamental ideologies",
      dscpt2: "Importance of Tawheed (monotheism) and the existence of God",
      dscpt3: "Analyzing the relationship between science and religion",
      dscpt4: "Critical review of modern atheism and its refutation",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
    },
    {
      name1: "Tayari Ramzan Course",
      btn: " Admissions Off",
      img: ramzan,
      dscpt1: "Significance of Ramadan",
      dscpt2: "Rules and etiquette of fasting.",
      dscpt3: "Practical tips for maximizing worship and good deeds.",
      dscpt4: "Understanding the benefits of Ramadan",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
      obj: "To prepare individuals spiritually and practically for Ramadan.",
    },
    {
      name1: "Aqidah Khatm e Nabuwat",
      btn: " Enroll Now",
      img: nabuwat,
      dscpt1: "Understanding the concept of Khatm e Nabuwat",
      dscpt2: "Evidence from the quran and Hadith supporting this belief",
      dscpt3:
        "Historical context and its implications for the Muslim community",
      dscpt4: "Importance of adhering to this belief in contemporary times",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
      obj: "To educate individuals about the belief in the finality of Prophethood and its significance in Islam",
    },
    {
      name1: "Seerat e Mustafa Course",
      btn: " Enroll Now",
      img: seerat,
      dscpt1: "Overview of the Prophet's early life and upbringing",
      dscpt2: "Teachings and values emphasized by the Prophet (PBUH)",
      dscpt3:
        "Key events during his Prophethood, including the revelation and major challenges faced",
      dscpt4:
        "Lessons learned from his interactions with companions and adversaries",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
      obj: "To provide a comprehensive understanding of the life and teachings of Prophet Muhammad (PBUH)",
    },
    {
      name1: "Ahkam e Qurbani Course",
      btn: " Enroll Now",
      img: qurbani,
      dscpt1: "Significance of Qurbani in Islam",
      dscpt2: "Conditions and criteria for performing Qurbani",
      dscpt3: "Types of animals permissible for sacrifice",
      dscpt4: "Common misconceptions and answers to frequently asked questions",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
      obj: "To educate individuals about the rules and regulations surrounding Qurbani (sacrifice) during the Islamic festival of Eid al-Adha",
    },
  ];
  const UrduTrans = [
    {
      name1: "تجوید القرآن کورس",
      btn: " Enroll Now",
      img: tajweed,
      dscpt1: "قرآن پاک کو صحیح مخرج کے ساتھ پڑھنے کا طریقہ",
      dscpt2: "وقف اور ابتدا کے احکام",
      dscpt3: "اللہ کو راضی کرنے والا",
      dscpt4: "معنی کو محفوظ رکھتا ہے",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
    },
    {
      name1: "تفسیر قرآن کورس ",
      btn: " Enroll Now",
      img: tajweed,
      dscpt1: "جامع تفہیم",
      dscpt2: "جدید زندگی میں قرآن کی تعلیمات کو کیسے لاگو کیا جا سکتا ہے",
      dscpt3: "مزید مطالعے کے لیے نوٹس، تراجم اور ریفرنس مواد تک رسائی",
      dscpt4: "سوالات پوچھنے کا موقع",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
    },
    {
      name1: "حدیث رسول کورس",
      btn: " Enroll Now",
      img: hadees,
      dscpt1: "مختلف احادیث کے معانی، سیاق و سباق اور حکمت کو سمجھنا",
      dscpt2: "جدید زندگی میں نبی ﷺ کی تعلیمات کا اطلاق",
      dscpt3: "نوٹس، حوالہ جات اور تاریخی پس منظر تک رسائی",
      dscpt4: "عمیق سمجھ کے لیے سوالات اور تبادلہ خیال",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
    },
    {
      name1: "احکام تجارت کورس",
      btn: " Enroll Now",
      img: tijarat,
      dscpt1: "اسلامی کاروباری اخلاقیات کا تعارف",
      dscpt2: "تجارت میں حلال اور حرام",
      dscpt3: "ربا (سود)",
      dscpt4: "اسلامی معاہدے: مرابحہ، مضاربہ، مشارکہ",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
    },
    {
      name1: "اسلامی بینکنگ کورس",
      btn: " Enroll Now",
      img: bank,
      dscpt1: "اسلامی مالیاتی اداروں کے لیے مہارت کی ترقی",
      dscpt2: "اسلامی بینکاری مصنوعات اور خدمات",
      dscpt3: "شریعہ بورڈز کا کردار",
      dscpt4: "جدید چیلنجز اور حل",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
    },
    {
      name1: "بنیادی  عقائد کورس",
      btn: " Enroll Now",
      img: aqaid,
      dscpt1: "خدا ذات و صفات",
      dscpt2: "اللہ کی وحدانیت اور صفات کو سمجھنا",
      dscpt3: "نبوت کی اہمیت اور شفاعت کا کردار",
      dscpt4: "توحید، شرک، سنت، بدعت",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
    },
    {
      name1: "رد الحاد",
      btn: " Enroll Now",
      img: ilhad,
      dscpt1: "الحاد کی تاریخ اور اس کے بنیادی نظریات",
      dscpt2: "توحید کی اہمیت اور خدا کا وجود",
      dscpt3: "سائنس اور مذہب کے تعلقات کا تجزیہ",
      dscpt4: "جدید الحاد کا تنقیدی جائزہ اور اس کا رد",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
    },
    {
      name1: "تیاری رمضان کورس ",
      btn: " Enroll Now",
      img: ramzan,
      dscpt1: "رمضان کی اہمیت",
      dscpt2: "روزے کے قواعد اور آداب",
      dscpt3: "عبادت اور نیک اعمال کے لیے عملی نکات ",
      dscpt4: " رمضان کے فوائد کو سمجھنا",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
      obj: "افراد کو رمضان کے لیے روحانی اور عملی طور پر تیار کرنا",
    },
    {
      name1: "عقیدہ ختم نبوت کورس ",
      btn: " Enroll Now",
      img: nabuwat,
      dscpt1: "عقیدہ ختم نببوت کا تصور",
      dscpt2: " قرآن اور حدیث سے اس عقیدے کے حق میں دلائل",
      dscpt3: "تاریخی تناظر اور مسلم معاشرے پر اس کے اثرات ",
      dscpt4: " معاصر دور میں اس عقیدے کی اہمیت",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
      obj: " افراد کو عقیدہ ختم نبوت کے بارے میں تعلیم دینا اور اس کی اہمیت کو سمجھانا",
    },
    {
      name1: "سیرت مصطفیٰ کورس ",
      btn: " Enroll Now",
      img: seerat,
      dscpt1: "نبی کی ابتدائی زندگی اور پرورش کا خلاصہ",
      dscpt2: " نبی کریم صلی اللہ علیہ وآلہ وسلم کی تعلیمات اور اہم اصول",
      dscpt3: "نبوت کے دوران اہم واقعات، بشمول وحی اور درپیش بڑے چیلنجز ",
      dscpt4: " آپ کے ساتھیوں اور مخالفین کے ساتھ تعاملات سے حاصل کردہ اسباق",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
      obj: " نبی اکرم محمد صلی اللہ علیہ وآلہ وسلم کی زندگی اور تعلیمات کی جامع تفہیم فراہم کرنا",
    },
    {
      name1: "احکام قربانی کورس ",
      btn: " Enroll Now",
      img: qurbani,
      dscpt1: "اسلام میں قربانی کی اہمیت",
      dscpt2: " قربانی کے کرنے کے لیے ضروری شرائط اور معیارات",
      dscpt3: "قربانی کے لیے جائز جانوروں کی اقسام",
      dscpt4: " عام غلط فہمیاں اور اکثر پوچھے جانے والے سوالات کے جوابات",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
      obj: " افراد کو اسلامی تہوار عیدالاضحیٰ کے دوران قربانی کے بارے میں قواعد و ضوابط کی تعلیم دینا",
    },
  ];
  const [id, setid] = useState(0);
  const [hid, sethid] = useState("hidden");
  const [Urdu, seturdu] = useState("hidden");
  const [eng, seteng] = useState("flex");

  const openDetails = (index) => {
    setid(index);
    sethid("flex");
  };
  const closeDetails = () => sethid("hidden");
  const toggleLanguage = () => {
    if (eng === "flex") {
      seteng("hidden");
      seturdu("flex");
    } else {
      seteng("flex");
      seturdu("hidden");
    }
  };

  const activeCourse = eng === "flex" ? CourseDtails[id] : UrduTrans[id];
  const isUrdu = eng === "hidden";

  return (
    <div id="short-courses" className="bg-gray-200 py-4 scroll-mt-24">
      <div className="text-center py-10 px-4">
        <h1 className="text-2xl md:text-4xl font-serif text-blue-700">
          Short Courses
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Focused Islamic courses covering Aqaid, Fiqh, Seerat and more —
          taught online at your own pace.
        </p>
      </div>

      {hid !== "hidden" && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70 px-4 py-6"
          onClick={closeDetails}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-4 border-b border-gray-100">
              <button
                onClick={toggleLanguage}
                className="text-sm font-semibold border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50"
              >
                {isUrdu ? "English" : "اردو"}
              </button>
              <button
                onClick={closeDetails}
                className="text-3xl leading-none text-gray-400 hover:text-gray-700"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <div className={`flex flex-col md:flex-row gap-6 p-6 ${isUrdu ? "md:flex-row-reverse" : ""}`}>
              <img
                src={CourseDtails[id].img}
                alt={CourseDtails[id].name1}
                className="w-full md:w-2/5 h-56 md:h-64 object-cover rounded-2xl flex-shrink-0"
              />

              <div className={`flex-1 ${isUrdu ? "text-right" : "text-left"}`} dir={isUrdu ? "rtl" : "ltr"}>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {activeCourse.name1}
                </h2>

                <h3 className="text-sm font-bold text-blue-950 uppercase tracking-wide mb-2">
                  {isUrdu ? "فوائد" : "Course Benefits"}
                </h3>
                <ul className="space-y-2 mb-5">
                  {[activeCourse.dscpt1, activeCourse.dscpt2, activeCourse.dscpt3, activeCourse.dscpt4]
                    .filter(Boolean)
                    .map((point, i) => (
                      <li key={i} className={`flex items-start gap-2 text-gray-700 ${isUrdu ? "flex-row-reverse" : ""}`}>
                        <FaCircleCheck className="text-blue-950 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                </ul>

                <div className={`flex items-start gap-2 bg-blue-50 text-blue-950 rounded-xl p-4 mb-5 ${isUrdu ? "flex-row-reverse" : ""}`}>
                  <FaClock className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide">
                      {isUrdu ? "مدت" : "Duration"}
                    </p>
                    <p className="text-sm">{activeCourse.Doration}</p>
                  </div>
                </div>

                <button
                  onClick={register}
                  className="group inline-flex items-center justify-center gap-2 w-full bg-blue-950 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition"
                >
                  {activeCourse.btn}
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CourseDtails.map((items, index) => (
          <div
            key={index}
            data-aos="zoom-in-down"
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
          >
            <img
              src={items.img}
              alt={items.name1}
              className="w-full h-44 object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h5 className="font-bold text-lg text-gray-900 mb-2">
                {items.name1}
              </h5>
              <ul className="space-y-1.5 mb-4">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCircleCheck className="text-blue-950 mt-0.5 flex-shrink-0 text-xs" />
                  {items.dscpt1}
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCircleCheck className="text-blue-950 mt-0.5 flex-shrink-0 text-xs" />
                  {items.dscpt2}
                </li>
              </ul>
              <button
                onClick={() => openDetails(index)}
                className="mt-auto w-full bg-blue-950 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-lg transition"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
