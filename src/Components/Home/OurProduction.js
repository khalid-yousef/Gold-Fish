import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import PopularProductCard from "../UI/PopularProductCard";
import useFlipped from "../../hooks/use-flipped";

const OurProduction = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState({
    sushi: false,
    seafood: false,
    salads: false,
  });

  const initialActiveState = { sushi: false, seafood: false, salads: false };
  const ourProduction = props.allProducts;
  useEffect(() => {
    setAllProducts(ourProduction);
    setFiltered(ourProduction);
  }, [ourProduction]);

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

  const myRef = useRef();
  const { animation } = useFlipped(myRef, 0.2);

  return (
    <div className="bg-[#292D36] w-full h-full p-20 flex flex-wrap flex-col gap-20 items-center justify-center">
      <div
        ref={myRef}
        className="w-full h-[150%] flex flex-col flex-wrap gap-10 items-center justify-center"
      >
        {/* AllProducts Button Filter */}
        <div className="flex flex-wrap w-full items-center justify-center gap-2 text-lg">
          <button
            onClick={() => {
              setFiltered(allProducts);
              setActive(initialActiveState);
            }}
            className={`${
              filtered === allProducts ? "button-active" : "button-inactive"
            }`}
          >
            All Products
          </button>

          {/* Sushi Button Filter */}
          <button
            onClick={() => {
              setFiltered(sushiCategory);
              setActive({ ...initialActiveState, sushi: true });
            }}
            className={`${active.sushi ? "button-active" : "button-inactive"}`}
          >
            Sushi
          </button>

          {/* Seafood Button Filter */}
          <button
            onClick={() => {
              setFiltered(seafoodCategory);
              setActive({ ...initialActiveState, seafood: true });
            }}
            className={`${
              active.seafood ? "button-active" : "button-inactive"
            }`}
          >
            Seafood
          </button>

          {/* Salads Button Filter */}
          <button
            onClick={() => {
              setFiltered(saladsCategory);
              setActive({ ...initialActiveState, salads: true });
            }}
            className={`${active.salads ? "button-active" : "button-inactive"}`}
          >
            Salads
          </button>
        </div>

        {/* Products Map */}
        <div className="flex flex-wrap items-center gap-10 justify-center md:justify-between w-full">
          {filtered.map((product) => (
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
