import React from "react";

const CategorySmallItem = (props) => {
  return (
    <div className="mx-auto w-[80%] h-full flex items-center justify-center flex-col gap-5 rounded-[10px]">
      <img className="sm:w-[200px] sm:h-[100px] w-[100px] h-[100px] rounded-[10px]" src={props.image} alt="" />
    </div>  
  );
};

export default CategorySmallItem;
