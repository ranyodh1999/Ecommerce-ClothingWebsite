import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { ShopContext } from "../Context/shopContext";
import { Products } from "./Products";
import "../CSS/App.css";

import headerImage from "../Asset/Header.jpg";
const Home = () => {
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <Container>
      <Card>
        <Image src={headerImage} width={1300} height={175} />
      </Card>
      <Row>
        {Products.map((product) => (
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
