import Image from "next/image";
import React from "react";

import userImg from "../assets/images/user1.png";
import userImg1 from "../assets/images/user2.png";
import userImg2 from "../assets/images/user3.png";

const Review = () => {
  return (
    <div id="reviews" className="relative p-4 mb-4">
      <div className="flex justify-center items-center p-3">
        <button className="mt-[90px] mb-4 bg-blue-200 hover:bg-blue-600 px-4 py-1 rounded-2xl text-blue-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer">
          Reviews
        </button>
      </div>
      <div className="relative">
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl sm:text-4xl text-blue-900 font-bold text-center capitalize mt-10  dark:text-gray-300">
            What Our Customers Say
          </p>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <p className="font-medium text-sm sm:text-base text-center mt-10 sm:mt-20 text-bluePText px-4 sm:px-0">
          &quot;A well-designed real estate website can be the bridge that
          connects buyers to their dream homes, and sellers to the right
          buyers.&quot;
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-10 sm:mt-16 gap-6">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[350px] flex-grow min-h-[200px] flex flex-col items-start p-6 gap-4 bg-white dark:bg-slate-700 shadow-md rounded-lg">
            <p className="font-semibold text-[13px] leading-[25px] text-bluePText dark:text-white">
              Thank you very much for the house found. This is an ideal option
              for our family at the location and price. The company employs real
              professionals who will always...
            </p>
          </div>
          <div className="flex items-center gap-3 w-full mt-4">
            <Image
              src={userImg}
              alt="user"
              className="w-12 h-12 bg-[#8833FF4D] rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold text-sm leading-[30px] text-cardText capitalize dark:text-white">
                Herbert Lindsey
              </p>
              <p className="font-semibold text-xs text-blueCardSubTitle leading-5">
                New York, USA
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-[350px] flex-grow min-h-[200px] flex flex-col items-start p-6 gap-4 bg-white dark:bg-slate-700 shadow-md rounded-lg">
            <p className="font-semibold text-[13px] leading-[25px] text-bluePText dark:text-white">
              A gentleman from New York discovered what he calls an “oversight”
              on the part of 99.9% of all marketers that allows him to get
              otherwise paid-for advertising at Google as well as all other
              search engines...
            </p>
          </div>
          <div className="flex items-center gap-3 w-full mt-4">
            <Image
              src={userImg1}
              alt="user"
              className="w-12 h-12 bg-[#CC74294D] rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold text-sm leading-[30px] text-cardText capitalize dark:text-white">
                Noah Russell
              </p>
              <p className="font-semibold text-xs text-blueCardSubTitle leading-5">
                New York, USA
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-[350px] flex-grow min-h-[200px] flex flex-col items-start p-6 gap-4 bg-white dark:bg-slate-700 shadow-md rounded-lg">
            <p className="font-semibold text-[13px] leading-[25px] text-bluePText dark:text-white">
              For many of us, our very first experience of learning about the
              celestial bodies begins when we saw our first full moon in the
              sky. It is truly a magnificent view even...
            </p>
          </div>
          <div className="flex items-center gap-3 w-full mt-4">
            <Image
              src={userImg2}
              alt="user"
              className="w-12 h-12 bg-[#E62E7B4D] rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold text-sm leading-[30px] text-cardText capitalize dark:text-white">
                Nellie Griffith
              </p>
              <p className="font-semibold text-xs text-blueCardSubTitle leading-5">
                New York, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
