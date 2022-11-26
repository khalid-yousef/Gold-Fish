import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import CategorySlider from "./CategorySlider";

const CategoryComponent = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
      >
        <CategorySlider className={`${props.className}`} />
      </motion.div>
    </AnimatePresence>
  );
};

export default CategoryComponent;
