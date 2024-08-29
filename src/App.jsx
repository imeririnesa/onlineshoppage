import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductPage";
import CollectionPage from "./pages/CollectionPage";
import CollectionTypePage from "./pages/CollectionTypePage";
import { menCollections, womenCollections } from "./assets/dummyData";
import { CartProvider } from "./context/cartContext";
import { ProductsProvider } from "./context/productsContext";
import { WishlistProvider } from "./context/wishlistContext";
import Aboutus from "./pages/Aboutus";
import TermsOfService from "./pages/TermsOfService";
import ShippingAndReturns from "./pages/ShippingAndReturns";
import Faq from "./pages/Faq";

function App() {
  return (
    // Wrapping the application in various context providers to manage global state
    <ProductsProvider>
      <CartProvider>
        <WishlistProvider>
          {/* Setting up the router to handle navigation between pages */}
          <Router>
            {/* The Header component is displayed at the top of every page */}
            <Header />
            <main className="main">
              {/* Defining the different routes for the application */}
              <Routes>
                {/* Homepage route */}
                <Route path="" element={<Homepage />} />

                {/* Routes for women's collections and products */}
                <Route
                  path="/women"
                  element={
                    <CollectionTypePage
                      collections={womenCollections}
                      saleActive={true}
                    />
                  }
                />
                <Route
                  path="/women/products/:productId"
                  element={<ProductsPage category={"women"} />}
                />
                <Route
                  path="/women/:type"
                  element={<CollectionPage pageTitle="Women" />}
                />

                {/* Routes for men's collections and products */}
                <Route
                  path="/men"
                  element={
                    <CollectionTypePage
                      saleActive={true}
                      collections={menCollections}
                    />
                  }
                />
                <Route
                  path="/men/products/:productId"
                  element={<ProductsPage category={"men"} />}
                />
                <Route
                  path="/men/:type"
                  element={<CollectionPage pageTitle="Men" />}
                />

                {/* Generic product page route */}
                <Route path="/products/:id" element={<ProductsPage />} />

                {/* Static informational pages */}
                <Route path="/about" element={<Aboutus />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route
                  path="/shipping-and-returns"
                  element={<ShippingAndReturns />}
                />
                <Route path="/faq" element={<Faq />} />
              </Routes>
            </main>
            {/* The Footer component is displayed at the bottom of every page */}
            <Footer />
          </Router>
        </WishlistProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
