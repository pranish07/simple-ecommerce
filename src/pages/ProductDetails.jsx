import { useParams } from "react-router";
import { useProduct } from "../contexts/ProductContext";

export const ProductDetail = () => {
  const { product } = useProduct();
  const { productId } = useParams();

  const getProductDetails = (products, productId) => {
    return products?.find((product) => product.id === Number(productId));
  };

  const findProduct = getProductDetails(product, productId);
  console.log(findProduct);
  const { name, price, quantity, brand, category, description } = findProduct;

  return (
    <>
      {
        <div>
          <h3>Name: {name}</h3>
          <p>Description{description}</p>
          <p>Rs.{price}</p>
          <p>Quantity{quantity}</p>
          <p>Brand: {brand}</p>
          <b>category: {category}</b>
        </div>
      }
    </>
  );
};
