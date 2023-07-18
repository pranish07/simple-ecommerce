import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { ProductProvider } from "./contexts/ProductContext.jsx";
import { WishlistProvider } from "./contexts/WishlistContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>
);
