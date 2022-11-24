import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaCcPaypal } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";

const Footer = (props) => {
  return (
    <div
      className={`${props.className} md:h-[250px] h-[300px] w-[100%] bg-black flex flex-col items-center justify-center gap-5`}
    >
      {/* First Line */}
      <div className="w-full md:flex-row flex-col flex gap-4 items-center justify-between px-10">
        {/* Free Delivery */}
        <div className=" absolute top-0 left-[50%] translate-x-[-50%] px-5 py-0 bg-[#FED79C]">
          <h1 className="text-black md:text-lg text-sm opacity-80">
            Free Delivery From $30
          </h1>
        </div>

        {/* Logo */}
        <h1 className="text-center md:text-start font-bold text-4xl text-[#fed79c] md:w-[30vw] w-full">
          Gold Fish
        </h1>
        {/* Navigation */}
        <ul className="text-white text-md md:w-[40%] w-full flex items-center justify-evenly ">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Reviews</li>
        </ul>

        {/* Contact Us */}
        <div className="md:w-[30%] w-full text-white text-md flex items-center md:justify-end justify-center">
          <div className="mr-2 w-[30px] h-[30px] text-black bg-[#FDD69B] flex items-center justify-center rounded p-2">
            <FiPhoneCall />
          </div>
          <h2>To Contact Us</h2>
        </div>
      </div>

      {/* Payments */}
      <div className="text-white text-3xl opacity-60 flex items-center justify-center gap-5">
        <FaCcPaypal />
        <RiVisaFill />
        <SiMastercard />
      </div>

      <hr className="text-white border-[1px] opacity-20 w-full" />
      <h1 className="text-white text-md font-bold opacity-50 absolute md:bottom-[10%] bottom-[5%] ">
        All Rights Reserved 2021
      </h1>
    </div>
  );
};

export default Footer;
