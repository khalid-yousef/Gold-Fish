import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { BsFillCartCheckFill, BsTrash } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";
import CartItem from "./CartItem";
import { cartActions } from "../../context/cart-slice";

const CartButton = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const items = useSelector((state) => state.items);
  const totalAmount = useSelector((state) => state.totalAmount);
  const totalPrice = useSelector((state) => state.totalPrice);

  useEffect(() => {
    setPopUp(true);

    const timeOut = setTimeout(() => {
      setPopUp(false);
    }, 100);

    return () => {
      clearTimeout(timeOut);
    };
  }, [totalAmount]);

  const fullCart = () => {
    setCartIsShown((v) => !v);
  };

  const checkOut = () => {
    if (items.length === 0) {
      return;
    } else {
      navigate("/cart");
      setCartIsShown(false);
      window.scrollTo(0, 0);
    }
  };

  const clearCart = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <div
      className={`fixed z-[200] transition-all duration-500 ${
        cartIsShown ? "bottom-0 right-0 z-[200]" : "right-0 bottom-[30%]"
      } `}
    >
      {/* Full Cart */}
      <div
        className={`bg-[#25252D] rounded-tl-[20px] transition-all duration-300 absolute bottom-0 overflow-hidden -z-10 w-[200px]  ${
          cartIsShown ? "h-[92vh] overflow-y-auto pb-14" : "h-[0px]"
        } flex items-start  justify-start px-5 gap-5`}
      >
        <div className=" w-full mt-5">
          <h1 className="text-white text-3xl text-center">Your Items</h1>
          <ul className="flex flex-col gap-5 mt-10">
            {/* Cart Item */}
            {items.map((item) => (
              <CartItem
                id={item.id}
                key={item.id}
                title={item.title}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
                price={item.price}
              />
            ))}
          </ul>
          <h1 className="text-white text-xl my-5 block">
            Total Price: ${totalPrice}
          </h1>
          <button
            onClick={checkOut}
            className={`flex items-center justify-center gap-2 outline-none border-[1px] border-[#FFDEA0] py-2 px-3 w-full bg-[#FFDEA0] text-black md:bg-transparent md:text-white md:hover:bg-[#FFDEA0] hover:scale-110 md:hover:text-black transition-all duration-300`}
          >
            <IoBagCheckOutline /> Check Out
          </button>

          <button
            onClick={clearCart}
            className={`flex items-center justify-center gap-2 mt-5 outline-none border-[1px] border-red-500 py-2 px-3 w-full bg-red-500 md:bg-transparent text-white md:hover:bg-red-500 hover:scale-110 transition-all duration-300`}
          >
            <BsTrash /> Clear Cart
          </button>
        </div>
      </div>

      {/* Cart Button */}
      <div
        onClick={fullCart}
        className={` cursor-pointer ${
          cartIsShown
            ? "w-[200px] h-[50px]"
            : "w-[50px] h-[200px] rounded-tl-[20px] rounded-bl-[20px]"
        }  transition-all duration-500 bg-[#181820] text-white text-xl flex gap-2 items-center justify-center`}
      >
        <div
          className={`${
            cartIsShown
              ? "h-[50px] w-[35px]"
              : "h-[35px] w-[50px] rounded-bl-[20px]"
          } absolute p-2 left-0 bottom-0 flex items-center justify-center text-[#181820] bg-[#FDD69B] rounded-r-[10px]`}
        >
          <BsFillCartCheckFill className="text-2xl opacity-95" />
        </div>
        <div
          className={`text-2xl w-full h-full font-bold flex items-center justify-center ${
            cartIsShown ? "flex-row gap-2" : "flex-col gap-0"
          }`}
        >
          <span
            className={`${popUp ? "scale-150 text-[#FDD69B]" : "scale-90"}`}
          >
            {totalAmount}
          </span>
          <span
            className={`${cartIsShown ? "rotate-0" : "rotate-12"} text-lg `}
          >
            Items
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
