import { Link } from "react-router-dom";
import "./FeaturedProducts.css";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import {
  FaHeart,
  FaStar,
  FaShoppingCart
} from "react-icons/fa";

function FeaturedProducts({
  search,
  category,
  sortBy,
}) {

  const { addToCart } = useContext(CartContext);

  const filteredProducts = products
    .filter((product) => {

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );

    })
    .sort((a, b) => {

      switch (sortBy) {

        case "low-high":
          return a.price - b.price;

        case "high-low":
          return b.price - a.price;

        case "a-z":
          return a.name.localeCompare(b.name);

        case "z-a":
          return b.name.localeCompare(a.name);

        default:
          return 0;

      }

    });

  return (

    <section
      className="featured"
      id="featured"
    >

      <h2>Featured Products</h2>

      <div className="products">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <div
              className="card"
              key={product.id}
            >

              <button className="wishlist-btn">
                <FaHeart />
              </button>

              <Link
                to={`/product/${product.id}`}
                className="product-link"
              >

                <img
                  src={product.image}
                  alt={product.name}
                />

                <h3>
                  {product.name}
                </h3>

                <div className="rating">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                  <span>
                    {product.rating}
                  </span>

                </div>

                <p className="price">
                  Rs. {product.price}
                </p>

              </Link>

              <button
                className="cart-button"
                onClick={() =>
                  addToCart(product)
                }
              >

                <FaShoppingCart />

                Add to Cart

              </button>

            </div>

          ))
                  ) : (

          <div
            style={{
              width: "100%",
              textAlign: "center",
              padding: "80px 20px",
            }}
          >

            <h2>No Products Found 😔</h2>

            <p>
              Please try another search or category.
            </p>

          </div>

        )}

      </div>

    </section>

  );

}

export default FeaturedProducts;