import React from "react";
import { Link } from "react-router-dom";
import prodimg from "../../../assets/images/product_02.1.jpg";

const ProductCard = () => {
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={prodimg} alt="" className="w-50" />
      </div>
      <div className="product__content">
        <h5>
          <Link>Burger</Link>
        </h5>
        <div>
          <span className="product__price">$24.00</span>
          <button className="addToCart__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
