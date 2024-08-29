import { NavLink } from "react-router-dom";
import CollectionLink from "../components/CollectionLink";
import classes from "./CollectionTypePage.module.css";

function CollectionTypePage({ collections, saleActive }) {
  // Define a sale object with details for the sale collection
  const sale = {
    name: "Sale",
    imageMobile:
      "https://static.pullandbear.net/2/cms/assets/uploads/rebajasVes_23.jpg?imwidth=500&impolicy=pullandbear-itxmediumhigh&imformat=safari&ts=20240817020706",
    image:
      "https://static.pullandbear.net/2/cms/assets/uploads/rebajashes_14.jpg?imwidth=1800&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240816020206",
    link: "sale",
    description: "Discover the promotions at your nearest store",
  };
  return (
    <div className={classes.collections}>
      {saleActive && <CollectionLink fullWidth={true} collection={sale} />}
      {collections.map((collection, i) => {
        return <CollectionLink key={i} collection={collection} />;
      })}
    </div>
  );
}

export default CollectionTypePage;
