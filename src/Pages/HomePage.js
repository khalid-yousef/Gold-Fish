import HomePageComponent from "../Components/Home/HomePageComponent";

const HomePage = (props) => {
  return (
    <div className={`${props.className}`}>
      <HomePageComponent productsList={props.productsList} />
    </div>
  );
};

export default HomePage;
