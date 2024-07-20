import React from "react";
import Products from "./Products";
import Product from "./Product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        {Products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
