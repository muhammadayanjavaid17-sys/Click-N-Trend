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

function Home({
  search,
  category,
  setCategory,
}) {
  return (
    <>
      <Header
        search={search}
        setSearch={() => {}}
      />

      <main>
        <Hero />

        <Categories
          category={category}
          setCategory={setCategory}
        />

        <FeaturedProducts
          search={search}
          category={category}
        />

        <WhyChooseUs />
      </main>
    </>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              category={category}
              setCategory={setCategory}
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
    </div>
  );
}

export default App;