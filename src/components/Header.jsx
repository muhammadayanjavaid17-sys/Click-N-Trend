import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import logo from "../assets/images/logo.png";
import "./Header.css";

function Header({ search, setSearch }) {

  const { cart } = useContext(CartContext);

  return (
    <header className="header">

      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="Click N Trend"
            className="logo-img"
          />
        </Link>
      </div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Categories</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <div className="header-right">

        <input
          type="text"
          placeholder="Search products..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link to="/cart" className="cart-btn">
          Cart ({cart.length})
        </Link>

      </div>

    </header>
  );
}

export default Header;