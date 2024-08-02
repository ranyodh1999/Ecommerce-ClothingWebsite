import imgSrc1 from "../Asset/T-shirt1.png";
import imgSrc2 from "../Asset/T-shirt2.png";
import imgSrc3 from "../Asset/T-shirt3.png";
import imgSrc4 from "../Asset/T-shirt4.png";
import imgSrc5 from "../Asset/T-shirt5.png";
import imgSrc6 from "../Asset/T-shirt6.png";
import imgSrc7 from "../Asset/T-shirt7.png";
import imgSrc8 from "../Asset/T-shirt8.png";
import imgSrc9 from "../Asset/T-shirt9.png";
import imgSrc10 from "../Asset/T-shirt10.png";
import imgSrc11 from "../Asset/T-shirt11.png";
import imgSrc12 from "../Asset/T-shirt12.png";
import imgSrc13 from "../Asset/T-shirt13.png";
import imgSrc14 from "../Asset/T-shirt14.png";
import imgSrc15 from "../Asset/T-shirt15.png";
import imgSrc16 from "../Asset/T-shirt16.png";

const productData = [
  {
    id: 1,
    productName: "Men's Round Neck T-Shirt(Light Blue)",
    price: 19.99,
    productImage: imgSrc1,
    detailPage: "/detail-page1",
    limit: 4,
  },
  {
    id: 2,
    productName: "Men's Round Neck T-Shirt(Black)",
    price: 19.99,
    productImage: imgSrc2,
    detailPage: "/detail-page2",
    limit: 4,
  },
  {
    id: 3,
    productName: "Men's Round Neck T-Shirt(Red)",
    price: 19.99,
    productImage: imgSrc3,
    detailPage: "/detail-page3",
    limit: 4,
  },
  {
    id: 4,
    productName: "Men's Round Neck T-Shirt(Blue)",
    price: 19.99,
    productImage: imgSrc4,
    detailPage: "/detail-page4",
    limit: 4,
  },
  {
    id: 5,
    productName: "Men's Round Neck T-Shirt(Grey)",
    price: 19.99,
    productImage: imgSrc5,
    detailPage: "/detail-page5",
    limit: 4,
  },
  {
    id: 6,
    productName: "Men's Round Neck Full Sleeve T-Shirt(Red)",
    price: 30.0,
    productImage: imgSrc6,
    detailPage: "/detail-page6",
    limit: 4,
  },
  {
    id: 7,
    productName: "Men's Round Neck Full Sleeve T-Shirt(Sky Blue)",
    price: 30.0,
    productImage: imgSrc7,
    detailPage: "/detail-page7",
    limit: 4,
  },
  {
    id: 8,
    productName: "Men's Round Neck Full Sleeve T-Shirt(Beige)",
    price: 30.0,
    productImage: imgSrc8,
    detailPage: "/detail-page8",
    limit: 4,
  },
  {
    id: 9,
    productName: "Men's Round Neck Full Sleeve T-Shirt(White)",
    price: 30.0,
    productImage: imgSrc9,
    detailPage: "/detail-page9",
    limit: 4,
  },
  {
    id: 10,
    productName: "Men's Round Neck T-Shirt(Yellow)",
    price: 19.99,
    productImage: imgSrc10,
    detailPage: "/detail-page10",
    limit: 4,
  },
  {
    id: 11,
    productName: "Men's Collar T-Shirt(Dark Blue)",
    price: 40.0,
    productImage: imgSrc11,
    detailPage: "/detail-page11",
    limit: 4,
  },
  {
    id: 12,
    productName: "Men's Collar T-Shirt(Grey)",
    price: 40.0,
    productImage: imgSrc12,
    detailPage: "/detail-page12",
    limit: 4,
  },
  {
    id: 13,
    productName: "Men's Collar T-Shirt(White)",
    price: 40.0,
    productImage: imgSrc13,
    detailPage: "/detail-page13",
    limit: 4,
  },
  {
    id: 14,
    productName: "Men's Collar T-Shirt(Sky Blue)",
    price: 40.0,
    productImage: imgSrc14,
    detailPage: "/detail-page14",
    limit: 4,
  },
  {
    id: 15,
    productName: "Men's Collar T-Shirt(Dark Grey)",
    price: 40.0,
    productImage: imgSrc15,
    detailPage: "/detail-page15",
    limit: 4,
  },
  {
    id: 16,
    productName: "Men's Collar T-Shirt(Red)",
    price: 40.0,
    productImage: imgSrc16,
    detailPage: "/detail-page16",
    limit: 4,
  },
];

class TShirt {
  constructor(id, productName, price, productImage, detailPage, limit) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.productImage = productImage;
    this.detailPage = detailPage;
    this.limit = limit;
  }
}

class RoundNeckTShirt extends TShirt {
  constructor(id, productName, price, productImage, detailPage, limit) {
    super(id, productName, price, productImage, detailPage, limit);
    this.type = "Round Neck";
  }
}

class RoundNeckFullSleeveTShirt extends TShirt {
  constructor(id, productName, price, productImage, detailPage, limit) {
    super(id, productName, price, productImage, detailPage, limit);
    this.type = "Round Neck Full Sleeve";
  }
}

class CollaredTShirt extends TShirt {
  constructor(id, productName, price, productImage, detailPage, limit) {
    super(id, productName, price, productImage, detailPage, limit);
    this.type = "Collared";
  }
}

class ProductFactory {
  static createProduct(product) {
    switch (product.type) {
      case "Round Neck":
        return new RoundNeckTShirt(
          product.id,
          product.productName,
          product.price,
          product.productImage,
          product.detailPage,
          product.limit
        );
      case "Round Neck Full Sleeve":
        return new RoundNeckFullSleeveTShirt(
          product.id,
          product.productName,
          product.price,
          product.productImage,
          product.detailPage,
          product.limit
        );
      case "Collared":
        return new CollaredTShirt(
          product.id,
          product.productName,
          product.price,
          product.productImage,
          product.detailPage,
          product.limit
        );
      default:
        throw new Error("Unknown product type");
    }
  }
}

export { productData, ProductFactory };
