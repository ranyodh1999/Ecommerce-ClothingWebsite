import React from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import "../CSS/App.css";
import imgSrc from "../Asset/T-shirt14.png";

export default function NextPage() {
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
                    maxWidth: "100%",
                    maxHeight: "100vh",
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
              <h4 className="title text-dark">
                Men's Collared Sky Blue T-Shirt(Sky Blue)
              </h4>
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
                <span className="h5">$40.00</span>
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
                <dd className="col-9">Sky Blue</dd>

                <dt className="col-3">Material</dt>
                <dd className="col-9">Cotton</dd>

                <dt className="col-3">Brand</dt>
                <dd className="col-9">Generic</dd>
              </div>

              <hr />

              <div className="row mb-4">
                <Col md={5} xs={6}>
                  <label className="mb-2">Size</label>
                  <Form.Select
                    className="border border-secondary"
                    style={{ height: "38px" }}
                  >
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </Form.Select>
                </Col>

                <Col md={6} xs={6} className="d-flex align-items-end">
                  <Card className="ms-auto" style={{ width: "100%" }}>
                    <Button
                      variant="outline-primary"
                      size="md"
                      className="w-100"
                      style={{ height: "38px" }}
                    >
                      Add to shopping cart
                    </Button>
                  </Card>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
