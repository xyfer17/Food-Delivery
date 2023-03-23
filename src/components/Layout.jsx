import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Router from "../routes/Router";
import Carts from "./UI/cart/Carts";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div>
      <Header />

      {showCart && <Carts />}

      <div>
        <Router />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
