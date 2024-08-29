import classes from "./SuggestedProducts.module.css";
import GridItem from "./GridItem";
import clsPDP from "../pages/ProductPage.module.css";

function SuggestedProducts({ products }) {
  return (
    <div
      id="suggested-products"
      className={`${classes.suggestedProducts} ${clsPDP.suggestedProducts}`}
    >
      <h2>Products you may like</h2>
      <ul className={classes.suggestedProductsGrid}>
        {products?.map((product, i) => (
          <GridItem product={product} key={i} />
        ))}
      </ul>
    </div>
  );
}

export default SuggestedProducts;
