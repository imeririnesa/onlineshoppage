import { NavLink } from "react-router-dom";
import classes from "./CollectionLink.module.css";

function CollectionLink({ collection, fullWidth }) {
  let jsx = null;
  if (collection.description) {
    jsx = (
      <div className={classes.highlight}>
        <h1>{collection.name}</h1>
        <p>{collection.description}</p>
      </div>
    );
  } else {
    jsx = <span className={classes.text}>{collection.name}</span>;
  }
  return (
    <NavLink
      to={collection.link}
      className={`${classes.collectionLink} ${fullWidth ? classes.fullW : ""}`}
    >
      {collection.imageMobile ? (
        <>
          <img
            className="mobile-only"
            src={collection.imageMobile}
            alt={collection.name}
          />
          <img
            className="desktop-only"
            src={collection.image}
            alt={collection.name}
          />
        </>
      ) : (
        <img src={collection.image} alt={collection.name} />
      )}
      {jsx}
    </NavLink>
  );
}

export default CollectionLink;
