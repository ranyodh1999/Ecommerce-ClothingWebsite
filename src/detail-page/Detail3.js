import React, { useContext } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { ShopContext } from "../Context/shopContext";
import imgSrc from "../Asset/T-shirt3.png";

export default function NextPage() {
  const { addToCart, cartItems } = useContext(ShopContext);

  const productId = 3;

  const handleAddToCart = () => {
    addToCart(productId);
  };

  return (
    <section className="py-5">
      <Container>
        <Row className="gx-5">
          <Col lg={6}>
            <div className="border rounded-4 mb-3 d-flex justify-content-center">
              <a
                data-fslightbox="mygallery"
                className="rounded-4"
                target="_blank"
                data-type="image"
                href={imgSrc}
                rel="noreferrer"
              >
                <img
                  style={{
                    maxWidth: "50vh",
                    maxHeight: "60vh",
                    margin: "auto",
                  }}
                  className="rounded-4 fit"
                  src={imgSrc}
                  alt="Product"
                />
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="ps-lg-3">
              <h4 className="title text-dark">Men's Round Neck T-Shirt(Red)</h4>
              <div className="d-flex flex-row my-3">
                <div className="text-warning mb-1 me-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>

              <div className="mb-3">
                <span className="h5">$19.99</span>
                <span className="text-muted">/per piece</span>
              </div>

              <p>
                Our collection draws inspiration from streetwear, offering a
                modern aesthetic and high-quality items that defy the norms of
                mainstream fashion.
              </p>

              <div className="row">
                <dt className="col-3">Type:</dt>
                <dd className="col-9">Regular</dd>

                <dt className="col-3">Color</dt>
                <dd className="col-9">Red</dd>

                <dt className="col-3">Material</dt>
                <dd className="col-9">Cotton</dd>

                <dt className="col-3">Brand</dt>
                <dd className="col-9">Generic</dd>
                <dt className="col-3">SKU</dt>
                <dd className="col-9">3 </dd>
              </div>

              <hr />

              <div className="row mb-4">
                <Col md={6} xs={6} className="d-flex align-items-end">
                  <Button
                    className="w-100"
                    onClick={handleAddToCart}
                    variant="outline-primary"
                    size="md"
                    style={{ height: "38px" }}
                  >
                    Add To Cart{" "}
                    {cartItems[productId] > 0 && <> ({cartItems[productId]})</>}
                  </Button>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
