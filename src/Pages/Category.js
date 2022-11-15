import React from "react";
// import { useParams } from "react-router-dom";
import CategoryComponent from "../Components/Category/CategoryComponent";

const Category = (props) => {
  return <CategoryComponent className={`${props.className}`} />;
};

export default Category;
