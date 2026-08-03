import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = useContext(CartContext);

  const totalPrice = cart.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);
const handleWhatsAppCheckout = () => {
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
    `https://wa.me/923488759970?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  return (
    <section
      style={{
        padding: "80px 8%",
        minHeight: "70vh",
      }}
    >
      <h1>Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                margin: "20px 0",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "10px",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                width="100"
              />

              <div style={{ flex: 1 }}>
  <h3>{product.name}</h3>
  <p>Price: Rs. {product.price}</p>

<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "15px",
    margin: "15px 0",
  }}
>
  <button
    onClick={() => decreaseQuantity(product.id)}
    style={{
      width: "35px",
      height: "35px",
      cursor: "pointer",
      fontSize: "18px",
    }}
  >
    -
  </button>

  <strong>{product.quantity}</strong>

  <button
    onClick={() => increaseQuantity(product.id)}
    style={{
      width: "35px",
      height: "35px",
      cursor: "pointer",
      fontSize: "18px",
    }}
  >
    +
  </button>
</div>

<p>
  Subtotal: Rs. {product.price * product.quantity}
</p>

  <button
    onClick={() => removeFromCart(index)}
    style={{
      marginTop: "10px",
      padding: "8px 16px",
      background: "#dc3545",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  >
    Remove
  </button>
</div>
            </div>
          ))}

          <div
  style={{
    marginTop: "30px",
    padding: "20px",
    borderTop: "2px solid #ddd",
    textAlign: "right",
  }}
>
  <h2>Total: Rs. {totalPrice}</h2>

  <button
    onClick={handleWhatsAppCheckout}
    style={{
      marginTop: "20px",
      background: "#25D366",
      color: "#fff",
      border: "none",
      padding: "15px 30px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
    }}
  >
    Checkout on WhatsApp
  </button>
</div>
        </>
      )}
    </section>
  );
}

export default Cart;