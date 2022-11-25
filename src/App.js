import React, { Fragment, Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import HomePage from "./Pages/HomePage";
import { allProducts } from "./Components/UI/products-data";
import NavBar from "./Components/UI/NavBar";
import Footer from "./Components/UI/Footer";
import CartButton from "./Components/Cart Button/CartButton";
import LoadingSpinner from "./Components/UI/LoadingSpinner";

const Category = React.lazy(() => import("./Pages/Category"));
const Cart = React.lazy(() => import("./Pages/Cart"));
const PageNotFound = React.lazy(() => import("./Pages/PageNotFound"));

const products = allProducts;

function App() {
  // state for first enter
  const [loading, setLoading] = useState(true);
  // state for change pathname
  const [isLoading, setIsLoading] = useState(false);

  const { pathname } = useLocation();

  // get data from redux
  const cartItems = useSelector((state) => state.items);
  const totalAmount = useSelector((state) => state.totalAmount);
  const totalPrice = useSelector((state) => state.totalPrice);

  // store cart data in localStorage
  useEffect(() => {
    localStorage.setItem("Cart Items", JSON.stringify(cartItems));
    localStorage.setItem("Total Amount", JSON.stringify(totalAmount));
    localStorage.setItem("Total Price", JSON.stringify(totalPrice));
  }, [cartItems, totalAmount, totalPrice]);

  // First time enter the website
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  // when pathname changed
  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <NavBar
        openMenuIndex="z-[300]"
        navbarIndex="z-[100]"
        className="absolute top-0 left-0 w-full"
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

      <Footer className="fixed bottom-0 left-0 -z-10" />
    </Fragment>
  );
}

export default App;
