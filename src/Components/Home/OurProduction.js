import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import PopularProductCard from "../UI/PopularProductCard";
import useFlipped from "../../hooks/use-flipped";

const OurProduction = (props) => {
  const [allProducts, setAllProducts] = useState(props.allProducts);

  const myRef = useRef();
  const { animation } = useFlipped(myRef, 0.2);

  // Sushi products
  const sushiCategory = props.allProducts.filter((product) => {
    return product.id.slice(0, 2) === "su";
  });

  // Seafood products
  const seafoodCategory = props.allProducts.filter((product) => {
    return product.id.slice(0, 2) === "se";
  });

  // Salads products
  const saladsCategory = props.allProducts.filter((product) => {
    return product.id.slice(0, 2) === "sa";
  });
  return (
    <div className="bg-[#292D36] w-full h-full p-20 flex flex-wrap flex-col gap-20 items-center justify-center">
      <div
        ref={myRef}
        className="w-full h-[150%] flex flex-col flex-wrap gap-10 items-center justify-center"
      >
        <div className="flex flex-wrap w-full items-center justify-evenly md:text-2xl text-xl">
          {/* AllProducts Button Filter */}
          <button
            onClick={() => {
              setAllProducts(props.allProducts);
            }}
            className={`${
              allProducts === props.allProducts
                ? "button-active"
                : "button-inactive"
            }`}
          >
            All Products
          </button>

          {/* Sushi Button Filter */}
          <button
            onClick={() => {
              setAllProducts(sushiCategory);
            }}
            className={`${
              allProducts === sushiCategory
                ? "button-active"
                : "button-inactive"
            }`}
          >
            Sushi
          </button>

          {/* Seafood Button Filter */}
          <button
            onClick={() => {
              setAllProducts(seafoodCategory);
            }}
            className={`${
              allProducts === seafoodCategory
                ? "button-active"
                : "button-inactive"
            }`}
          >
            Seafood
          </button>

          {/* Salads Button Filter */}
          <button
            onClick={() => {
              setAllProducts(saladsCategory);
            }}
            className={`${
              allProducts === saladsCategory
                ? "button-active"
                : "button-inactive"
            }`}
          >
            Salads
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-10 justify-center md:justify-between w-full">
          {allProducts.map((product) => (
            <motion.div key={product.id} animate={animation}>
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
