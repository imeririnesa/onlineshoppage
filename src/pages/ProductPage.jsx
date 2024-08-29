import { useParams } from "react-router"; 
import classes from "./ProductPage.module.css"; 
import { useProducts } from "../context/productsContext"; 
import SuggestedProducts from "../components/SuggestedProducts"; 
import { useEffect, useRef, useState } from "react"; 
import { useCart } from "../context/cartContext"; 
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, Navigation, A11y } from "swiper/modules"; 

import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/autoplay"; 

import WishlistButton from "../components/WishlistButton"; 
import FixedATCButton from "../components/FixedATCButton"; 

// Define the ProductPage component
function ProductPage({ category }) {
 
  const { menProducts, womenProducts } = useProducts();
  
  
  const [sizeSelected, setSizeSelected] = useState(1);

  
  const buttonRef = useRef();

  
  const { addToCart } = useCart();

  
  const params = useParams();
  const productId = params.productId;

 
  let product = null;
  let suggestedProducts;

  // Effect to scroll to the top of the page when productId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  // Effect to hide the logo in the header when the component mounts and show it again when it unmounts
  useEffect(() => {
    const header = document.querySelector("header#header");
    const logo = header.querySelector("h1.logo");
    logo.classList.add("hidden");

    return () => {
      logo.classList.remove("hidden");
    };
  }, []);

  // Determine the product and suggested products based on the category
  if (category === "men") {
    suggestedProducts = [...menProducts];
    suggestedProducts = suggestedProducts.filter(
      (prod) => prod.id.toString() !== productId.toString()
    );
    const productIndex = menProducts.findIndex(
      (prod) => prod.id.toString() === productId.toString()
    );
    if (productIndex !== -1) {
      product = menProducts[productIndex];
    } else {
      console.error("wrong id");
    }
  } else if (category === "women") {
    suggestedProducts = [...womenProducts];
    suggestedProducts = suggestedProducts.filter(
      (prod) => prod.id !== productId
    );
    const productIndex = womenProducts.findIndex(
      (prod) => prod.id === productId
    );
    if (productIndex !== -1) {
      product = womenProducts[productIndex];
    } else {
      console.error("wrong id");
    }
  } else {
    console.error("Wrong category");
  }

  // Handler for adding the product to the cart
  function onClickHanlder() {
    addToCart(product, sizeSelected);
  }

  // Render the product page
  return (
    <div className={`${classes.productPage}`}>
      {/* Image carousel for the product */}
      <div className={classes.imageHolder}>
        <Swiper
          modules={[Autoplay, Navigation, A11y]} 
          spaceBetween={0} 
          slidesPerView={1} 
          navigation 
          loop 
          autoplay={{ delay: 5000, disableOnInteraction: false }} 
          scrollbar={{ draggable: true }} 
        >
          {product.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Product slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={classes.contentHolder}>
        {/* Product information */}
        <div className={classes.productInfo}>
          <div id="info-wrapper" className={classes.infoWrapper}>
            <h2>{product.name}</h2>
            <p>{product.collection}</p>
          </div>
          <p>{(product.price * (1 - product.discount)).toFixed(2)} €</p>
        </div>
        {/* Product ratings and reviews */}
        <div className={classes.ratingReviews}>
          <p>{product.ratings.average}</p>
          <i className="fa-solid fa-star"></i>
          <span>({product.ratings.reviews})</span>
        </div>
        {/* Actions for viewing more info and adding to wishlist */}
        <div className={classes.topActions}>
          <a href="#info-wrapper">See more</a>
          <WishlistButton product={product} />
        </div>
        {/* Size selector */}
        <div className={classes.productTypeSelector}>
          <div className={classes.chipHolder}>
            {product.sizes.map((size, i) => (
              <span
                className={`${classes.sizeChip} ${
                  sizeSelected === i ? classes.active : ""
                }`}
                onClick={() => setSizeSelected(i)}
                key={i}
              >
                {size}
              </span>
            ))}
          </div>
          <button
            id="add-to-cart-button"
            onClick={onClickHanlder}
            className={classes.addButton}
            ref={buttonRef}
          >
            Add
          </button>
        </div>
        {/* Product description */}
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
          velit sed orci scelerisque, non auctor sapien facilisis. Donec vitae
          dolor eget neque dapibus vulputate. Nulla facilisi. Quisque vitae
          augue sed ex cursus faucibus. Aliquam erat volutpat. In vel lectus
          quis elit eleifend sodales.
        </p>
        {/* Key facts about the product */}
        <section className={classes.keyFacts}>
          <h4>Key facts</h4>
          <ul>
            <li>
              <i className="fa-solid fa-star"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                eaque.
              </p>
            </li>
            <li>
              <i className="fa-solid fa-bomb"></i>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                placeat?
              </p>
            </li>
            <li>
              <i className="fa-solid fa-face-smile"></i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <i className="fa-solid fa-heart"></i>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
                vero et.
              </p>
            </li>
          </ul>
        </section>
      </div>

      {/* Components for suggested products and a fixed "Add to Cart" button */}
      <SuggestedProducts products={suggestedProducts} />
      <FixedATCButton product={product} buttonRef={buttonRef} />
    </div>
  );
}

export default ProductPage;
