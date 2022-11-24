import React, { useRef } from "react";
import { motion } from "framer-motion";

import PopularProductCard from "../UI/PopularProductCard";
import { BsArrowRight } from "react-icons/bs";
import useComponentAnimation from "../../hooks/use-component-animation";
import { useNavigate } from "react-router-dom";

const OurProduction = (props) => {
  const Navigate = useNavigate();

  // Sushi Corner
  const sushiRef = useRef();

  const sushiCategory = props.allProducts.filter((product) => {
    return product.id.slice(0, 2) === "su";
  });

  const { animation: sushiAnimation } = useComponentAnimation(sushiRef, 0.2);

  // Seafood Corner
  const seafoodRef = useRef();

  const seafoodCategory = props.allProducts.filter((product) => {
    return product.id.slice(0, 2) === "se";
  });

  const { animation: seafoodAnimation } = useComponentAnimation(
    seafoodRef,
    0.2
  );

  // Salads Corner
  const saladsRef = useRef();

  const saladsCategory = props.allProducts.filter((product) => {
    return product.id.slice(0, 2) === "sa";
  });

  const { animation: saladsAnimation } = useComponentAnimation(saladsRef, 0.2);

  return (
    <div className="bg-[#292D36] w-full h-full p-20 flex flex-wrap flex-col gap-20 items-center justify-center">
      {/* Sushi Category */}
      <motion.div
        ref={sushiRef}
        animate={sushiAnimation}
        className="w-full flex flex-col flex-wrap gap-10 items-center justify-center"
      >
        <div className="flex flex-wrap w-full items-center justify-between text-white md:text-3xl text-2xl">
          <h1>Sushi Dishes</h1>
          <div>
            <BsArrowRight
              className="cursor-pointer"
              onClick={() => {
                Navigate("/category/sushi");
                window.scrollTo(0, 0);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-10 justify-center md:justify-between w-full">
          {sushiCategory.map((product) => (
            <PopularProductCard
              id={product.id}
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </motion.div>

      {/* Seafood Category */}
      <motion.div
        ref={seafoodRef}
        animate={seafoodAnimation}
        className="w-full flex flex-col flex-wrap gap-10 items-center justify-center"
      >
        <div className="flex w-full items-center justify-between text-white md:text-3xl text-2xl">
          <h1>Seafood Dishes</h1>
          <div>
            <BsArrowRight
              className="cursor-pointer"
              onClick={() => {
                Navigate("/category/seafood");
                window.scrollTo(0, 0);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-10 justify-center md:justify-between w-full">
          {seafoodCategory.map((product) => (
            <PopularProductCard
              id={product.id}
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </motion.div>

      {/* Salads Category */}
      <motion.div
        ref={saladsRef}
        animate={saladsAnimation}
        className="w-full flex flex-col flex-wrap gap-10 items-center justify-center"
      >
        <div className="flex w-full items-center justify-between text-white md:text-3xl text-2xl">
          <h1>Salads Dishes</h1>
          <div>
            <BsArrowRight
              className="cursor-pointer"
              onClick={() => {
                Navigate("/category/salads");
                window.scrollTo(0, 0);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-10 justify-center md:justify-between w-full">
          {saladsCategory.map((product) => (
            <PopularProductCard
              id={product.id}
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurProduction;
