import React, { useContext } from "react";
import { ShopContext } from "../Context/shopContext";
import { useParams } from "react-router-dom";
import { Products } from "./Products";
import "../CSS/App.css";

const Product = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useContext(ShopContext);
  const product = Products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product">
      <h1>{product.productName}</h1>
      <img src={product.productImage} alt={product.productName} />
      <p>Price: ${product.price}</p>
      <button className="addToCartBttn" onClick={() => addToCart(product.id)}>
        Add To Cart{" "}
        {cartItems[product.id] > 0 && <> ({cartItems[product.id]})</>}
      </button>
    </div>
  );
};

export default Product;
