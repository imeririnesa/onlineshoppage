import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  function addToWishlist(product) {
    let existingItem = wishlist.some((wlProd) => wlProd.id === product.id);

    if (!existingItem) {
      const newProd = { ...product };
      setWishlist((prevProds) => [...prevProds, newProd]);
    }
  }

  function removeFromWishlist(id) {
    const newWishlist = wishlist.filter(
      (wlProd) => wlProd.id.toString() !== id.toString()
    );
    setWishlist(newWishlist);
  }

  return (
    <WishlistContext.Provider
      value={{ wishlist, setWishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
