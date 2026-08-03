import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h2>Click N Trend</h2>
          <p>Your one-stop shop for smart and trending products.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Shop</p>
          <p>Categories</p>
          <p>Contact</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>📞 +92 XXX XXXXXXX</p>
          <p>✉️ info@clickntrend.com</p>
          <p>📍 Pakistan</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Click N Trend. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;