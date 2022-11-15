import React, { Fragment } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { cartActions } from "../../context/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        title: props.title,
        price: props.price,
        quantity: props.quantity,
        totalPrice: props.totalPrice,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(props.id));
  };

  return (
    <Fragment>
      <li>
        <div className="flex gap-5 justify-between">
          <div>
            <h1 className="text-lg text-yellow-600">
              {props.title}
              <br />
              /${props.price}
            </h1>
            <p className="text-white text-xl opacity-80 flex flex-col items-start justify-start">
              <span>amount: {props.quantity}</span>
              <span>Total: {props.totalPrice}</span>
            </p>
          </div>
          <div className="text-white opacity-70 text-2xl flex flex-col justify-evenly items-center">
            <AiOutlineMinusCircle
              className="cursor-pointer"
              onClick={removeItemHandler}
            />
            <AiOutlinePlusCircle
              className="cursor-pointer"
              onClick={addItemHandler}
            />
          </div>
        </div>
      </li>
      <hr className="w-full h-[1px] text-white opacity-50" />
    </Fragment>
  );
};

export default CartItem;
