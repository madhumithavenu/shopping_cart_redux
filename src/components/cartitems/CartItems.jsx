import React from "react";
import "./Cart.css";
import CartItem from "../cartitem/cartitem";
const CartItems = function() {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          <CartItem id={1} price={2500} name={"Macbook"} />
        </li>
      </ul>
    </div>
  );
};

export default CartItems;