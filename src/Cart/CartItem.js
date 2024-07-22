import React, { useContext } from "react";
import { ShopContext } from "../Context/shopContext";
import "../CSS/CartItem.css";

const CartItem = ({ data }) => {
  const { id, productName, price, productImage, size } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Size: {size}</p>
        <p>Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id, size)}> + </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
