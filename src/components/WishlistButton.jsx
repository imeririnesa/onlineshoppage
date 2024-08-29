import { useEffect, useState } from "react";
import { useWishlist } from "../context/wishlistContext";
import classes from "./WishlistButton.module.css";

function WishlistButton({ product }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [productIsAddedToWishlist, setProductIsAddedToWishlist] =
    useState(false);

  useEffect(() => {
    // Check if the product is in the wishlist and set the state accordingly
    const isProductInWishlist = wishlist.some(
      (wlProd) => wlProd.id.toString() === product.id.toString()
    );
    setProductIsAddedToWishlist(isProductInWishlist);
  }, [wishlist, product.id]);

  function wishlistHandler(e) {
    e.preventDefault();
    if (productIsAddedToWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  return (
    <button onClick={wishlistHandler} className={classes.favIcon}>
      {productIsAddedToWishlist ? (
        <i className={`fa-solid fa-heart ${classes.icon}`}></i>
      ) : (
        <i className={`fa-regular fa-heart ${classes.icon}`}></i>
      )}
    </button>
  );
}

export default WishlistButton;
