import Category from "./Category";
import NewsLetter from "../UI/NewsLetter";
import OurProduction from "./OurProduction";
import PopularProducts from "./PopularProducts";
import StartPage from "./StartPage";
import Testimonials from "./Testimonials/Testimonials";
import { AnimatePresence,motion } from "framer-motion";

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
