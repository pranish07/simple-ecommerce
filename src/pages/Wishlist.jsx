import { useWishlist } from "../contexts/WishlistContext";

export const Wishlist = () => {
  const { wishlistArray,removeFromWishlist } = useWishlist();
  console.log(wishlistArray)
  return (
    <>
      <h1>WishList</h1>
      {wishlistArray.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.price}</p>
        <button onClick={()=>removeFromWishlist(item.id)}>Remove from wishlistArray</button>
        </div>
      ))}
    </>
  );
};
