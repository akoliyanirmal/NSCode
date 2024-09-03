import Image from "next/image";
import React from "react";
import apartmentIcon from "../assets/icons/apartment.png";
import officeIcon from "../assets/icons/office.png";
import houseIcon from "../assets/icons/house.png";
import warehouseIcon from "../assets/icons/warehouse.png";
import parkingIcon from "../assets/icons/parking.png";

const Services = () => {
  return (
    <div id="services" className="relative p-4 mb-4">
      <div className="flex justify-center items-center">
        <button className="relative mt-24 bg-blue-200 hover:bg-blue-600 px-4 py-2 sm:py-1 rounded-2xl text-blue-500 hover:text-white h-10 sm:h-8 w-32 sm:w-28 font-black text-sm sm:text-xs uppercase cursor-pointer">
          Services
        </button>
      </div>
      <div className="relative">
        <div className="flex flex-col justify-center items-center mt-10">
          <p className="text-3xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative mt-7 dark:text-gray-300">
            Services for Maximum Efficiency
          </p>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <p className="font-medium text-sm sm:text-base text-center mt-10 sm:mt-20 text-bluePText px-4 sm:px-0">
          We have developed a unique space where you can work and create. We
          thought of everything to the smallest detail. You will be able to
          conduct your business, conduct meetings, and more.
        </p>
      </div>

      {/* Icons and Names of Services */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex justify-center items-center mt-16 gap-8 sm:gap-12 lg:gap-16">
        <div className="flex flex-col justify-center items-center hover:scale-110 ease-in duration-200">
          <div className="bg-white h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] lg:h-[140px] lg:w-[140px] flex flex-col justify-center items-center rounded-full shadow-xl p-4 dark:bg-gray-700">
            <Image
              src={houseIcon}
              alt="house"
              className="w-8 h-8 sm:w-11 sm:h-11"
            />
            <p className="font-bold text-xs sm:text-sm leading-6 text-center text-blueCardTitle dark:text-gray-200 mt-2">
              House
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:scale-110 ease-in duration-200">
          <div className="bg-white h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] lg:h-[140px] lg:w-[140px] flex flex-col justify-center items-center rounded-full shadow-xl p-4 dark:bg-gray-700">
            <Image
              src={apartmentIcon}
              alt="apartment"
              className="w-8 h-8 sm:w-11 sm:h-11"
            />
            <p className="font-bold text-xs sm:text-sm leading-6 text-center text-blueCardTitle dark:text-gray-200 mt-2">
              Apartment
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:scale-110 ease-in duration-200">
          <div className="bg-white h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] lg:h-[140px] lg:w-[140px] flex flex-col justify-center items-center rounded-full shadow-xl p-4 dark:bg-gray-700">
            <Image
              src={officeIcon}
              alt="office"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <p className="font-bold text-xs sm:text-sm leading-6 text-center text-blueCardTitle dark:text-gray-200 mt-2">
              Office
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:scale-110 ease-in duration-200">
          <div className="bg-white h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] lg:h-[140px] lg:w-[140px] flex flex-col justify-center items-center rounded-full shadow-xl p-4 dark:bg-gray-700">
            <Image
              src={warehouseIcon}
              alt="warehouse"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <p className="font-bold text-xs sm:text-sm leading-6 text-center text-blueCardTitle dark:text-gray-200 mt-2">
              Warehouse
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:scale-110 ease-in duration-200">
          <div className="bg-white h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] lg:h-[140px] lg:w-[140px] flex flex-col justify-center items-center rounded-full shadow-xl p-4 dark:bg-gray-700">
            <Image
              src={parkingIcon}
              alt="parking"
              className="w-8 h-8 sm:w-11 sm:h-11"
            />
            <p className="font-bold text-xs sm:text-sm leading-6 text-center text-blueCardTitle dark:text-gray-200 mt-2">
              Parking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
