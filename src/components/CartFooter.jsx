import { useEffect } from "react";
import { useCart } from "../context/cartContext";
import classes from "./CartFooter.module.css";

function CartFooter() {
  const { cartTotal } = useCart();
  useEffect(() => {}, [cartTotal]);
  return (
    <div className={classes.cartFooter}>
      <div className={classes.cartTotal}>
        <h3>Total:</h3>
        <p>€ {cartTotal}</p>
      </div>
      <div className={classes.checkout}>
        <button className={classes.checkoutButton}>Process order</button>
      </div>
    </div>
  );
}

export default CartFooter;
