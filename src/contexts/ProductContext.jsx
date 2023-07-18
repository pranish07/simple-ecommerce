import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { fakeFetchProductListing } from "../data";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fakeFetchProductListing(
        "https://example.com/api/products"
      );
      setIsLoading(false);
      if (response.status === 200) {
        setIsLoading(false);
        setProduct(response.data.products);
      }
    } catch (err) {
      setIsLoading(false)
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log
  return (
    <ProductContext.Provider value={{ product,isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProduct = () => useContext(ProductContext);
