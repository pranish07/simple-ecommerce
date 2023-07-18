import React, { createContext, useContext, useState } from "react";
import { useProduct } from "./ProductContext";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { product } = useProduct();
  const [wishlistArray, setWishlistArray] = useState([]);
console.log(wishlistArray)

  const addToWishlist = (addItemId) => {
    setWishlistArray([
      product.find((item) => item.id === addItemId),
      ...wishlistArray
    ]);
  };

  const removeFromWishlist = (removeItemId) => {
    setWishlistArray(wishlistArray.filter((item) => item.id !== removeItemId));
  };

  return (
    <WishlistContext.Provider value={{ wishlistArray, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
