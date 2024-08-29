import { useNavigate } from "react-router";
import { useWishlist } from "../context/wishlistContext";
import classes from "./WishlistItem.module.css";
import { useCart } from "../context/cartContext";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
function WishlistItem({ wishlistItem }) {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();
  const { setCartActive } = useCart();
  function onClickHandler(e) {
    if (!e.target.closest("button#remove-item-button")) {
      navigate(`/${wishlistItem.sex}/products/${wishlistItem.id}`);
      setCartActive(false);
    }
  }

  useEffect(() => {}, [wishlist.length]);

  function removeItemHandler(e) {
    e.preventDefault();
    removeFromWishlist(wishlistItem.id);
  }
  return (
    <div onClick={onClickHandler} className={classes.wishlistItem}>
      <div className={classes.imageContainer}>
        <img src={wishlistItem.images[0]} alt={wishlistItem.name} />
      </div>
      <div className={classes.contentCotainer}>
        <p className={classes.title}>{wishlistItem.name}</p>
        <button
          id="remove-item-button"
          onClick={removeItemHandler}
          className={classes.removeItem}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <p>€ {(wishlistItem.price * (1 - wishlistItem.discount)).toFixed(2)}</p>
        <div className={classes.chipHolder}>
          {wishlistItem.sizes.map((size, i) => (
            <span className={classes.wlChip} key={i}>
              {size}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WishlistItem;
