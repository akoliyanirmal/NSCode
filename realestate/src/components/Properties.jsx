import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TfiTag } from "react-icons/tfi";
import { IoIosBed } from "react-icons/io";
import { TbBathFilled } from "react-icons/tb";
import { FaCarAlt } from "react-icons/fa";
import { IoInfiniteSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Properties = () => {
  return (
    <>
      <section
        id="Properties"
        className="popular-properties py-[40px] md:py-[80px] lg:py-[120px]"
      >
        <div className="flex justify-center items-center">
          <button className="relative bottom-3 bg-green-200 hover:bg-green-600 px-4 py-2 sm:py-1 rounded-2xl text-green-500 hover:text-white h-10 sm:h-8 w-32 sm:w-28 font-black text-sm sm:text-xs uppercase cursor-pointer">
            Properties
          </button>
        </div>

        <p
          className="text-3xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative mt-12 sm:mt-8
        mb-8 dark:text-gray-300"
        >
          Choice Properties
        </p>
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="swiper-slide">
              <div className="swiper-slide overflow-hidden rounded-md drop-shadow-md bg-[#FFFDFC] dark:bg-[#161f29] border dark:border-gray-700 text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative">
                  <Link href="#" className="block">
                    <Image
                      src="/images/Image.png"
                      width={370}
                      height={266}
                      className="w-full h-full"
                      alt="Orchid Casel de Paradise."
                    />
                  </Link>

                  <span className="absolute bottom-4 left-4 bg-[#FFFDFC] dark:bg-[#161f29] p-1 rounded text-primary text-sm font-normal capitalize">
                    for Sale
                  </span>
                </div>

                <div className="py-5 px-6 text-left">
                  <h3>
                    <Link
                      href="#"
                      className="font-lora leading-tight text-lg lg:text-xl text-primary hover:text-secondary transition-all font-medium"
                    >
                      Orchid Casel de Paradise.
                    </Link>
                  </h3>

                  <h4>
                    <Link
                      href="#"
                      className="font-light text-sm leading-relaxed underline"
                    >
                      18B Central Street, San Francisco
                    </Link>
                  </h4>
                  <span className="block font-light text-xs mt-2">
                    Added: 25 November, 2021
                  </span>
                  <ul className="flex flex-wrap items-center justify-between text-xs mt-4 mb-3 pb-3 border-b border-gray-300 dark:border-gray-700">
                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <TfiTag className="mr-1" />
                      <span>1230 Sq.ft</span>
                    </li>

                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <IoIosBed className="mr-1" />
                      <span>5</span>
                    </li>

                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <TbBathFilled className="mr-1" />
                      <span>3</span>
                    </li>

                    <li className="flex items-center">
                      <FaCarAlt className="mr-1" />
                      <span>2</span>
                    </li>
                  </ul>

                  <ul>
                    <li className="flex items-center justify-between">
                      <span className="font-lora text-sm lg:text-base text-primary leading-none font-medium">
                        Price: $255,300
                      </span>
                      <span className="flex items-center">
                        <button className="mr-4 text-gray-500 hover:text-secondary dark:text-gray-300">
                          <IoInfiniteSharp />
                        </button>

                        <button className="text-gray-500 hover:text-secondary dark:text-gray-300">
                          <FaRegHeart />
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="swiper-slide overflow-hidden rounded-md drop-shadow-md bg-[#FFFDFC] dark:bg-[#161f29] border dark:border-gray-700 text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative">
                  <Link href="#" className="block">
                    <Image
                      src="/images/Image.png"
                      width={370}
                      height={266}
                      className="w-full h-full"
                      alt="Orchid Casel de Paradise."
                    />
                  </Link>

                  <span className="absolute bottom-4 left-4 bg-[#FFFDFC] dark:bg-[#161f29] p-1 rounded text-primary text-sm font-normal capitalize">
                    for Sale
                  </span>
                </div>

                <div className="py-5 px-6 text-left">
                  <h3>
                    <Link
                      href="#"
                      className="font-lora leading-tight text-lg lg:text-xl text-primary hover:text-secondary transition-all font-medium"
                    >
                      Orchid Casel de Paradise.
                    </Link>
                  </h3>

                  <h4>
                    <Link
                      href="#"
                      className="font-light text-sm leading-relaxed underline"
                    >
                      18B Central Street, San Francisco
                    </Link>
                  </h4>
                  <span className="block font-light text-xs mt-2">
                    Added: 25 November, 2021
                  </span>
                  <ul className="flex flex-wrap items-center justify-between text-xs mt-4 mb-3 pb-3 border-b border-gray-300 dark:border-gray-700">
                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <TfiTag className="mr-1" />
                      <span>1230 Sq.ft</span>
                    </li>

                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <IoIosBed className="mr-1" />
                      <span>5</span>
                    </li>

                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <TbBathFilled className="mr-1" />
                      <span>3</span>
                    </li>

                    <li className="flex items-center">
                      <FaCarAlt className="mr-1" />
                      <span>2</span>
                    </li>
                  </ul>

                  <ul>
                    <li className="flex items-center justify-between">
                      <span className="font-lora text-sm lg:text-base text-primary leading-none font-medium">
                        Price: $255,300
                      </span>
                      <span className="flex items-center">
                        <button className="mr-4 text-gray-500 hover:text-secondary dark:text-gray-300">
                          <IoInfiniteSharp />
                        </button>

                        <button className="text-gray-500 hover:text-secondary dark:text-gray-300">
                          <FaRegHeart />
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="swiper-slide overflow-hidden rounded-md drop-shadow-md bg-[#FFFDFC] dark:bg-[#161f29] border dark:border-gray-700 text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative">
                  <Link href="#" className="block">
                    <Image
                      src="/images/Image.png"
                      width={370}
                      height={266}
                      className="w-full h-full"
                      alt="Orchid Casel de Paradise."
                    />
                  </Link>

                  <span className="absolute bottom-4 left-4 bg-[#FFFDFC] dark:bg-[#161f29] p-1 rounded text-primary text-sm font-normal capitalize">
                    for Sale
                  </span>
                </div>

                <div className="py-5 px-6 text-left">
                  <h3>
                    <Link
                      href="#"
                      className="font-lora leading-tight text-lg lg:text-xl text-primary hover:text-secondary transition-all font-medium"
                    >
                      Orchid Casel de Paradise.
                    </Link>
                  </h3>

                  <h4>
                    <Link
                      href="#"
                      className="font-light text-sm leading-relaxed underline"
                    >
                      18B Central Street, San Francisco
                    </Link>
                  </h4>
                  <span className="block font-light text-xs mt-2">
                    Added: 25 November, 2021
                  </span>
                  <ul className="flex flex-wrap items-center justify-between text-xs mt-4 mb-3 pb-3 border-b border-gray-300 dark:border-gray-700">
                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <TfiTag className="mr-1" />
                      <span>1230 Sq.ft</span>
                    </li>

                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <IoIosBed className="mr-1" />
                      <span>5</span>
                    </li>

                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <TbBathFilled className="mr-1" />
                      <span>3</span>
                    </li>

                    <li className="flex items-center">
                      <FaCarAlt className="mr-1" />
                      <span>2</span>
                    </li>
                  </ul>

                  <ul>
                    <li className="flex items-center justify-between">
                      <span className="font-lora text-sm lg:text-base text-primary leading-none font-medium">
                        Price: $255,300
                      </span>
                      <span className="flex items-center">
                        <button className="mr-4 text-gray-500 hover:text-secondary dark:text-gray-300">
                          <IoInfiniteSharp />
                        </button>

                        <button className="text-gray-500 hover:text-secondary dark:text-gray-300">
                          <FaRegHeart />
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="swiper-slide overflow-hidden rounded-md drop-shadow-md bg-[#FFFDFC] dark:bg-[#161f29] border dark:border-gray-700 text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative">
                  <Link href="#" className="block">
                    <Image
                      src="/images/Image.png"
                      width={370}
                      height={266}
                      className="w-full h-full"
                      alt="Orchid Casel de Paradise."
                    />
                  </Link>

                  <span className="absolute bottom-4 left-4 bg-[#FFFDFC] dark:bg-[#161f29] p-1 rounded text-primary text-sm font-normal capitalize">
                    for Sale
                  </span>
                </div>

                <div className="py-5 px-6 text-left">
                  <h3>
                    <Link
                      href="#"
                      className="font-lora leading-tight text-lg lg:text-xl text-primary hover:text-secondary transition-all font-medium"
                    >
                      Orchid Casel de Paradise.
                    </Link>
                  </h3>

                  <h4>
                    <Link
                      href="#"
                      className="font-light text-sm leading-relaxed underline"
                    >
                      18B Central Street, San Francisco
                    </Link>
                  </h4>
                  <span className="block font-light text-xs mt-2">
                    Added: 25 November, 2021
                  </span>
                  <ul className="flex flex-wrap items-center justify-between text-xs mt-4 mb-3 pb-3 border-b border-gray-300 dark:border-gray-700">
                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <TfiTag className="mr-1" />
                      <span>1230 Sq.ft</span>
                    </li>

                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <IoIosBed className="mr-1" />
                      <span>5</span>
                    </li>

                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <TbBathFilled className="mr-1" />
                      <span>3</span>
                    </li>

                    <li className="flex items-center">
                      <FaCarAlt className="mr-1" />
                      <span>2</span>
                    </li>
                  </ul>

                  <ul>
                    <li className="flex items-center justify-between">
                      <span className="font-lora text-sm lg:text-base text-primary leading-none font-medium">
                        Price: $255,300
                      </span>
                      <span className="flex items-center">
                        <button className="mr-4 text-gray-500 hover:text-secondary dark:text-gray-300">
                          <IoInfiniteSharp />
                        </button>

                        <button className="text-gray-500 hover:text-secondary dark:text-gray-300">
                          <FaRegHeart />
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="swiper-slide overflow-hidden rounded-md drop-shadow-md bg-[#FFFDFC] dark:bg-[#161f29] border dark:border-gray-700 text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative">
                  <Link href="#" className="block">
                    <Image
                      src="/images/Image.png"
                      width={370}
                      height={266}
                      className="w-full h-full"
                      alt="Orchid Casel de Paradise."
                    />
                  </Link>

                  <span className="absolute bottom-4 left-4 bg-[#FFFDFC] dark:bg-[#161f29] p-1 rounded text-primary text-sm font-normal capitalize">
                    for Sale
                  </span>
                </div>

                <div className="py-5 px-6 text-left">
                  <h3>
                    <Link
                      href="#"
                      className="font-lora leading-tight text-lg lg:text-xl text-primary hover:text-secondary transition-all font-medium"
                    >
                      Orchid Casel de Paradise.
                    </Link>
                  </h3>

                  <h4>
                    <Link
                      href="#"
                      className="font-light text-sm leading-relaxed underline"
                    >
                      18B Central Street, San Francisco
                    </Link>
                  </h4>
                  <span className="block font-light text-xs mt-2">
                    Added: 25 November, 2021
                  </span>
                  <ul className="flex flex-wrap items-center justify-between text-xs mt-4 mb-3 pb-3 border-b border-gray-300 dark:border-gray-700">
                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <TfiTag className="mr-1" />
                      <span>1230 Sq.ft</span>
                    </li>

                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <IoIosBed className="mr-1" />
                      <span>5</span>
                    </li>

                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <TbBathFilled className="mr-1" />
                      <span>3</span>
                    </li>

                    <li className="flex items-center">
                      <FaCarAlt className="mr-1" />
                      <span>2</span>
                    </li>
                  </ul>

                  <ul>
                    <li className="flex items-center justify-between">
                      <span className="font-lora text-sm lg:text-base text-primary leading-none font-medium">
                        Price: $255,300
                      </span>
                      <span className="flex items-center">
                        <button className="mr-4 text-gray-500 hover:text-secondary dark:text-gray-300">
                          <IoInfiniteSharp />
                        </button>

                        <button className="text-gray-500 hover:text-secondary dark:text-gray-300">
                          <FaRegHeart />
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="swiper-slide overflow-hidden rounded-md drop-shadow-md bg-[#FFFDFC] dark:bg-[#161f29] border dark:border-gray-700 text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative">
                  <Link href="#" className="block">
                    <Image
                      src="/images/Image.png"
                      width={370}
                      height={266}
                      className="w-full h-full"
                      alt="Orchid Casel de Paradise."
                    />
                  </Link>

                  <span className="absolute bottom-4 left-4 bg-[#FFFDFC] dark:bg-[#161f29] p-1 rounded text-primary text-sm font-normal capitalize">
                    for Sale
                  </span>
                </div>

                <div className="py-5 px-6 text-left">
                  <h3>
                    <Link
                      href="#"
                      className="font-lora leading-tight text-lg lg:text-xl text-primary hover:text-secondary transition-all font-medium"
                    >
                      Orchid Casel de Paradise.
                    </Link>
                  </h3>

                  <h4>
                    <Link
                      href="#"
                      className="font-light text-sm leading-relaxed underline"
                    >
                      18B Central Street, San Francisco
                    </Link>
                  </h4>
                  <span className="block font-light text-xs mt-2">
                    Added: 25 November, 2021
                  </span>
                  <ul className="flex flex-wrap items-center justify-between text-xs mt-4 mb-3 pb-3 border-b border-gray-300 dark:border-gray-700">
                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <TfiTag className="mr-1" />
                      <span>1230 Sq.ft</span>
                    </li>

                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <IoIosBed className="mr-1" />
                      <span>5</span>
                    </li>

                    <li className="flex items-center pr-5 border-r border-gray-300 dark:border-gray-700">
                      <TbBathFilled className="mr-1" />
                      <span>3</span>
                    </li>

                    <li className="flex items-center">
                      <FaCarAlt className="mr-1" />
                      <span>2</span>
                    </li>
                  </ul>

                  <ul>
                    <li className="flex items-center justify-between">
                      <span className="font-lora text-sm lg:text-base text-primary leading-none font-medium">
                        Price: $255,300
                      </span>
                      <span className="flex items-center">
                        <button className="mr-4 text-gray-500 hover:text-secondary dark:text-gray-300">
                          <IoInfiniteSharp />
                        </button>

                        <button className="text-gray-500 hover:text-secondary dark:text-gray-300">
                          <FaRegHeart />
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;
