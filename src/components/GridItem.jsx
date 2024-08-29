import classes from "./GridItem.module.css";
import Price from "./Price";
import { useCart } from "../context/cartContext";
import { NavLink } from "react-router-dom";
import WishlistButton from "./WishlistButton";
function GridItem({ product }) {
  const { addToCart, setCartActive } = useCart();
  function onClickHandler(e) {
    e.preventDefault();
    addToCart(product);
    setCartActive(true);
  }

  return (
    <li className={classes.gridItem}>
      <NavLink to={`/${product.sex}/products/${product.id}`}>
        <div className={classes.gridItemContentAndMedia}>
          <div className={classes.itemMedia}>
            <img src={product.images[1]} alt={product.name} />
            <img src={product.images[0]} alt={product.name} />
          </div>
          <div className={classes.itemContent}>
            <div className={classes.quickAddHolder}>
              <button onClick={onClickHandler} className={classes.addButton}>
                + ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className={classes.itemInfo}>
          <div>
            <h4>{product.name}</h4>
            <Price product={product} />
          </div>
          <WishlistButton product={product} />
        </div>
      </NavLink>
    </li>
  );
}

export default GridItem;
