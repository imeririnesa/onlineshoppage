import { useState, useEffect } from "react";
import classes from "./FixedATCButton.module.css";
import { useCart } from "../context/cartContext";

function FixedATCButton({ product, buttonRef }) {
  const [buttonIsOutOfView, setButtonIsOutOfView] = useState(false);
  const [footerIsOutOfView, setFooterIsOutOfView] = useState(true);
  const { addToCart, setCartActive } = useCart();

  useEffect(() => {
    const footerRef = document.querySelector("footer");

    const buttonObserver = new IntersectionObserver(
      ([entry]) => {
        setButtonIsOutOfView(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setFooterIsOutOfView(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (buttonRef.current) {
      buttonObserver.observe(buttonRef.current);
    }

    if (footerRef) {
      footerObserver.observe(footerRef);
    }

    return () => {
      if (buttonRef.current) {
        buttonObserver.unobserve(buttonRef.current);
      }
      if (footerRef) {
        footerObserver.unobserve(footerRef);
      }
    };
  }, []);

  function onClickHanlder() {
    addToCart(product);
    setCartActive(true);
  }

  const shouldShowButton = buttonIsOutOfView && footerIsOutOfView;

  return (
    <button
      className={`${classes.fixedATCButton} ${
        shouldShowButton ? classes.fixedATCButtonOnView : ""
      }`}
      onClick={onClickHanlder}
    >
      ADD TO CART
    </button>
  );
}

export default FixedATCButton;
