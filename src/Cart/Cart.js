import React, { useContext } from "react";
import { ShopContext } from "../Context/shopContext";
import { Products } from "../Shopping/Products";
import CartItem from "./cartItem";
import { useNavigate } from "react-router-dom";

import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="left-cart">
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>

        <div className="cart-items">
          {Products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
            return null;
          })}
        </div>
      </div>

      <div className="right-checkout">
        {totalAmount > 0 ? (
          <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate("/home")}>Continue Shopping</button>
            <button
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        ) : (
          <h1>Your Shopping Cart is Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
