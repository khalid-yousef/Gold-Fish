import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { allProducts } from "./Components/UI/products-data";
import NavBar from "./Components/UI/NavBar";
import Footer from "./Components/UI/Footer";
import CartButton from "./Components/Cart Button/CartButton";
import LoadingSpinner from "./Components/UI/LoadingSpinner";

const products = allProducts;

const Category = React.lazy(() => import("./Pages/Category"));
const Cart = React.lazy(() => import("./Pages/Cart"));
const HomePage = React.lazy(() => import("./Pages/HomePage"));
const PageNotFound = React.lazy(() => import("./Pages/PageNotFound"));

function App() {
  const cartItems = useSelector((state) => state.items);
  const totalAmount = useSelector((state) => state.totalAmount);
  const totalPrice = useSelector((state) => state.totalPrice);

  useEffect(() => {
    localStorage.setItem("Cart Items", JSON.stringify(cartItems));
    localStorage.setItem("Total Amount", JSON.stringify(totalAmount));
    localStorage.setItem("Total Price", JSON.stringify(totalPrice));
  }, [cartItems, totalAmount, totalPrice]);

  return (
    <div>
      <NavBar
        openMenuIndex="z-[300]"
        navbarIndex="z-[100]"
        className="absolute top-0 left-0 w-[100vw]"
      />
      <CartButton />

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />

          <Route
            path="/home"
            element={
              <HomePage
                className="md:mb-[250px] mb-[300px]"
                productsList={products}
              />
            }
          />

          <Route
            path="/category/:categoryName"
            element={
              <Category className=" md:mb-[250px] mb-[300px] mb- h-[100vh]" />
            }
          />

          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>

      <Footer className="fixed bottom-0 left-0 w-[100vw] md:h-[250px] h-[300px] -z-10" />
    </div>
  );
}

export default App;
