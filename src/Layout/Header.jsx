import React, { useState } from "react";
import classes from "./Header.module.css";
import Navigation from "../components/Navigation";
import hamburgerLogo from "../assets/hamburger.svg";
import Cart from "./Cart";
import { useCart } from "../context/cartContext";
import { NavLink } from "react-router-dom";
function Header() {
  const [navivationActive, setNavigationActive] = useState(false);

  const { cartItems, cartActive, setCartActive } = useCart();
  function toggleNav() {
    if (navivationActive) {
      setNavigationActive(false);
    } else {
      setNavigationActive(true);
    }
  }
  function toggleCart(e) {
    const toggleButton = e.target.closest("button[role='toggle-cart']");

    if (toggleButton || !e.target.closest("div#cart-content")) {
      if (cartActive) {
        setCartActive(false);
      } else {
        setCartActive(true);
      }
    }
  }
  let cartNumber = null;

  if (navivationActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  if (cartItems.length > 0) {
    let totalItems = 0; // Initialize totalItems to 0
    cartItems.forEach((item) => {
      totalItems += item.quantity; // Properly accumulate the quantity
    });

    cartNumber = <span className={classes.cartItemNumber}>{totalItems}</span>;
  }

  return (
    <header id="header" className={`${classes.header}`}>
      <button className={classes.headerButton} onClick={toggleNav}>
        <img src={hamburgerLogo} alt="navigation-control" />
      </button>
      <h1 className="logo">
        <NavLink to="/">TNZ</NavLink>
      </h1>
      <button
        role="toggle-cart"
        onClick={toggleCart}
        className={classes.toggleCartButton}
      >
        <i className="fa-brands fa-opencart"></i>
        {cartNumber}
      </button>
      <Cart toggleCart={toggleCart} />
      <Navigation navigationActive={navivationActive} toggleNav={toggleNav} />
    </header>
  );
}

export default Header;
