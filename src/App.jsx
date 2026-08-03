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
import SortProducts from "./components/SortProducts";

function Home({
  search,
  category,
  setCategory,
  sortBy,
  setSortBy,
}) {
  return (
    <>
      <Hero />
      <Categories
  category={category}
  setCategory={setCategory}
/>

<SortProducts
  sortBy={sortBy}
  setSortBy={setSortBy}
/>

<FeaturedProducts
  search={search}
  category={category}
  sortBy={sortBy}
/>
      <WhyChooseUs />
    </>
  );
}

function App() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
      />

      <Routes>

        <Route
          path="/"
          element={
            <Home
  search={search}
  category={category}
  setCategory={setCategory}
  sortBy={sortBy}
  setSortBy={setSortBy}
/>
          }
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

      </Routes>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;