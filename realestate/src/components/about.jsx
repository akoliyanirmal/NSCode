import React from "react";

export default function About({
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardSubText1,
  cardSubText2,
  cardSubText3,
}) {
  return (
    <div id="about" className="relative p-4 mb-4">
      <div className="flex justify-center items-center">
        <button className="relative mt-24 bg-green-200 hover:bg-green-600 px-4 py-2 sm:py-1 rounded-2xl text-green-500 hover:text-white h-10 sm:h-8 w-32 sm:w-28 font-black text-sm sm:text-xs uppercase cursor-pointer">
          About Us
        </button>
      </div>

      <div className="relative">
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative mt-12 sm:mt-16 dark:text-gray-300">
            Welcome to YourHouse
          </p>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <p className="font-medium text-sm sm:text-base text-center mt-10 sm:mt-20 text-bluePText px-4 sm:px-0">
          Real estate is &quot;property consisting of land and the buildings on
          it, along with its natural resources such as crops, minerals, or
          water, immovable property of this nature; an interest vested in this
          (also) an item of real property, (more generally) buildings or housing
          in general.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-12 sm:mt-[50px]">
        <div className="bg-white py-8 px-6 sm:py-10 sm:px-10 h-auto w-full sm:h-[160px] sm:w-[350px] mb-6 sm:mb-0 sm:mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md dark:bg-slate-700">
          <p className="font-medium text-2xl sm:text-3xl leading-[40px] sm:leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle1}
          </p>
          <p className="text-sm leading-6 sm:leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText1}
          </p>
        </div>
        <div className="bg-white py-8 px-6 sm:py-10 sm:px-10 h-auto w-full sm:h-[160px] sm:w-[350px] mb-6 sm:mb-0 sm:mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md dark:bg-slate-700">
          <p className="font-medium text-2xl sm:text-3xl leading-[40px] sm:leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle2}
          </p>
          <p className="text-sm leading-6 sm:leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText2}
          </p>
        </div>
        <div className="bg-white py-8 px-6 sm:py-10 sm:px-10 h-auto w-full sm:h-[160px] sm:w-[350px] flex flex-col justify-center items-center rounded-[10px] shadow-md dark:bg-slate-700">
          <p className="font-medium text-2xl sm:text-3xl leading-[40px] sm:leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle3}
          </p>
          <p className="text-sm leading-6 sm:leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText3}
          </p>
        </div>
      </div>
    </div>
  );
}
