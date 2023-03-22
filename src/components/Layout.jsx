import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Router from "../routes/Router";
import Carts from "./UI/cart/Carts";

const Layout = () => {
  return (
    <div>
      <Header />

      <Carts />

      <div>
        <Router />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
