import Link from "next/link";
import React from "react";
import Image from "next/image";
import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer bg-[#EEEEEE] pt-10 lg:pt-20 pb-10 md:pb-20 lg:pb-24 font-normal bg-no-repeat">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 sm:mb-0">
            <Link href="#" className="block mb-6">
              <Image
                src="/images/NSCode.png"
                width={99}
                height={46}
                alt="footer"
                loading="lazy"
              />
            </Link>
            <p className="mb-4 max-w-[270px]">
              Properties are most budget friendly so you have are find
              opportunity is main responsibility to clients
            </p>
            <p className="text-sm hidden md:block">
              ©
              <Link href="#" className="text-secondary">
                NSCode
              </Link>
              All Rights Reserved - Privacy Policy
            </p>
          </div>

          <div className="mb-8 sm:mb-0">
            <h3 className="font-lora text-xl text-primary mb-4">
              Information.
            </h3>
            <ul className="text-base leading-none">
              <li className="mb-4">
                <Link
                  href="#"
                  className="inline-block transition-all hover:text-secondary"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  className="inline-block transition-all hover:text-secondary"
                >
                  Properties
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  className="inline-block transition-all hover:text-secondary"
                >
                  Services
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  className="inline-block transition-all hover:text-secondary"
                >
                  Reviews
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  className="inline-block transition-all hover:text-secondary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8 sm:mb-0">
            <h3 className="font-lora text-xl text-primary mb-4">Support.</h3>
            <ul className="text-base leading-none">
              <li className="mb-4">
                <Link
                  href="#"
                  className="inline-block transition-all hover:text-secondary"
                >
                  Add Property
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  className="inline-block transition-all hover:text-secondary"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  className="inline-block transition-all hover:text-secondary"
                >
                  Help line
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  className="inline-block transition-all hover:text-secondary"
                >
                  Our Agents
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  className="inline-block transition-all hover:text-secondary"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8 sm:mb-0">
            <h3 className="font-lora text-xl text-primary mb-4">Address.</h3>
            <p className="mb-4">2104 Charmaine Lane Amarillo, New York</p>
            <ul className="flex items-center space-x-4 mt-4">
              <li>
                <Link
                  href="#"
                  className="w-8 h-8 transition-all rounded-full flex items-center justify-center hover:shadow-md bg-black text-white hover:bg-secondary"
                >
                  <RiFacebookFill />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="w-8 h-8 transition-all rounded-full flex items-center justify-center hover:shadow-md bg-black text-white hover:bg-secondary"
                >
                  <RiTwitterFill />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="w-8 h-8 transition-all rounded-full flex items-center justify-center hover:shadow-md bg-black text-white hover:bg-secondary"
                >
                  <RiInstagramFill />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
