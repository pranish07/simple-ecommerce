import { NavLink, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Error404Page } from "./pages/Error404Page";
import { Wishlist } from "./pages/Wishlist";
import { ProductDetail } from "./pages/ProductDetails";
import { ProductListing } from "./pages/ProductListing";
function App() {
  return (
    <>
      <NavLink to="/">Product Listing</NavLink> ||
      <NavLink to="/cart">Cart</NavLink> ||{" "}
      <NavLink to="/wishlist">Wishlist</NavLink>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </>
  );
}

export default App;
