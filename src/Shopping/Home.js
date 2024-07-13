import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import imgSrc1 from "./Asset/T-shirt1.png";
import imgSrc2 from "./Asset/T-shirt2.png";
import imgSrc3 from "./Asset/T-shirt3.png";
import imgSrc4 from "./Asset/T-shirt4.png";
import imgSrc5 from "./Asset/T-shirt5.png";
import imgSrc6 from "./Asset/T-shirt6.png";
import imgSrc7 from "./Asset/T-shirt7.png";
import imgSrc8 from "./Asset/T-shirt8.png";
import imgSrc9 from "./Asset/T-shirt9.png";
import imgSrc10 from "./Asset/T-shirt10.png";
import imgSrc11 from "./Asset/T-shirt11.png";
import imgSrc12 from "./Asset/T-shirt12.png";
import imgSrc13 from "./Asset/T-shirt13.png";
import imgSrc14 from "./Asset/T-shirt14.png";
import imgSrc15 from "./Asset/T-shirt15.png";
import imgSrc16 from "./Asset/T-shirt16.png";
import imgSrch from "./Asset/Header.jpg";
import Card from "react-bootstrap/Card";

import "./CSS/App.css";

function Main() {
  return (
    <Container>
      <Card>
        <Image src={imgSrch} width={1300} height={175} />
      </Card>
      <Row>
        <Col xs={6} md={3}>
          <Link to="/detail-page1" className="image-link">
            <div className="image-container">
              <Image src={imgSrc1} width={300} height={325} className="image" />
              <p>
                Men's Round Neck T-Shirt(Light Blue) <br /> Price: $19.99
              </p>
            </div>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to="/detail-page2" className="image-link">
            <div className="image-container">
              <Image src={imgSrc2} width={300} height={325} className="image" />

              <p>
                Men's Round Neck T-Shirt(Black) <br /> Price: $19.99
              </p>
            </div>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to="/detail-page3" className="image-link">
            <div className="image-container">
              <Image src={imgSrc3} width={300} height={325} className="image" />
              <p>
                Men's Round Neck T-Shirt(Red) <br /> Price: $19.99
              </p>
            </div>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to="/detail-page4" className="image-link">
            <div className="image-container">
              <Image src={imgSrc4} width={300} height={325} className="image" />
              <p>
                Men's Round Neck T-Shirt(Blue) <br /> Price: $19.99
              </p>
            </div>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <Link to="/detail-page5" className="image-link">
            <div className="image-container">
              <Image src={imgSrc5} width={300} height={325} className="image" />
              <p>
                Men's Round Neck T-Shirt(Grey) <br /> Price: $19.99
              </p>
            </div>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to="/detail-page6" className="image-link">
            <div className="image-container">
              <Image src={imgSrc6} width={300} height={325} className="image" />
              <p>
                Men's Round Neck Full Sleeve T-Shirt(Red) <br /> Price: $30.00
              </p>
            </div>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to="/detail-page7" className="image-link">
            <div className="image-container">
              <Image src={imgSrc7} width={300} height={325} className="image" />
              <p>
                Men's Round Neck Full Sleeve T-Shirt(Sky Blue) <br /> Price:
                $30.00
              </p>
            </div>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to="/detail-page8" className="image-link">
            <div className="image-container">
              <Image src={imgSrc8} width={300} height={325} className="image" />
              <p>
                Men's Round Neck Full Sleeve T-Shirt(Beige) <br /> Price: $30.00
              </p>
            </div>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <Link to="/detail-page9" className="image-link">
            <div className="image-container">
              <Image src={imgSrc9} width={300} height={325} className="image" />
              <p>
                Men's Round Neck Full Sleeve T-Shirt(White) <br /> Price: $30.00
              </p>
            </div>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to="/detail-page10" className="image-link">
            <div className="image-container">
              <Image
                src={imgSrc10}
                width={300}
                height={325}
                className="image"
              />
              <p>
                Men's Round Neck T-Shirt(Yellow) <br /> Price: $19.99
              </p>
            </div>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to="/detail-page11" className="image-link">
            <div className="image-container">
              <Image
                src={imgSrc11}
                width={300}
                height={325}
                className="image"
              />
              <p>
                Men's Collared T-Shirt(Dark Blue) <br /> Price: $40.00
              </p>
            </div>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to="/detail-page12" className="image-link">
            <div className="image-container">
              <Image
                src={imgSrc12}
                width={300}
                height={325}
                className="image"
              />
              <p>
                Men's Collared T-Shirt(Grey) <br /> Price: $40.00
              </p>
            </div>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <Link to="/detail-page13" className="image-link">
            <div className="image-container">
              <Image
                src={imgSrc13}
                width={300}
                height={325}
                className="image"
              />
              <p>
                Men's Collared T-Shirt(White) <br /> Price: $40.00
              </p>
            </div>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to="/detail-page14" className="image-link">
            <div className="image-container">
              <Image
                src={imgSrc14}
                width={300}
                height={325}
                className="image"
              />
              <p>
                Men's Collared T-Shirt(Sky Blue) <br /> Price: $40.00
              </p>
            </div>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to="/detail-page15" className="image-link">
            <div className="image-container">
              <Image
                src={imgSrc15}
                width={300}
                height={325}
                className="image"
              />
              <p>
                Men's Collared T-Shirt(Dark Grey) <br /> Price: $40.00
              </p>
            </div>
          </Link>
        </Col>
        <Col xs={6} md={3}>
          <Link to="/detail-page16" className="image-link">
            <div className="image-container">
              <Image
                src={imgSrc16}
                width={300}
                height={325}
                className="image"
              />
              <p>
                Men's Collared T-Shirt(Red) <br /> Price: $40.00
              </p>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
export default Main;
