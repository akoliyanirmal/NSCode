import Link from "next/link";
import React, { useState } from "react";
import user3 from "../assets/images/user3.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import ThemeChanger from "./themeChanger";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const [header, setHeader] = useState(false);

  const [projectDropdown, setProjectDropdown] = useState(false);
  const [residentialDropdown, setResidentialDropdown] = useState(false);

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
    setProjectDropdown(false);
    setResidentialDropdown(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-white dark:bg-gray-900 shadow-xl flex items-center z-40 ease-in duration-300">
      <div className="mx-auto px-4 flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex justify-start items-center">
          <Link href="/">
            <Image
              height={80}
              width={80}
              src="/images/NSCode.png"
              alt="Ropsan"
            />
          </Link>
          <div className="flex items-center ml-2">YourHouse</div>
        </div>

        {/* Navbar Links and ThemeChanger - desktop */}
        <div className="hidden sm:flex justify-end items-center space-x-8 w-full">
          <ul className="flex items-center space-x-8 text-black dark:text-white">
            <li className="hover:text-orange-500">
              <Link href="/">Home</Link>
            </li>

            <ul className="relative group">
              <div className="dropdown">
                <li className="dropbtn hover:text-orange-500 cursor-pointer flex items-center">
                  Pages
                  <FaAngleDown
                    className={`ml-1 ${
                      projectDropdown ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </li>

                <div className="dropdown-one">
                  <Link href="/Blog">
                    <div
                      id="link1"
                      className="dItem hover:text-orange-500 flex items-center"
                    >
                      <span>Blog 1</span>
                    </div>
                  </Link>

                  <div className="dItem hover:text-orange-500 flex items-center">
                    <span>Blog 2 coming soon</span>
                  </div>

                  <div className="dItem hover:text-orange-500 flex items-center">
                    <span>Blog 3 coming soon</span>
                  </div>
                </div>
              </div>
            </ul>

            <li className="hover:text-orange-500">
              <Link href="/#about">About Us</Link>
            </li>

            <li className="hover:text-orange-500">
              <Link href="/#Properties">Properties</Link>
            </li>

            <li className="hover:text-orange-500">
              <Link href="/#services">Services</Link>
            </li>

            <li className="hover:text-orange-500">
              <Link href="/#reviews">Reviews</Link>
            </li>

            <li className="hover:text-orange-500">
              <Link href="/#contact">Contact Us</Link>
            </li>

            <div>
              <ThemeChanger />
            </div>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}

      {/* ThemeChanger - icon mobile */}
      <div className="flex-1 flex justify-center sm:hidden">
        <ThemeChanger />
      </div>

      {/* Mobile Menu Icon */}
      <div className="block sm:hidden p-4" onClick={handleHeader}>
        {header ? (
          <AiOutlineClose size={30} className="text-black dark:text-white" />
        ) : (
          <AiOutlineMenu size={30} className="text-black dark:text-white" />
        )}
      </div>

      <div
        className={`${
          header ? "left-0" : "-left-full"
        } absolute top-20 sm:hidden w-full h-screen bg-white dark:bg-gray-900 text-center ease-in duration-300 text-black dark:text-white`}
      >
        <ul className="pt-10 space-y-8">
          <li className="text-2xl hover:text-orange-500">
            <Link href="/" onClick={handleMobileHeader}>
              Home
            </Link>
          </li>

          <li
            className="text-2xl hover:text-orange-500 cursor-pointer flex justify-center relative left-3"
            onClick={() => setProjectDropdown(!projectDropdown)}
          >
            Pages
            <FaAngleDown
              className={`ml-1 relative top-1 ${
                projectDropdown ? "rotate-180" : "rotate-0"
              }`}
            />
          </li>
          {projectDropdown && (
            <ul className="space-y-4">
              <div
                onClick={() => {
                  setResidentialDropdown(!residentialDropdown);
                  handleMobileHeader();
                }}
              >
                <Link href="/Blog">
                  <li className="text-xl hover:text-orange-500 bottom-2 cursor-pointer flex justify-center relative">
                    Blog 1
                  </li>
                </Link>
              </div>

              <li className="text-xl hover:text-orange-500 flex justify-center">
                Blog 2 coming soon
              </li>
              <li className="text-xl hover:text-orange-500 flex justify-center">
                Blog 3 coming soon
              </li>
            </ul>
          )}
          <li className="text-2xl hover:text-orange-500">
            <Link href="/#about" onClick={handleMobileHeader}>
              About
            </Link>
          </li>

          <li className="text-2xl hover:text-orange-500">
            <Link href="/#services" onClick={handleMobileHeader}>
              Services
            </Link>
          </li>

          <li className="text-2xl hover:text-orange-500">
            <Link href="/#reviews" onClick={handleMobileHeader}>
              Reviews
            </Link>
          </li>

          <li className="text-2xl hover:text-orange-500">
            <Link href="/#contact" onClick={handleMobileHeader}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
