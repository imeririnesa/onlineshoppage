import { useCart } from "../context/cartContext";
import classes from "./CartItem.module.css";
function CartItem({ cartItem }) {
  const { addToCart, removeFromCart, deleteCartItem } = useCart();
  return (
    <div className={classes.cartItem}>
      <div className={classes.imageContainer}>
        <img src={cartItem.image} alt={cartItem.name} />
      </div>
      <div className={classes.contentCotainer}>
        <p className={classes.title}>
          {cartItem.name} (
          {typeof cartItem.sizeSelected === "string"
            ? cartItem.sizeSelected
            : cartItem.sizes[cartItem.sizeSelected]}
          )
        </p>
        <button
          onClick={() => deleteCartItem(cartItem.id)}
          className={classes.removeItem}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <p className={classes.cartItemPrice}>€ {cartItem.price?.toFixed(2)}</p>
        <div className={classes.quantitySelector}>
          <button
            disabled={cartItem.quantity === 1}
            onClick={() => removeFromCart(cartItem.id)}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => addToCart(cartItem)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className={classes.totalPrice}>
          € {(cartItem.quantity * cartItem.price).toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
