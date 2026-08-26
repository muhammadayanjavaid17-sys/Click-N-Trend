import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {
  FaTimes,
  FaPlus,
  FaMinus,
  FaTrash,
  FaShoppingCart,
} from "react-icons/fa";

import "./CartDrawer.css";

function CartDrawer({ isOpen, onClose }) {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    const message = `
Hello Click N Trend,

I would like to place an order:

${cart
  .map(
    (product) =>
      `• ${product.name}
Qty: ${product.quantity}
Price: Rs. ${product.price}
Subtotal: Rs. ${product.price * product.quantity}`
  )
  .join("\n\n")}

------------------------
Total: Rs. ${totalPrice}

Name:
Address:
City:
`;

    window.open(
      `https://wa.me/923488759970?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="cart-drawer-overlay"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <aside
        className={`cart-drawer ${
          isOpen ? "cart-drawer-open" : ""
        }`}
      >

        {/* Header */}
        <div className="cart-drawer-header">

          <div className="cart-drawer-title">
            <FaShoppingCart />
            <h2>Your Cart</h2>
          </div>

          <button
            className="cart-drawer-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            <FaTimes />
          </button>

        </div>


        {/* Cart Content */}
        <div className="cart-drawer-content">

          {cart.length === 0 ? (

            <div className="empty-cart">

              <FaShoppingCart />

              <h3>Your cart is empty</h3>

              <p>
                Add some products to your cart
                to see them here.
              </p>

              <button
                className="continue-shopping"
                onClick={onClose}
              >
                Continue Shopping
              </button>

            </div>

          ) : (

            <>

              {/* Products */}
              <div className="drawer-products">

                {cart.map((product, index) => (

                  <div
                    className="drawer-product"
                    key={`${product.id}-${index}`}
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <div className="drawer-product-info">

                      <h3>{product.name}</h3>

                      <p className="drawer-price">
                        Rs. {product.price}
                      </p>


                      {/* Quantity */}
                      <div className="drawer-quantity">

                        <button
                          onClick={() =>
                            decreaseQuantity(product.id)
                          }
                          aria-label="Decrease quantity"
                        >
                          <FaMinus />
                        </button>

                        <span>
                          {product.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(product.id)
                          }
                          aria-label="Increase quantity"
                        >
                          <FaPlus />
                        </button>

                      </div>

                    </div>


                    {/* Remove */}
                    <button
                      className="drawer-remove"
                      onClick={() =>
                        removeFromCart(index)
                      }
                      aria-label="Remove product"
                    >
                      <FaTrash />
                    </button>

                  </div>

                ))}

              </div>


              {/* Bottom */}
              <div className="cart-drawer-bottom">

                <div className="drawer-total">

                  <span>Total</span>

                  <strong>
                    Rs. {totalPrice}
                  </strong>

                </div>


                <button
                  className="drawer-whatsapp"
                  onClick={handleWhatsAppCheckout}
                >
                  Checkout on WhatsApp
                </button>


                <Link
                  to="/cart"
                  className="view-cart-btn"
                  onClick={onClose}
                >
                  View Full Cart
                </Link>

              </div>

            </>

          )}

        </div>

      </aside>
    </>
  );
}

export default CartDrawer;