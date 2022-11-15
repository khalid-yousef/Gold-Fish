import React, { useState } from "react";
import VisaForm from "./VisaForm";

const CheckOutForm = (props) => {
  const [Online, setOnline] = useState(true);
  const [cash, setCash] = useState(false);

  const [visa, setVisa] = useState(true);
  const [paypal, setPaypal] = useState(false);

  const cashOnDelivery = () => {
    setCash(true);
    setOnline(false);
  };
  const onlinePayment = () => {
    setCash(false);
    setOnline(true);
  };

  const choseVisa = () => {
    setVisa(true);
    setPaypal(false);
  };

  const chosePaypal = () => {
    setVisa(false);
    setPaypal(true);
  };

  return (
    <div className="overflow-y-auto w-full h-full px-5 py-10 flex flex-col gap-5">
      <h1 className="text-white text-3xl w-[90%] mt-5 text-start font-bold opacity-70">
        Payment
      </h1>

      <div className="text-white text-xl flex flex-col items-start justify-center w-full gap-5">
        {/* Radio Select */}
        <div className="flex flex-col gap-2 items-start justify-center">
          {/* First Radio */}
          <div className="flex items-center justify-center gap-2">
            <div
              onClick={cashOnDelivery}
              className={`${
                cash && "bg-blue-600"
              } cursor-pointer w-[15px] h-[15px] border-2 rounded-[50%]`}
            ></div>
            <h2 onClick={cashOnDelivery} className="cursor-pointer">
              Cash on delivery
            </h2>
          </div>

          {/* Second Radio */}
          <div className="flex items-center justify-center gap-2">
            <div
              onClick={onlinePayment}
              className={`${
                Online && "bg-blue-600"
              } cursor-pointer w-[15px] h-[15px] border-2 rounded-[50%]`}
            ></div>
            <h2 onClick={onlinePayment} className="cursor-pointer">
              Online Payment
            </h2>
          </div>
        </div>

        {/* Online Payment Form */}

        <div
          className={`${
            cash && "h-0"
          } h-full overflow-hidden transition-all duration-300 flex items-center justify-center gap-2`}
        >
          <div
            onClick={chosePaypal}
            className={`${
              paypal && "bg-[#FDD69B] text-black"
            } cursor-pointer w-[100px] h-[35px] border-[#FDD69B] border-[1px] rounded-[10px] text-center text-white text-xl`}
          >
            Paypal
          </div>
          <div
            onClick={choseVisa}
            className={`${
              visa && "bg-[#FDD69B] text-black"
            } cursor-pointer w-[100px] h-[35px] border-[1px] rounded-[10px] border-[#FDD69B] text-center text-white text-xl`}
          >
            Visa
          </div>
        </div>

        {/* Check Out Info Form */}
        <form className="w-full " onSubmit={props.submit}>
          <div className="w-full flex flex-col gap-3 ">
            {/* Name */}
            <div className="w-full flex flex-col items-start justify-start">
              <label htmlFor="name" className="opacity-70">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full text-gray-200 bg-transparent border-b-[1px] border-opacity-10 outline-none"
              />
            </div>

            {/* Email */}
            <div className="w-full flex flex-col items-start justify-start">
              <label htmlFor="email" className="opacity-70">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full text-gray-200 bg-transparent border-b-[1px] border-opacity-10 outline-none"
              />
            </div>

            {/* Telephone */}
            <div className="w-full flex flex-col items-start justify-start">
              <label htmlFor="phone" className="opacity-70">
                Your Phone number
              </label>
              <input
                type="number"
                id="phone"
                className="w-full text-gray-200 bg-transparent border-b-[1px] border-opacity-10 outline-none"
              />
            </div>

            {/* Visa Form */}
            {visa && !cash && <VisaForm />}

            {/* Paypal Button */}
            {paypal && !cash && (
              <button className="py-2 px-3 rounded-[10px] bg-[#FDD69B] hover:bg-[#fdd69bdc] text-black text-opacity-90">
                Connect your Paypal
              </button>
            )}
          </div>
          {(visa || cash) && (
            <button className=" mt-3 py-2 px-5 rounded-[10px] bg-[#FDD69B] hover:bg-[#fdd69bdc] text-black text-opacity-90">
              Check Out
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckOutForm;
