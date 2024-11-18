import { div } from "framer-motion/client";
import React from "react";

export default function Fees() {
  return (
    <div className="bg-gray-200">
      <div className="px-4 md:px-8 lg:px-16">
        <h1 className="w-full text-center text-2xl md:text-4xl font-serif text-blue-700 h-20 py-4">
          Why Choose Our
        </h1>

        <p className="text-base md:text-2xl text-justify p-4 md:py-6">
          Choosing our platform for your educational journey means accessing a
          diverse range of courses designed to enrich your knowledge and skills.
        </p>

        <h2 className="py-8 md:py-12 text-center font-serif w-full text-2xl md:text-4xl text-blue-700">
          Some Features of Our Academy
        </h2>

        <ul className="p-4 leading-6 md:leading-9 text-sm md:text-xl font-serif border-2 border-black rounded-lg shadow-lg shadow-gray-500 mx-auto max-w-2xl">
          <li className="py-2 md:py-3">1) Experienced Instructors</li>
          <li className="py-2 md:py-3">2) Male and Female Tutors Available</li>
          <li className="py-2 md:py-3">3) Monthly Performance Reports</li>
          <li className="py-2 md:py-3">4) Good Internet Service</li>
          <li className="py-2 md:py-3">
            5) Certificate Offered Upon Course Completion
          </li>
          <li className="py-2 md:py-3">
            6) Courses for Both Children and Adults
          </li>
          <li className="py-2 md:py-3">7) Affordable Fees</li>
          <li className="py-2 md:py-3">8) Discount Packages</li>
        </ul>
      </div>

      <h2 className="py-12 text-center font-serif w-full text-4xl text-blue-700">
        Fee Structure
      </h2>

      <div className="overflow-x-auto mx-2 md:mx-8 shadow-lg shadow-gray-500 border-2 border-black">
        <table className="w-full text-xs md:text-xl font-serif border-collapse border border-gray-500">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-4 border border-gray-500">Courses</th>
              <th className="p-4 border border-gray-500">Combine Class</th>
              <th className="p-4 border border-gray-500">Separate Class</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="p-4 border border-gray-500">Norani Qaida</td>
              <td className="p-4 border border-gray-500">15$ per-Month</td>
              <td className="p-4 border border-gray-500">20$ per-Month</td>
            </tr>
            <tr className="text-center">
              <td className="p-4 border border-gray-500">Nazra Quran</td>
              <td className="p-4 border border-gray-500">20$ per-Month</td>
              <td className="p-4 border border-gray-500">30$ per-Month</td>
            </tr>
            <tr className="text-center">
              <td className="p-4 border border-gray-500">Hifzul Quran</td>
              <td className="p-4 border border-gray-500">35$ per-Month</td>
              <td className="p-4 border border-gray-500">40$ per-Month</td>
            </tr>
            <tr className="text-center">
              <td className="p-4 border border-gray-500">Short Courses</td>
              <td className="p-4 border border-gray-500">
                50$ - 60$ per-Course
              </td>
              <td className="p-4 border border-gray-500">Not Available</td>
            </tr>
            <tr className="text-center">
              <td className="p-4 border border-gray-500">Long Courses</td>
              <td className="p-4 border border-gray-500">
                40$ - 50$ per-Month
              </td>
              <td className="p-4 border border-gray-500">Not Available</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className=" w-full text-center text-yellow-500 text-2xl  py-16">
        * Join us to benefit from a community of learners dedicated to personal
        and spiritual growth through education*
      </p>
    </div>
  );
}
