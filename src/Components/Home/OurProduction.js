import React, { useRef } from "react";
import { motion } from "framer-motion";

import PopularProductCard from "../UI/PopularProductCard";
import { BsArrowRight } from "react-icons/bs";
import useFlipped from "../../hooks/use-flipped";
import { useNavigate } from "react-router-dom";

const OurProduction = (props) => {
  const Navigate = useNavigate();

  // Sushi Corner
  const sushiRef = useRef();

  const sushiCategory = props.allProducts.filter((product) => {
    return product.id.slice(0, 2) === "su";
  });

  const { animation: sushiAnimation } = useFlipped(sushiRef, 0.2);

  // Seafood Corner
  const seafoodRef = useRef();

  const seafoodCategory = props.allProducts.filter((product) => {
    return product.id.slice(0, 2) === "se";
  });

  const { animation: seafoodAnimation } = useFlipped(seafoodRef, 0.2);

  // Salads Corner
  const saladsRef = useRef();

  const saladsCategory = props.allProducts.filter((product) => {
    return product.id.slice(0, 2) === "sa";
  });

  const { animation: saladsAnimation } = useFlipped(saladsRef);

  return (
    <div className="bg-[#292D36] w-full h-full p-20 flex flex-wrap flex-col gap-20 items-center justify-center">
      {/* Sushi Category */}
      <div
        ref={sushiRef}
        className="w-full h-[150%] flex flex-col flex-wrap gap-10 items-center justify-center"
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
          {sushiCategory.map((product, index) => (
            <motion.div key={product.id} animate={sushiAnimation}>
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

      {/* Seafood Category */}
      <div
        ref={seafoodRef}
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
            <motion.div key={product.id} animate={seafoodAnimation}>
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

      {/* Salads Category */}
      <div
        ref={saladsRef}
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
            <motion.div key={product.id} animate={saladsAnimation}>
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
    </div>
  );
};

export default OurProduction;
