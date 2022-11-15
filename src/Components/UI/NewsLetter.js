import React from "react";
import newsLetter1 from "../../Assets/newsletter1.png";
import newsLetter2 from "../../Assets/newsletter2.jpg";

const NewsLetter = (props) => {
  return (
    <div
      className={`overflow-hidden w-[100vw] h-full py-20 flex items-center flex-col md:flex-row bg-[#292D36] relative`}
    >
      <div className="md:w-[70vw] w-[100vw] flex">
        {/* First Image */}
        <div
          className={`md:w-[50vw] w-[100vw] h-[300px] bg-[#25252D] relative`}
        >
          <img
            className=" opacity-90 md:w-[30vw] w-[100%] h-[350px] absolute right-0 top-[-13%]"
            src={newsLetter1}
            alt=""
          />

          <h1 className="md:text-5xl text-3xl md:text-end text-center text-white absolute md:right-2 right-[20%]  top-[50%]">
            <span>Discount</span> <br /> On All Seafood
          </h1>

          <div className=" flex gap-3  absolute md:right-0 right-[20%] md:bottom-0 bottom-[10%]">
            <h1 className="text-xl text-white">Promo Code</h1>
            <h2 className="bg-[#FBD99C] text-black md:px-5 px-2 text-xl">
              seafood
            </h2>
          </div>
        </div>

        {/* Second Image */}

        <div className=" md:block hidden md:w-[20vw] w-[50vw] h-[300px]">
          <img className="w-full h-full" src={newsLetter2} alt="" />
        </div>
      </div>

      {/* Form */}

      <div className="md:w-[30vw] w-[100vw] h-[300px] flex items-center justify-center bg-[#070008]">
        <form
          onSubmit={(event) => event.preventDefault()}
          className="flex flex-col text-white gap-5 z-20"
        >
          <h1 className="text-3xl">Subscribe To News</h1>

          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="bg-transparent border-b-2 border-white outline-none"
              id="name"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="bg-transparent border-b-2 border-white outline-none"
              id="email"
              type="email"
            />
          </div>

          <button className="bg-[#FDD69B] text-xl px-10 text-black">
            Subscribe
          </button>
        </form>

        {/* Shape */}
        <div className="absolute right-[-7%] opacity-50 bottom-[20%] rounded-[100%] border-white border-[1px] w-[200px] h-[200px]">
          <div className=" absolute right-[30%] bottom-[20%] rounded-[100%] border-white border-[1px] w-[100px] h-[100px]"></div>
        </div>

        <div className=" absolute left-[-7%] opacity-50 bottom-[20%] rounded-[100%] border-white border-[1px] w-[200px] h-[200px]">
          <div className=" absolute right-[30%] bottom-[20%] rounded-[100%] border-white border-[1px] w-[100px] h-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
