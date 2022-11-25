import Category from "./Category";
import NewsLetter from "../UI/NewsLetter";
import OurProduction from "./OurProduction";
import PopularProducts from "./PopularProducts";
import StartPage from "./StartPage";
import Testimonials from "./Testimonials/Testimonials";

const HomePageComponent = (props) => {
  return (
    <div className="w-full h-full">
      <StartPage className=" w-full h-[100vh]" />
      <PopularProducts products={props.productsList} />
      <Category />
      <OurProduction allProducts={props.productsList} />
      <NewsLetter />
      <Testimonials />
    </div>
  );
};

export default HomePageComponent;
