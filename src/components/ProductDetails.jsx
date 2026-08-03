import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaTruck,
  FaShieldAlt,
  FaCheckCircle
} from "react-icons/fa";

import "./ProductDetails.css";

function ProductDetails() {

  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <h2 className="not-found">
        Product Not Found
      </h2>
    );
  }

  return (

    <section className="product-details">

      {/* LEFT SIDE */}

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      {/* RIGHT SIDE */}

      <div className="product-info">

        <h1>
          {product.name}
        </h1>

        <div className="product-rating">

          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <span>
            {product.rating}
          </span>

        </div>

        <h2 className="product-price">
          Rs. {product.price}
        </h2>

        <div className="stock">

          <FaCheckCircle />

          <span>
            In Stock
          </span>

        </div>

        <p className="description">
          {product.description}
        </p>

        {/* Quantity */}
                <div className="quantity-box">

          <button
            onClick={() =>
              quantity > 1 &&
              setQuantity(quantity - 1)
            }
          >
            -
          </button>

          <span>
            {quantity}
          </span>

          <button
            onClick={() =>
              setQuantity(quantity + 1)
            }
          >
            +
          </button>

        </div>

        <div className="product-buttons">

          <button
            className="add-cart-btn"
            onClick={() =>
              addToCart({
                ...product,
                quantity,
              })
            }
          >
            <FaShoppingCart />

            Add To Cart

          </button>

          <button className="buy-now-btn">

            <FaBolt />

            Buy Now

          </button>

        </div>

        <div className="product-features">

          <div className="feature-item">

            <FaTruck />

            <span>
              Delivery All Over Pakistan
            </span>

          </div>

          <div className="feature-item">

            <FaShieldAlt />

            <span>
              Secure Shopping Experience
            </span>

          </div>

        </div>

        {/* Product Specifications */}
                <div className="specifications">

          <h3>Product Specifications</h3>

          <ul>

            <li>✔ Premium Quality Material</li>

            <li>✔ Durable & Long Lasting</li>

            <li>✔ Easy To Use</li>

            <li>✔ Fast Delivery Across Pakistan</li>

            <li>✔ Cash On Delivery Available</li>

          </ul>

        </div>

      </div>

    </section>

  );

}

export default ProductDetails;