import { useEffect, useState } from "react";
import classes from "./Cart.module.css";
import CartItem from "../components/CartItem";
import CartFooter from "../components/CartFooter";
import WishlistItem from "../components/WishlistItem";
import { useWishlist } from "../context/wishlistContext";
import { useCart } from "../context/cartContext";

function Cart({ toggleCart }) {
  const [cartType, setCartType] = useState("cart");
  const { wishlist } = useWishlist();
  const { cartItems, cartActive } = useCart();
  function switchCartType(type) {
    if (type === "cart" || type === "wishlist") {
      setCartType(type);
    } else {
      console.error("wrong type of cart: ", type);
    }
  }

  if (cartActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  let totalCartItems = 0;
  if (cartItems.length > 0) {
    cartItems.forEach((item) => {
      totalCartItems += item.quantity; // Properly accumulate the quantity
    });
  }

  return (
    <div
      onClick={toggleCart}
      className={`${classes.cart} ${cartActive ? classes.cartActive : ""}`}
    >
      <div id="cart-content" className={classes.cartWrapper}>
        <div className={classes.cartHeader}>
          <p
            onClick={() => switchCartType("cart")}
            className={cartType === "cart" ? `${classes.active}` : ""}
          >
            Shopping cart ({totalCartItems})
          </p>
          <p
            onClick={() => switchCartType("wishlist")}
            className={cartType === "wishlist" ? `${classes.active}` : ""}
          >
            Wishlist ({wishlist.length})
          </p>
          <button role="toggle-cart" className={classes.cartToggleButton}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <ul className={classes.cartItemsHolder}>
          {cartType === "cart"
            ? cartItems?.map((cartItem) => {
                return (
                  <li key={cartItem.id + cartItem.sizeSelected}>
                    <CartItem cartItem={cartItem} />
                  </li>
                );
              })
            : wishlist?.map((wishlistItem) => {
                return (
                  <li key={wishlistItem.id + wishlistItem.sizeSelected}>
                    <WishlistItem wishlistItem={wishlistItem} />
                  </li>
                );
              })}
        </ul>
        <CartFooter />
      </div>
    </div>
  );
}
export default Cart;
