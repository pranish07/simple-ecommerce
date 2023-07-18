import { useCart } from "../contexts/CartContext";

export const Cart = () => {
  const {cartArray,removeFromCart} = useCart();
console.log(cartArray)
  return (
    <>
      <h2>Cart</h2>
      <div>Total Items in the cart</div>

      {cartArray.map((item) => (
          <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={()=>removeFromCart(item.id)}>Remove from cart</button>
        </div>
      ))}
    </>
  );
};
