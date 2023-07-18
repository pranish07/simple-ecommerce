import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";

export const ProductCard = ({ product,visited }) => {
  const { id, name, description, price } = product;
  const { addToCart } = useCart();
const{addToWishlist} = useWishlist()
  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: {price}</p>
      <Link to={`/product/${id}`}>Visit Item</Link>
    {!visited && <button onClick={() => addToCart(id)}>Add to cart</button>}
    <button onClick={()=>addToWishlist(id)}>Add to wishlist</button>
    </div>
  );
};
