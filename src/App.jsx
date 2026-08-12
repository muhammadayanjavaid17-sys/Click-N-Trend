import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Contact from "./components/Contact";

import "./App.css";


function Home() {
  return (
    <>
      <Hero />
    </>
  );
}


function Shop({ search, category }) {
  return (
    <main>
      <section className="page-section">
        <h1>Shop</h1>
        <p>Explore our latest smart and trending products.</p>

        <FeaturedProducts
          search={search}
          category={category}
        />
      </section>
    </main>
  );
}


function CategoriesPage({ category, setCategory }) {
  return (
    <main>
      <section className="page-section">
        <h1>Shop by Category</h1>
        <p>Explore products from our different categories.</p>

        <Categories
          category={category}
          setCategory={setCategory}
        />
      </section>
    </main>
  );
}


function About() {
  return (
    <main>
      <section className="page-section about-page">
        <h1>About Click N Trend</h1>

        <p>
          Welcome to Click N Trend — your one-stop shop for
          smart, useful and trending products.
        </p>

        <p>
          We focus on bringing carefully selected products
          that make everyday life easier, smarter and more
          convenient.
        </p>

        <WhyChooseUs />
      </section>
    </main>
  );
}


function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <div className="app">

      {/* Header stays on every page */}
      <Header
        search={search}
        setSearch={setSearch}
      />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
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

      <Footer />

      <FloatingWhatsApp />

    </div>
  );
}

export default App;