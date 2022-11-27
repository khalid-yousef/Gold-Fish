import React, { Suspense } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const StartPage = React.lazy(() => import("./StartPage"));
const Category = React.lazy(() => import("./Category"));
const OurProduction = React.lazy(() => import("./OurProduction"));
const PopularProducts = React.lazy(() => import("./PopularProducts"));
const Testimonials = React.lazy(() => import("./Testimonials/Testimonials"));
const NewsLetter = React.lazy(() => import("../UI/NewsLetter"));

const HomePageComponent = (props) => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<LoadingSpinner />}>
        <StartPage className=" w-full h-[100vh]" />
        <PopularProducts products={props.productsList} />
        <Category />
        <OurProduction allProducts={props.productsList} />
        <NewsLetter />
        <Testimonials />
      </Suspense>
    </div>
  );
};

export default HomePageComponent;
