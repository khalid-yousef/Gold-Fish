import React from "react";

import { AnimatePresence, motion } from "framer-motion";

const StartPage = React.lazy(() => import("./StartPage"));
const Category = React.lazy(() => import("./Category"));
const OurProduction = React.lazy(() => import("./OurProduction"));
const PopularProducts = React.lazy(() => import("./PopularProducts"));
const Testimonials = React.lazy(() => import("./Testimonials/Testimonials"));
const NewsLetter = React.lazy(() => import("../UI/NewsLetter"));

const HomePageComponent = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        <StartPage className=" w-full h-[100vh]" />
        <PopularProducts products={props.productsList} />
        <Category />
        <OurProduction allProducts={props.productsList} />
        <NewsLetter />
        <Testimonials />
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePageComponent;
