import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span>
            <i className="ri-close-fill"></i>
          </span>
        </div>
        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
