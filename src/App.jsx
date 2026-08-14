import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Contact from "./components/Contact";
import About from "./components/About";

import "./App.css";


// =========================
// HOME PAGE
// =========================

function Home({ category, setCategory }) {
  return (
    <main>
      <Hero />

      {/* Categories */}
      <Categories
        category={category}
        setCategory={setCategory}
      />

      {/* Products */}
      <FeaturedProducts
        search=""
        category={category}
      />
    </main>
  );
}


// =========================
// SHOP PAGE
// =========================

function Shop({ search, category }) {
  return (
    <main>
      <section className="page-section">
        <h1>Shop</h1>

        <p>
          Explore our latest smart and trending products.
        </p>

        <FeaturedProducts
          search={search}
          category={category}
        />
      </section>
    </main>
  );
}


// =========================
// CATEGORIES PAGE
// =========================

function CategoriesPage({ category, setCategory }) {
  return (
    <main>
      <section className="page-section">
        <h1>Shop by Category</h1>

        <p>
          Explore products from our different categories.
        </p>

        <Categories
          category={category}
          setCategory={setCategory}
        />
      </section>
    </main>
  );
}


// =========================
// APP
// =========================

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <div className="app">

      {/* =========================
          HEADER
      ========================= */}

      <Header
        search={search}
        setSearch={setSearch}
      />


      {/* =========================
          ROUTES
      ========================= */}

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <Home
              category={category}
              setCategory={setCategory}
            />
          }
        />


        {/* SHOP */}
        <Route
          path="/shop"
          element={
            <Shop
              search={search}
              category={category}
            />
          }
        />


        {/* CATEGORIES */}
        <Route
          path="/categories"
          element={
            <CategoriesPage
              category={category}
              setCategory={setCategory}
            />
          }
        />


        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />


        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* CART */}
        <Route
          path="/cart"
          element={<Cart />}
        />


        {/* PRODUCT DETAILS */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

      </Routes>


      {/* =========================
          FOOTER
      ========================= */}

      <Footer />


      {/* =========================
          WHATSAPP
      ========================= */}

      <FloatingWhatsApp />

    </div>
  );
}


export default App;