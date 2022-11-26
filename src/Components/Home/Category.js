import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LazyMotion, domAnimation, motion } from "framer-motion";

import useComponentAnimation from "../../hooks/use-component-animation";

const Category = () => {
  const categoryRef = useRef();
  const { animation: firstCategoryAnimation } =
    useComponentAnimation(categoryRef);

  const { animation: secondCategoryAnimation } =
    useComponentAnimation(categoryRef);

  const { animation: thirdCategoryAnimation } =
    useComponentAnimation(categoryRef);

  const navigate = useNavigate();

  const saladsNavigate = () => {
    navigate("/category/salads");
    window.scrollTo(0, 0);
  };
  const sushiNavigate = () => {
    navigate("/category/sushi");
    window.scrollTo(0, 0);
  };
  const seafoodNavigate = () => {
    navigate("/category/seafood");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col gap-10 w-full h-full p-20 bg-[#181820] items-center justify-center">
      <div className="text-white text-3xl font-bold">
        <h1>Our Categories</h1>
      </div>
      <div
        ref={categoryRef}
        className="flex flex-wrap justify-center items-center gap-5 w-full h-full "
      >
        <LazyMotion features={domAnimation}>
          {/* First Category */}
          <motion.div
            onClick={saladsNavigate}
            animate={firstCategoryAnimation}
            className="cursor-pointer overflow-hidden relative md:w-[40vw] md:h-[40vh] w-[60vw] h-[20vh] bg-category1 bg-cover hover:md:w-[45vw] hover:md:h-[45vh] transition-all duration-500 rounded-[20px]"
          >
            <div className="absolute bottom-0 bg-black bg-opacity-50 w-full h-[70px] rounded-b-[20px]">
              <h1 className="text-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white text-3xl">
                Salads
              </h1>
            </div>
          </motion.div>

          {/* Second Category */}
          <motion.div
            onClick={sushiNavigate}
            animate={secondCategoryAnimation}
            className=" cursor-pointer relative overflow-hidden md:w-[40vw] md:h-[40vh] w-[60vw] h-[20vh] bg-category2 bg-cover hover:md:w-[45vw] hover:md:h-[45vh] transition-all duration-500 rounded-[20px]"
          >
            <div className="absolute bottom-0 bg-black bg-opacity-50 w-full h-[70px] rounded-b-[20px]">
              <h1 className="text-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white text-3xl">
                Sushi
              </h1>
            </div>
          </motion.div>

          {/* Third Category */}
          <motion.div
            onClick={seafoodNavigate}
            animate={thirdCategoryAnimation}
            className={` cursor-pointer overflow-hidden relative md:w-[40vw] md:h-[40vh] w-[60vw] h-[20vh] bg-category3 bg-cover hover:md:w-[45vw] hover:md:h-[45vh] transition-all duration-500 rounded-[20px]`}
          >
            <div className="absolute bottom-0 bg-black bg-opacity-50 w-full h-[70px] rounded-b-[20px]">
              <h1 className="text-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white text-3xl">
                Seafood
              </h1>
            </div>
          </motion.div>
        </LazyMotion>
      </div>
    </div>
  );
};

export default Category;
