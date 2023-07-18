import React, { createContext, useContext, useState } from "react";
import { useProduct } from "./ProductContext";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { product } = useProduct();
  const [cartArray, setCartArray] = useState([]);

  const addToCart = (addItemId) => {
    setCartArray([product.find(({ id }) => id === addItemId), ...cartArray]);
  };
  const removeFromCart=(removeItemId)=>{
    setCartArray(cartArray.filter(({id})=>id!==removeItemId))
  }

  return <CartContext.Provider value={{cartArray, addToCart,removeFromCart}}>{children}</CartContext.Provider>;
};
export const useCart = () => useContext(CartContext);
