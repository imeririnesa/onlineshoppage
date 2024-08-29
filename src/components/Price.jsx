import classes from "./Price.module.css";

function Price({ product }) {
  let jsx;
  if (product.discount !== 0) {
    const discountedPrice = product.price * (1 - product.discount);
    jsx = (
      <>
        <p className={classes.priceSale}>€ {discountedPrice.toFixed(2)}</p>
        <p className={classes.originalPrice}>€ {product.price.toFixed(2)}</p>
      </>
    );
  } else {
    jsx = <p className={classes.productPrice}>€ {product.price.toFixed(2)}</p>;
  }
  return <div className={classes.price}>{jsx}</div>;
}

export default Price;
