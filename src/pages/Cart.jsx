import React from "react";
import Helmet from "../components/Helmet";
import { Col, Container, Row } from "reactstrap";
import CommmonSection from "../components/UI/common-section/CommonSection";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import "../styles/cart-page.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <Helmet title="Cart">
      <CommmonSection title="Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="text-center cart__img-box">
                          <img src={item.image01} alt="" />
                        </td>
                        <td className="text-center">{item.title}</td>
                        <td className="text-center">${item.price}</td>
                        <td className="text-center">{item.quantity}</td>
                        <td className="text-center cart__item-del">
                          <i
                            className="ri-delete-bin-line"
                            onClick={() => deleteItem(item.id)}
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <div className="mt-4">
                <h6>
                  Subtotal: $
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addToCart__btn me-4">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addToCart__btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
