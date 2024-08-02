import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ShopContext } from "../Context/shopContext";
import { Products } from "./Products";
import "../CSS/App.css";

function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
        className="form-control mb-3"
      />
    </form>
  );
}

const Home = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const [filterText, setFilterText] = useState("");

  const filteredProducts = Products.filter((product) =>
    product.productName.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Container>
      <div className="search">
        {" "}
        <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      </div>

      <Row>
        {filteredProducts.map((product) => (
          <Col xs={6} md={3} key={product.id}>
            <Link to={product.detailPage} className="image-link">
              <div className="image-container">
                <Image
                  src={product.productImage}
                  width={300}
                  height={325}
                  className="image"
                  alt={product.productName}
                />
                <p>
                  {product.productName} <br /> Price: ${product.price}
                </p>
              </div>
            </Link>
            <button
              className="addToCartBttn"
              onClick={() => addToCart(product.id)}
            >
              Add To Cart{" "}
              {cartItems[product.id] > 0 && <> ({cartItems[product.id]})</>}
            </button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
