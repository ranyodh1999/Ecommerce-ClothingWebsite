import { productData, ProductFactory } from "./ProductFactory";

const Products = productData.map((product) => {
  if (product.productName.includes("Full Sleeve")) {
    return ProductFactory.createProduct({
      ...product,
      type: "Round Neck Full Sleeve",
    });
  } else if (product.productName.includes("Collared")) {
    return ProductFactory.createProduct({ ...product, type: "Collared" });
  } else {
    return ProductFactory.createProduct({ ...product, type: "Round Neck" });
  }
});

export { Products };
