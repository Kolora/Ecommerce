import "./styles.css";
import React, { useState } from "react";
import SearchBar from "./SearchBar.js";
import Cart from "./Cart.js";
import CheckoutPage from "./CheckoutPage.js";
import PaymentPage from "./PaymentPage.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Books from "./Books.js";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Books setCartItems={setCartItems} cartItems={cartItems} />
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout>
                <SearchBar
                  searchResults={searchResults}
                  setSearchResults={setSearchResults}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              </Layout>
            }
          />

          <Route
            path="/checkout"
            element={
              <Layout>
                <CheckoutPage />
              </Layout>
            }
          />
          <Route
            path="/payment"
            element={
              <Layout>
                <PaymentPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
