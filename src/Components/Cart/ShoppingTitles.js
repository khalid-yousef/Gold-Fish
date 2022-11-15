import React from "react";

const ShoppingTitles = () => {
  return (
    <div className="text-white md:text-[16px] text-[12px] flex items-center py-1 px-2 border-b-[1px] border-b-white border-opacity-20">
      <p className="w-[55%] text-center">Title</p>

      <p className="w-[15%] text-center border-l-[1px] border-opacity-20 border-white md:px-5 px-3">
        Price
      </p>

      <p className="w-[15%] text-center border-x-[1px] border-opacity-20 border-white  px-0">
        Amount
      </p>

      <p className="w-[15%] md:text-center text-end">Total Price</p>
    </div>
  );
};

export default ShoppingTitles;
