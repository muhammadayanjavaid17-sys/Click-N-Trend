import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import logo from "../assets/images/logo.png";
import "./Header.css";

function Header({ search, setSearch, onCartClick }) {

  const { cart } = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <header className="header">


      {/* =========================
          LOGO
      ========================= */}

      <div className="logo">

        <Link
          to="/"
          onClick={closeMenu}
        >

          <img
            src={logo}
            alt="Click N Trend"
            className="logo-img"
          />

        </Link>

      </div>


      {/* =========================
          MOBILE MENU BUTTON
      ========================= */}

      <div
        className="menu-toggle"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        ☰
      </div>


      {/* =========================
          NAVIGATION
      ========================= */}

      <nav
        className={
          menuOpen
            ? "nav active"
            : "nav"
        }
      >

        <Link
          to="/"
          onClick={closeMenu}
        >
          Home
        </Link>


        <Link
          to="/shop"
          onClick={closeMenu}
        >
          Shop
        </Link>


        <Link
          to="/categories"
          onClick={closeMenu}
        >
          Categories
        </Link>


        <Link
          to="/about"
          onClick={closeMenu}
        >
          About
        </Link>


        <Link
          to="/contact"
          onClick={closeMenu}
        >
          Contact
        </Link>

      </nav>


      {/* =========================
          RIGHT SIDE
      ========================= */}

      <div
        className={
          menuOpen
            ? "header-right active"
            : "header-right"
        }
      >


        {/* SEARCH */}

        <input
          type="text"
          placeholder="Search products..."
          className="search-box"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        {/* CART DRAWER BUTTON */}

        <button
          type="button"
          className="cart-btn"
          onClick={() => {

            closeMenu();

            if (onCartClick) {
              onCartClick();
            }

          }}
        >

          Cart ({cart.length})

        </button>


      </div>

    </header>
  );
}

export default Header;