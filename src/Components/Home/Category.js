import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import useComponentAnimation from "../../hooks/use-component-animation";

import bannerCategory1 from "../../Assets/bannerCategory1.webp";
import bannerCategory2 from "../../Assets/bannerCategory2.webp";
import bannerCategory3 from "../../Assets/p9.webp";

const Category = () => {
  const firstCategoryRef = useRef();
  const { animation: firstCategoryAnimation } = useComponentAnimation(
    firstCategoryRef,
    0.5
  );
  const secondCategoryRef = useRef();
  const { animation: secondCategoryAnimation } = useComponentAnimation(
    firstCategoryRef,
    0.8
  );
  const thirdCategoryRef = useRef();
  const { animation: thirdCategoryAnimation } = useComponentAnimation(
    firstCategoryRef,
    1
  );

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
    <div className="flex flex-col gap-10 w-full h-[100vh] p-20 bg-[#181820] items-center justify-center">
      <div className="text-white text-3xl font-bold">
        <h1>Our Categories</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 w-[100vw] h-[500px] ">
        <div
          ref={firstCategoryRef}
          className="flex flex-wrap gap-5 items-center justify-center"
        >
          {/* First Category */}
          <motion.div
            onClick={saladsNavigate}
            animate={firstCategoryAnimation}
            className="cursor-pointer overflow-hidden relative md:w-[30vw] md:h-[200px]  "
          >
            <img
              className="hover:scale-150 transition-all duration-500 w-[70vw] md:w-[30vw] md:h-[200px] rounded-[20px]"
              src={bannerCategory1}
              alt=""
            />

            <div className="absolute bottom-0 bg-black bg-opacity-50 w-full h-[70px] rounded-b-[20px]">
              <h1 className="text-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white text-3xl">
                Salads
              </h1>
            </div>
          </motion.div>

          {/* Second Category */}
          <motion.div
            onClick={sushiNavigate}
            ref={secondCategoryRef}
            animate={secondCategoryAnimation}
            className=" cursor-pointer relative overflow-hidden md:w-[30vw] md:h-[200px] "
          >
            <img
              className="hover:scale-150 transition-all duration-500 w-[70vw] md:w-[30vw] md:h-[200px] rounded-[20px]"
              src={bannerCategory2}
              alt=""
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 w-full h-[70px] rounded-b-[20px]">
              <h1 className="text-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white text-3xl">
                Sushi
              </h1>
            </div>
          </motion.div>
        </div>

        {/* Third Category */}
        <motion.div
          onClick={seafoodNavigate}
          animate={thirdCategoryAnimation}
          ref={thirdCategoryRef}
          className={` cursor-pointer overflow-hidden relative md:w-[30vw] md:h-[200px]`}
        >
          <img
            className="hover:scale-150 transition-all duration-500 w-[70vw] md:w-[30vw] md:h-[200px] rounded-[20px]"
            src={bannerCategory3}
            alt=""
          />

          <div className="absolute bottom-0 bg-black bg-opacity-50 w-full h-[70px] rounded-b-[20px]">
            <h1 className="text-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white text-3xl">
              Seafood
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Category;
