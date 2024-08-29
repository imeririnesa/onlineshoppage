import classes from "./CollectionGrid.module.css";
import GridItem from "./GridItem";

function CollectionGrid({ products }) {
  return (
    <div className={classes.collectionGrid}>
      <ul className={classes.grid}>
        {products?.map((product, index) => (
          <GridItem product={product} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default CollectionGrid;
