import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { BsCartPlus } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { cartActions } from "../../context/cart-slice";

const PopularProductCard = (props) => {
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
      className="relative bg-[#25252D] w-[210px] h-[250px] rounded-[10px] flex flex-col gap-3 items-center justify-start"
    >
      <div className="w-[100%] h-[100px] flex items-center justify-center">
        <img
          className=" opacity-90 w-[80%] h-full rounded-b-[10px]"
          src={props.image}
          alt=""
          loading="lazy"
        />
      </div>

      <div className="bg-[#FDD69B] absolute left-[-6.5%] top-[6%] -rotate-90 w-[50px] flex items-center justify-center h-[20px]">
        <h1>Sale</h1>
      </div>

      <div className="flex flex-wrap items-center text-center">
        <h1 className="text-white text-[1rem]">{props.title}</h1>
      </div>

      <div className="flex gap-2 text-[#F8D1A3] text-xl">
        <ImStarFull />
        <ImStarFull />
        <ImStarFull />
        <ImStarFull />
        <ImStarEmpty />
      </div>

      <div>
        <h2 className="text-white text-xl">${props.price}</h2>
      </div>

      <div>
        <button
          onClick={addItemHandler}
          className=" w-full flex gap-2 items-center justify-center text-md text-white bg-[#181820] py-2 px-5"
        >
          <BsCartPlus />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default PopularProductCard;
