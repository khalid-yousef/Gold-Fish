import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../Assets/error-image.svg";

const PageNotFound = () => {
  return (
    <div className="flex gap-10 flex-col items-center justify-center w-[100%] h-[100vh] bg-[#25252D] md:mb-[250px] mb-[300px]">
      <img src={errorImage} alt="" className="w-[28em]" />
      <Link
        className="bg-[#FFDEA0] text-[#455A64] font-bold py-3 px-10 text-xl rounded-[20px] opacity-90 hover:scale-125 transition-all duration-300"
        to="/home"
      >
        Home Page
      </Link>
    </div>
  );
};

export default PageNotFound;
