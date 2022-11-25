import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import Slider from "react-slick";

import CategoryBigItem from "./CategoryBigItem";
import CategorySmallItem from "./CategorySmallItem";
import { allProducts } from "../UI/products-data";
import errorImage from "../../Assets/error-image.svg";
import CategoryLinks from "./CategoryLinks";

const CategorySlider = (props) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const { categoryName } = useParams();

  const sushiProducts = allProducts.filter(
    (product) => product.id.slice(0, 2) === "su"
  );
  const seafoodProducts = allProducts.filter(
    (product) => product.id.slice(0, 2) === "se"
  );
  const saladsProducts = allProducts.filter(
    (product) => product.id.slice(0, 2) === "sa"
  );

  let products = null;

  if (categoryName === "sushi") {
    products = sushiProducts;
  }
  if (categoryName === "seafood") {
    products = seafoodProducts;
  }
  if (categoryName === "salads") {
    products = saladsProducts;
  }

  if (!products) {
    return (
      <div className="flex gap-10 flex-col items-center justify-center w-[100vw] h-[100vh] bg-[#25252D] md:mb-[250px] mb-[300px]">
        <img src={errorImage} alt="" className="w-[28em]" />
        <Link
          className="bg-[#FFDEA0] text-white py-3 px-10 text-xl rounded-[20px] opacity-90 hover:scale-125 transition-all duration-300"
          to="/home"
        >
          Home Page
        </Link>
      </div>
    );
  }

  return (
    <div
      className={` ${props.className} overflow-hidden w-[100%] h-[100vh] pt-20 flex flex-col items-center justify-start gap-10 bg-[#25252D]`}
    >
      <Slider
        className="md:w-[40em] w-[20em]"
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        arrows={false}
        dots={false}
      >
        {products.map((product) => (
          <CategoryBigItem
            id={product.id}
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </Slider>
      <Slider
        className="sm:w-[40em] w-[20em]"
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        autoplay={true}
        autoplaySpeed={3000}
        cssEase={"linear"}
      >
        {products.map((product) => (
          <CategorySmallItem
            id={product.id}
            key={product.id}
            title={product.title}
            image={product.image}
          />
        ))}
      </Slider>

      <CategoryLinks />
    </div>
  );
};

export default CategorySlider;
