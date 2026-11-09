
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
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2 className="not-found">Product Not Found</h2>;
  }

  // Multiple images supported; fallback to main image
  const images =
    product.images?.length > 0
      ? product.images
      : [product.image];

  const currentImage = images[selectedImage] || product.image;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });

    if (onCartOpen) {
      onCartOpen();
    }
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity });

    if (onCartOpen) {
      onCartOpen();
    }
  };

  return (
    <main className="product-details-page">
      <section className="product-details">

        {/* LEFT: PRODUCT GALLERY */}
        <div className="product-gallery">

          <div className="product-thumbnails">
            {images.map((image, index) => (
              <button
                key={index}
                className={
                  selectedImage === index
                    ? "thumbnail active"
                    : "thumbnail"
                }
                onClick={() => setSelectedImage(index)}
                aria-label={`View product image ${index + 1}`}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} />
              </button>
            ))}
          </div>

          <div className="product-main-image">
            <img
              src={currentImage}
              alt={product.name}
            />
          </div>

        </div>

        {/* RIGHT: PRODUCT INFORMATION */}
        <div className="product-info">

          {product.rating && (
            <div className="product-rating">
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>

              <span>{product.rating}</span>

              {product.reviewCount && (
                <span className="review-count">
                  ({product.reviewCount} Reviews)
                </span>
              )}
            </div>
          )}

          <h1>{product.name}</h1>

          <div className="product-pricing">

            {product.originalPrice && (
              <span className="original-price">
                Rs. {product.originalPrice}
              </span>
            )}

            <span className="product-price">
              Rs. {product.price}
            </span>

            {product.discount && (
              <span className="discount-label">
                SAVE {product.discount}%
              </span>
            )}

          </div>

          <div className="stock">
            <FaCheckCircle />
            <span>In Stock</span>
          </div>

          <div className="product-description">
            <h3>Product Description</h3>
            <p>
              {product.description ||
                "Explore this product from Click N Trend. Quality products for better living."}
            </p>
          </div>

          {/* PRODUCT OPTIONS - IF AVAILABLE */}
          {product.options?.length > 0 && (
            <div className="product-options">
              <h3>Choose an Option</h3>

              <div className="option-list">
                {product.options.map((option, index) => (
                  <span key={index} className="option-item">
                    {option}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* QUANTITY */}
          <div className="purchase-row">

            <div className="quantity-box">
              <button
                onClick={() =>
                  setQuantity((prev) => Math.max(1, prev - 1))
                }
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              className="add-cart-btn"
              onClick={handleAddToCart}
            >
              <FaShoppingCart />
              ADD TO CART
            </button>

          </div>

          <button
            className="buy-now-btn"
            onClick={handleBuyNow}
          >
            <FaBolt />
            BUY NOW
          </button>

          {/* DELIVERY FEATURES */}
          <div className="product-features">

            <div className="feature-item">
              <FaTruck />
              <span>
                <strong>Delivery All Over Pakistan</strong>
                <small>Convenient nationwide delivery</small>
              </span>
            </div>

            <div className="feature-item">
              <FaShieldAlt />
              <span>
                <strong>Secure Shopping</strong>
                <small>Shop with confidence</small>
              </span>
            </div>

          </div>

          {/* PRODUCT DETAILS */}
          <div className="specifications">

            <h3>Product Information</h3>

            {product.type && (
              <p>
                <strong>Type:</strong> {product.type}
              </p>
            )}

            <p>
              <strong>Availability:</strong> In Stock
            </p>

            {product.category && (
              <p>
                <strong>Category:</strong> {product.category}
              </p>
            )}

          </div>

        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
