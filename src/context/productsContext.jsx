import { createContext, useState, useContext } from "react";
import { mensProducts, womensProducts } from "../assets/dummyData";
const ProductsContext = createContext();

// Create a Provider component
export function ProductsProvider({ children }) {
  const [menProducts, setMenProducts] = useState(mensProducts);
  const [womenProducts, setWomenProducts] = useState(womensProducts);

  // Methdos to update product
  const updateProduct = (id, updatedProduct) => {
    setMenProducts((prevProducts) =>
      prevProducts.map((prod) => (prod.id === id ? updatedProduct : prod))
    );
    setWomenProducts((prevProducts) =>
      prevProducts.map((prod) => (prod.id === id ? updatedProduct : prod))
    );
  };
  return (
    <ProductsContext.Provider
      value={{ menProducts, womenProducts, updateProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

// Create a custom hook for easier usage of the context
export function useProducts() {
  return useContext(ProductsContext);
}
