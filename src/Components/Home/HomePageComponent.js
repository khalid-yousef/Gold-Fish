import React, { Fragment } from "react";
import Category from "./Category";
import NewsLetter from "../UI/NewsLetter";
import OurProduction from "./OurProduction";
import PopularProducts from "./PopularProducts";
import StartPage from "./StartPage";
import Testimonials from "./Testimonials/Testimonials";

const HomePageComponent = (props) => {
  return (
    <Fragment>
      <StartPage className=" w-[100vw] h-[100vh]" />
      <PopularProducts products={props.productsList} />
      <Category />
      <OurProduction allProducts={props.productsList} />
      <NewsLetter />
      <Testimonials />
    </Fragment>
  );
};

export default HomePageComponent;
