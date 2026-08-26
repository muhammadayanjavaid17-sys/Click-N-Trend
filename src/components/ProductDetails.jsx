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
  FaCheckCircle,
} from "react-icons/fa";

import "./ProductDetails.css";

function ProductDetails({ onCartOpen }) {

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


  // =========================
  // ADD TO CART
  // =========================

  const handleAddToCart = () => {

    addToCart({
      ...product,
      quantity,
    });

    // Open right-side cart drawer
    if (onCartOpen) {
      onCartOpen();
    }

  };


  // =========================
  // BUY NOW
  // =========================

  const handleBuyNow = () => {

    addToCart({
      ...product,
      quantity,
    });

    if (onCartOpen) {
      onCartOpen();
    }

  };


  return (

    <section className="product-details">

      {/* =========================
          LEFT SIDE
      ========================= */}

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>


      {/* =========================
          RIGHT SIDE
      ========================= */}

      <div className="product-info">

        <h1>
          {product.name}
        </h1>


        {/* Rating */}

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


        {/* Price */}

        <h2 className="product-price">
          Rs. {product.price}
        </h2>


        {/* Stock */}

        <div className="stock">

          <FaCheckCircle />

          <span>
            In Stock
          </span>

        </div>


        {/* Description */}

        <p className="description">
          {product.description}
        </p>


        {/* =========================
            QUANTITY
        ========================= */}

        <div className="quantity-box">

          <button
            onClick={() => {

              if (quantity > 1) {
                setQuantity(quantity - 1);
              }

            }}
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


        {/* =========================
            PRODUCT BUTTONS
        ========================= */}

        <div className="product-buttons">

          {/* ADD TO CART */}

          <button
            className="add-cart-btn"
            onClick={handleAddToCart}
          >

            <FaShoppingCart />

            Add To Cart

          </button>


          {/* BUY NOW */}

          <button
            className="buy-now-btn"
            onClick={handleBuyNow}
          >

            <FaBolt />

            Buy Now

          </button>

        </div>


        {/* =========================
            FEATURES
        ========================= */}

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


        {/* =========================
            SPECIFICATIONS
        ========================= */}

        <div className="specifications">

          <h3>
            Product Specifications
          </h3>

          <ul>

            <li>
              ✔ Premium Quality Material
            </li>

            <li>
              ✔ Durable & Long Lasting
            </li>

            <li>
              ✔ Easy To Use
            </li>

            <li>
              ✔ Fast Delivery Across Pakistan
            </li>

            <li>
              ✔ Cash On Delivery Available
            </li>

          </ul>

        </div>

      </div>

    </section>

  );

}

export default ProductDetails;