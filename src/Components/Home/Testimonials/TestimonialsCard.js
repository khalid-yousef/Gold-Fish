import React from "react";
import { ImStarEmpty, ImStarFull } from "react-icons/im";

const TestimonialsCard = (props) => {
  return (
    <div
      className={`${props.className} mt-10 rounded-[20px] flex flex-col items-start p-3 gap-5 justify-center w-[98%] h-[250px] bg-[#25252D]`}
    >
      <div className=" text-white text-xl flex gap-3 items-center justify-start">
        <img
          className="w-[80px] h-[80px] rounded-[50px]"
          src={props.image}
          alt=""
        />
        <h1>{props.name}</h1>
      </div>
      <p className="text-white opacity-80 text-start">{props.desc}</p>

      <div className="flex gap-2 text-[#F8D1A3] text-xl">
        <ImStarFull />
        <ImStarFull />
        <ImStarFull />
        <ImStarFull />
        <ImStarEmpty />
      </div>
    </div>
  );
};

export default TestimonialsCard;
