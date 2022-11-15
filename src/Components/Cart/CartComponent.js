import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CartItem from "./CartItem";
import CheckOutForm from "./CheckOutForm";
import ShoppingTitles from "./ShoppingTitles";
import { cartActions } from "../../context/cart-slice";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.items);
  const totalPrice = useSelector((state) => state.totalPrice);

  const dispatch = useDispatch();

  const notify = () =>
    toast.success("Nice, we will contact you soon.", {
      position: "top-center",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });

  const submitOrder = (event) => {
    event.preventDefault();
    notify();
    dispatch(cartActions.clearCart());
  };

  return (
    <Fragment>
      <div className="w-full md:h-[100vh] h-full md:mb-[250px] mb-[300px] flex md:flex-row flex-col">
        {/* Cart Corner */}
        <div className="md:w-[60vw] w-full md:h-[100vh] h-full py-20 bg-[#25252D] flex md:items-end items-center justify-center flex-col gap-2">
          <h1 className="text-white text-3xl w-[90%] mt-5 text-start font-bold opacity-70">
            Shopping Cart
          </h1>

          <div className="w-[90%] h-full overflow-y-auto bg-black rounded-l-[10px] ">
            <ShoppingTitles />
            {cartItems.map((item) => (
              <CartItem
                id={item.id}
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                totalPrice={item.totalPrice}
                amount={item.quantity}
              />
            ))}
            <div className="text-2xl text-white p-5 w-full text-center">
              Total Price: ${totalPrice}
            </div>
          </div>
        </div>

        {/* Check Out Info Corner */}
        <div className=" md:w-[40vw] w-full h-full py-10 flex md:items-center items-center justify-start flex-col gap-2 bg-[#191921]">
          <CheckOutForm submit={submitOrder} />
        </div>
      </div>

      {/* Success order */}
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </Fragment>
  );
};

export default CartComponent;
