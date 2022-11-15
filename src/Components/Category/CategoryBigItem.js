import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../context/cart-slice";

import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { BsCartPlus } from "react-icons/bs";

const CategoryBigItem = (props) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        image: props.image,
        title: props.title,
        price: props.price,
      })
    );
  };

  return (
    <div
      className={`bg-[#191921] mx-auto w-full h-full py-6 px-2 rounded-[10px] flex flex-col md:flex-row items-center justify-evenly gap-5`}
    >
      <div className="md:w-[15em] md:h-[12em] w-[10em] rounded-[10px]">
        <img
          className="md:w-[15em] md:h-[12em] w-[10em] h-[8em] rounded-[10px]"
          src={props.image}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className=" text-3xl text-white">{props.title}</h1>
        <p className="text-white text-2xl font-bold">${props.price}</p>
        <div className="flex gap-2 text-[#F8D1A3] text-xl">
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarEmpty />
        </div>
        <button
          onClick={addItemHandler}
          className=" rounded-[10px] w-[10em] flex gap-2 items-center justify-center text-md text-[#181820] bg-[#FFDEA0] py-2 px-5"
        >
          <BsCartPlus />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default CategoryBigItem;
