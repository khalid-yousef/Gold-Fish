import React, { Fragment } from "react";
import { ImStarFull, ImStarEmpty } from "react-icons/im";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../context/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        image: props.image,
        title: props.title,
        price: props.price,
      })
    );
  };

  const removeItem = () => {
    dispatch(cartActions.removeItem(props.id));
  };

  return (
    <Fragment>
      <div className="w-[100%] h-fit flex md:gap-0 items-center justify-start gap-2 py-2 px-3">
        <img
          className="block w-[15%] md:h-[80px] h-[50px] rounded-[10px]"
          src={props.image}
          alt=""
        />
        <div className="w-[40%] text-center flex flex-col gap-1  items-center justify-center md:px-5 px-3">
          <h1 className="text-white md:text-[18px] text-[14px]">
            {props.title}
          </h1>
          <div className="flex text-[#F8D1A3] text-[12px]">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarEmpty />
          </div>
        </div>

        <div className="w-[15%] text-white font-bold flex items-center justify-center md:px-5 px-3 md:text-[18px] text-[14px]">
          <p>${props.price}</p>
        </div>

        <div className="w-[15%] flex items-center justify-center text-white md:text-[18px] text-[14px]">
          <AiOutlinePlusCircle
            onClick={addItem}
            className=" cursor-pointer text-xl"
          />
          <p className="text-white font-bold px-1">{props.amount}</p>
          <AiOutlineMinusCircle
            onClick={removeItem}
            className="cursor-pointer text-xl"
          />
        </div>

        <div className="w-[15%] flex items-center justify-center text-white md:text-[18px] text-[14px]">
          ${props.totalPrice}
        </div>
      </div>
      
      <hr className="w-full h-[1px] bg-white opacity-10" />
    </Fragment>
  );
};

export default CartItem;
