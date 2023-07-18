import { Link, useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { useProduct } from "../contexts/ProductContext";

export const ProductListing = () => {
  const { product } = useProduct();
  return (
    <>
      <h2>Product Listing Page</h2>
      {product?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};
