import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  AllFoods,
  Cart,
  Checkout,
  Contact,
  FoodDetails,
  Home,
  Login,
  Register,
} from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Router;
