import { useNavigate } from "react-router-dom";


const Category = () => {
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
      <div className="flex flex-wrap justify-center items-center gap-5 w-full h-full ">
        {/* First Category */}
        <div
          onClick={saladsNavigate}
          className="cursor-pointer overflow-hidden relative md:w-[40vw] md:h-[40vh] w-[60vw] h-[20vh] bg-category1 bg-cover hover:md:w-[45vw] hover:md:h-[45vh] transition-all duration-500 rounded-[20px]"
        >
          <div className="absolute bottom-0 bg-black bg-opacity-50 w-full h-[70px] rounded-b-[20px]">
            <h1 className="text-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white text-3xl">
              Salads
            </h1>
          </div>
        </div>

        {/* Second Category */}
        <div
          onClick={sushiNavigate}
          className=" cursor-pointer relative overflow-hidden md:w-[40vw] md:h-[40vh] w-[60vw] h-[20vh] bg-category2 bg-cover hover:md:w-[45vw] hover:md:h-[45vh] transition-all duration-500 rounded-[20px]"
        >
          <div className="absolute bottom-0 bg-black bg-opacity-50 w-full h-[70px] rounded-b-[20px]">
            <h1 className="text-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white text-3xl">
              Sushi
            </h1>
          </div>
        </div>

        {/* Third Category */}
        <div
          onClick={seafoodNavigate}
          className={` cursor-pointer overflow-hidden relative md:w-[40vw] md:h-[40vh] w-[60vw] h-[20vh] bg-category3 bg-cover hover:md:w-[45vw] hover:md:h-[45vh] transition-all duration-500 rounded-[20px]`}
        >
          <div className="absolute bottom-0 bg-black bg-opacity-50 w-full h-[70px] rounded-b-[20px]">
            <h1 className="text-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white text-3xl">
              Seafood
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
