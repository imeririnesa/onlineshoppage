import QuickFilter from "../components/QuickFilter"; 
import CollectionGrid from "../components/CollectionGrid"; 
import classes from "./CollectionPage.module.css"; 
import { useProducts } from "../context/productsContext"; 
import { useParams } from "react-router";
import { useState } from "react"; 

function CollectionPage({ pageTitle }) {
  // Accessing products data from the context and extracting URL parameters
  const { menProducts, womenProducts } = useProducts();
  const params = useParams();
  const type = params.type;

  let productsToRender = [];
  
  // Filter products based on pageTitle (either 'Women' or 'Men') and category type from the URL
  const products = pageTitle === "Women" ? womenProducts : menProducts;
  let filteredProducts = [...products];

  // Apply specific filtering based on the 'type' parameter
  if (type === "sale") {
    // Filter for products on sale
    filteredProducts = filteredProducts.filter(
      (product) => product.discount > 0
    );
  } else if (type === "all") {
    // Show all products
    productsToRender = [...products];
  } else {
    // Filter by specific category type
    filteredProducts = products?.filter(
      (prod) => prod.category?.toString() === type.toString()
    );
  }

  // Final list of products to be rendered is assigned to productsToRender
  productsToRender = [...filteredProducts];

  // Render the collection page with the filtered products
  return (
    <div className={`${classes.collection} page`}>
      <div className={classes.filterAndInfo}>
        {/* Display the title and type of collection */}
        <h2>{pageTitle}</h2>
        <h4>{type}</h4>
      </div>
      
      {/* Render the grid of products */}
      <CollectionGrid products={productsToRender} />
    </div>
  );
}

export default CollectionPage;
