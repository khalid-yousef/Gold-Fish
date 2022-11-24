import { useRef } from "react";
import { motion } from "framer-motion";
import useComponentAnimation from "../../hooks/use-component-animation";
import PopularProductCard from "../UI/PopularProductCard";

const PopularProducts = (props) => {
  const PopularRef = useRef();
  const { animation: PopularAnimation } = useComponentAnimation(
    PopularRef,
    0
  );

  return (
    <div className="w-full h-[100vh] bg-[#292D36] p-20 flex flex-col gap-10">
      {/* Header */}
      <div className="flex w-full items-center justify-center text-white text-3xl">
        <h1>Popular Dishes</h1>
      </div>

      {/* Products List */}
      <div
        ref={PopularRef}
        className="flex flex-wrap items-center gap-10 justify-center"
      >
        {props.products.slice(0, 4).map((product) => (
          <motion.div animate={PopularAnimation} key={product.id}>
            <PopularProductCard
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
