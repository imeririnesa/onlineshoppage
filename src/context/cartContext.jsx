import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartActive, setCartActive] = useState(false);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const addToCart = (product, sizeSelected) => {
    if (sizeSelected == null) {
      // Checks for null or undefined
      product.sizeSelected = 1;
    } else {
      product.sizeSelected = sizeSelected;
    }
    const existingItemIndex = cartItems.findIndex((item) => {
      return (
        item.id === product.id &&
        item.sizeSelected.toString() === product.sizeSelected.toString()
      );
    });

    if (existingItemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[existingItemIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      const newCartItem = {
        id: product.id,
        name: product.name,
        image: product.images[0],
        price: product.price * (1 - product.discount).toFixed(2),
        discount: product.discount,
        quantity: 1,
        sizes: product.sizes,
        sizeSelected: product.sizeSelected,
      };
      setCartItems((prevCart) => [...prevCart, newCartItem]);
    }
  };

  const deleteCartItem = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const removeFromCart = (id) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      const newCartItems = [...cartItems];

      if (newCartItems[existingItemIndex].quantity > 1) {
        newCartItems[existingItemIndex].quantity -= 1;
      } else {
        newCartItems.splice(existingItemIndex, 1);
      }

      setCartItems(newCartItems);
    }
  };

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((sum, item) => {
      return sum + item.price * (1 - item.discount) * item.quantity;
    }, 0);

    setCartTotal(total.toFixed(2)); // Always set to two decimal places
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        deleteCartItem,
        cartTotal,
        cartActive,
        setCartActive,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
