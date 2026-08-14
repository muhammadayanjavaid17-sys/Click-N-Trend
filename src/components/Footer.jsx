import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* Brand */}
        <div className="footer-column footer-brand">
          <h2>Click N Trend</h2>

          <p>
            Your one-stop shop for smart and trending products.
          </p>
        </div>


        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <div className="footer-links">

            <Link to="/">Home</Link>

            <Link to="/shop">Shop</Link>

            <Link to="/categories">Categories</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>

          </div>
        </div>


        {/* Contact */}
        <div className="footer-column">

          <h3>Contact</h3>

          <div className="contact-links">

            {/* WhatsApp */}
            <a
              href="https://wa.me/923488759970"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>📱</span>
              <span>+92 348 8759970</span>
            </a>


            {/* Email */}
            <a
              href="mailto:clickntrend1306@gmail.com"
              className="contact-link"
            >
              <span>✉️</span>
              <span>clickntrend1306@gmail.com</span>
            </a>


            {/* Location */}
            <div className="contact-link">
              <span>📍</span>
              <span>Pakistan</span>
            </div>

          </div>


          {/* Social Media */}
          <div className="social-links">

            <a
              href="https://www.facebook.com/clickntrend"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
              aria-label="Click N Trend Facebook"
            >
              f
            </a>


            <a
              href="https://www.instagram.com/cli_ckntrend/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              aria-label="Click N Trend Instagram"
            >
              ◎
            </a>

          </div>

        </div>

      </div>


      <hr />


      <div className="copyright">
        © {new Date().getFullYear()} Click N Trend. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;