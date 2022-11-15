import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../Assets/404 Error Page not Found with people connecting a plug-amico.svg";

const PageNotFound = () => {
  return (
    <div className="flex gap-10 flex-col items-center justify-center w-[100vw] h-[100vh] bg-[#25252D] md:mb-[250px] mb-[300px]">
      <img src={errorImage} alt="" className="w-[28em]" />
      <Link
        className="bg-[#FFDEA0] text-[#25252D] py-3 px-10 text-xl rounded-[20px] opacity-90 hover:scale-125 transition-all duration-300"
        to="/home"
      >
        Home Page
      </Link>
    </div>
  );
};

export default PageNotFound;
