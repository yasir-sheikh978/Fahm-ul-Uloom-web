import React, { useState } from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
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
import namaz from "../../assets/courseOne/namaz.jpg";
import hadees from "../../assets/courseOne/hadees.jpg";

export default function Course() {
  const CourseDtails = [
    {
      name1: "Tajweed e quran Course",
      btn: " Admission Off",
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
      btn: " Admission Off",
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
      btn: " Admission Off",
      img: hadees,
      dscpt1: "Learn the meanings, context, and wisdom behind various ahadith",
      dscpt2: "Understand how to apply the Prophet's teachings to modern life",
      dscpt3: "Access to notes, references, and historical context",
      dscpt4: "ask questions for deeper understanding.",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
    },
    {
      name1: "Namaaz Course",
      btn: " Admission Off",
      img: namaz,
      dscpt1:
        "Learn the accurate postures, words, and actions for each part of Namaaz",
      dscpt2: "Understand the deeper meanings and significance of the prayer",
      dscpt3: "Tips for consistency, concentration, and devotion in Salah",
      dscpt4: "Opportunities to ask questions and clarify doubts",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
    },
    {
      name1: "Ahkam-e-Tijarat",
      btn: " Admission Off",
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
      btn: " Admission Off",
      img: bank,
      dscpt1: "Skill Development for Islamic Financial Institutions",
      dscpt2: "Islamic Banking Products and Services",
      dscpt3: "Role of Shariah Boards",
      dscpt4: "Modern Challenges and Solutions",
      Doration:
        "This course typically takes 4-6 months with weekly sessions covering each topic",
    },
    {
      name1: "Aqaid o Mamlat e Ahlesunnat",
      btn: " Admission Off",
      img: aqaid,
      dscpt1: "Core beliefs of Ahle Sunnat wal Jamaat",
      dscpt2: "Understanding the attributes of Allah and His Oneness",
      dscpt3: "Importance of the Prophethood and the role of intercession",
      dscpt4: "Belief in Awliya (friends of Allah) and respect for the saints",
      Doration:
        "Typically completed in 3 to 6 months, with daily classes of 1-2 hours",
    },
    {
      name1: "Radd e Ilhad",
      btn: " Admission Off",
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
      btn: " Admission Off",
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
      btn: " Admission Off",
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
      btn: " Admission Off",
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
      btn: " Admission Off",
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
      btn: " Admission Off",
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
      btn: " Admission Off",
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
      btn: " Admission Off",
      img: hadees,
      dscpt1: "مختلف احادیث کے معانی، سیاق و سباق اور حکمت کو سمجھنا",
      dscpt2: "جدید زندگی میں نبی ﷺ کی تعلیمات کا اطلاق",
      dscpt3: "نوٹس، حوالہ جات اور تاریخی پس منظر تک رسائی",
      dscpt4: "عمیق سمجھ کے لیے سوالات اور تبادلہ خیال",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
    },
    {
      name1: "نماز کورس",
      btn: " Admission Off",
      img: namaz,
      dscpt1: "نماز کے ہر رکن کے درست انداز، الفاظ اور حرکات کو سیکھنا",
      dscpt2: "نماز کے گہرے معانی اور اہمیت کو سمجھنا",
      dscpt3: "نماز میں توجہ، استقامت اور خشوع حاصل کرنے کے طریقے",
      dscpt4: "سوالات پوچھنے اور وضاحت حاصل کرنے کے مواقع",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
    },
    {
      name1: "احکام تجارت کورس",
      btn: " Admission Off",
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
      btn: " Admission Off",
      img: bank,
      dscpt1: "اسلامی مالیاتی اداروں کے لیے مہارت کی ترقی",
      dscpt2: "اسلامی بینکاری مصنوعات اور خدمات",
      dscpt3: "شریعہ بورڈز کا کردار",
      dscpt4: "جدید چیلنجز اور حل",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
    },
    {
      name1: "بنیادی عقائد اور معمولات اہلسنت ",
      btn: " Admission Off",
      img: aqaid,
      dscpt1: "اہل سنت والجماعت کے بنیادی عقائد",
      dscpt2: "اللہ کی صفات اور اس کی وحدانیت کو سمجھنا",
      dscpt3: "رسالت کی اہمیت اور شفاعت کا کردار",
      dscpt4: "اولیاء (اللہ کے دوستوں) پر ایمان اور اولیاء کا احترام",
      Doration:
        "عام طور پر 3 سے 6 ماہ میں مکمل ہوتا ہے، روزانہ 1-2 گھنٹے کی کلاسز کے ساتھ",
    },
    {
      name1: "رد الحاد",
      btn: " Admission Off",
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
      btn: " Admission Off",
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
      btn: " Admission Off",
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
      btn: " Admission Off",
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
      btn: " Admission Off",
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

  return (
    <div className="bg-gray-200">
      <h1 className="flex justify-center items-center bg-gray-200 text-center h-20  text-4xl font-semibold font-serif border-b-2 border-gray-400">
        SHORT COURSES
      </h1>
      <div
        className={`w-full ${hid} h-screen  z-40 fixed bottom-0 backdrop-blur-sm justify-center items-center `}
      >
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 ${eng} items-center justify-center`}
        >
          <div className="relative overflow-scroll bg-gray-200 w-[90vw] md:w-[95vw] h-[85vh] md:h-[95vh] flex flex-col md:flex-row justify-around items-center p-2 rounded-sm">
            {/* Close Button */}
            <div
              className="absolute top-4 right-4 text-4xl md:text-6xl cursor-pointer text-gray-900"
              onClick={() => sethid("hidden")}
            >
              &times;
            </div>
            <div className="absolute h-20 md:h-10 top-4  text-4xl md:text-6xl cursor-pointer text-black">
              <button
                className="text-xl border font-semibold border-black p-2 hover:bg-blue-300 rounded-md"
                onClick={() => {
                  seteng("hidden");
                  seturdu("flex");
                }}
              >
                Urdu
              </button>
            </div>

            <div className="w-[70vw] sm:w-3/4 md:w-2/3 flex justify-start p-4">
              <img
                src={CourseDtails[id].img}
                alt=""
                className="w-full md:w-3/4 object-contain rounded-lg"
              />
            </div>

            {/* Course Details */}
            <div className="w-full md:w-1/2  px-4">
              <div className="text-center md:text-left ">
                <h1 className="text-lg md:text-xl font-semibold font-serif mb-4">
                  {CourseDtails[id].name1}
                </h1>
                {/* <h1 className="text-lg md:text-xl md:text-end font-semibold font-serif mb-4">{CourseDtails[id].name2}</h1> */}
              </div>
              <div>
                <h2 className="text-md md:text-lg font-medium">
                  Course Benefits :
                </h2>
                <p className="pt-2">~{CourseDtails[id].dscpt1}</p>
                <p className="pt-2">~{CourseDtails[id].dscpt2}</p>
                <p className="pt-2">~{CourseDtails[id].dscpt3}</p>
                <p className="pt-2">~{CourseDtails[id].dscpt4}</p>
              </div>
              <div className="py-2">
                <h2 className="text-md md:text-lg font-medium">Duration :</h2>
                <p className="pt-2">~{CourseDtails[id].Doration}</p>
              </div>
              <div>
                <Button color="blue" className="mt-4 w-full">
                  {CourseDtails[id].btn}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center ${Urdu}`}
        >
          <div className="relative overflow-scroll bg-gray-200 w-[90vw] md:w-[95vw] h-[85vh] md:h-[95vh] flex flex-col md:flex-row justify-around items-center p-2 rounded-sm">
            {/* Close Button */}
            <div
              className="absolute top-4 right-4 text-4xl md:text-6xl cursor-pointer text-gray-900"
              onClick={() => sethid("hidden")}
            >
              &times;
            </div>
            <div className="absolute h-20 md:h-10 top-4  text-4xl md:text-6xl cursor-pointer text-black">
              <button
                className="text-xl border font-semibold border-black p-2 hover:bg-blue-300 rounded-md"
                onClick={() => {
                  seteng("flex");
                  seturdu("hidden");
                }}
              >
                English
              </button>
            </div>

            <div className="w-[70vw] sm:w-3/4 md:w-2/3 flex justify-star p-4">
              <img
                src={CourseDtails[id].img}
                alt=""
                className="w-full md:w-3/4 object-contain rounded-lg"
              />
            </div>

            {/* Course Details */}
            <div className="w-full md:w-1/2  px-4">
              <div className="text-center md:text-left ">
                {/* <h1 className="text-lg md:text-xl font-semibold font-serif mb-4">{CourseDtails[id].name1}</h1> */}
                <h1 className="text-lg md:text-xl md:text-end font-semibold font-serif mb-4">
                  {UrduTrans[id].name1}
                </h1>
              </div>
              <div className="text-end">
                <h2 className="text-md md:text-lg font-medium">:فوائد</h2>
                <p className="pt-2">{UrduTrans[id].dscpt1}~</p>
                <p className="pt-2">{UrduTrans[id].dscpt2}~</p>
                <p className="pt-2">{UrduTrans[id].dscpt3}~</p>
                <p className="pt-2">{UrduTrans[id].dscpt4}~</p>
              </div>
              <div className="py-2 text-end">
                <h2 className="text-md  md:text-lg font-medium">:مدت</h2>
                <p className="pt-2">{UrduTrans[id].Doration}~</p>
              </div>
              <div>
                <Button color="blue" className="mt-4 w-full">
                  {UrduTrans[id].btn}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-8 flex flex-wrap gap-4 justify-center ">
        {CourseDtails.map((items, index) => (
          <Card
            key={index}
            data-aos="zoom-in-down"
            className="max-w-sm sa"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={items.img}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {items.name1}
            </h5>
            <h5 className="text-2xl text-end font-bold tracking-tight text-gray-900 dark:text-white">
              {items.name2}
            </h5>
            <p className="w-full text-gray-700 dark:text-gray-400">
              {items.dscpt1}
            </p>
            <p className="w-full text-gray-700 dark:text-gray-400">
              {items.dscpt2}
            </p>
            <Button
              color="blue"
              onClick={(e) => {
                setid(index);
                sethid("flex");
              }}
              key={index}
            >
              Details
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
