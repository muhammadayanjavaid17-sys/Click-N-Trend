import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have a question or need help with your order? We are here to help.
        </p>
      </section>

      <section className="contact-content">

        {/* Left Side */}
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p className="contact-description">
            Feel free to contact us for product information, orders or
            any other questions.
          </p>

          <div className="contact-detail">
            <h3>Phone</h3>
            <a href="tel:+923488759970">
              +92 348 8759970
            </a>
          </div>

          <div className="contact-detail">
            <h3>Email</h3>
            <a href="mailto:clickntrend1306@gmail.com">
              clickntrend1306@gmail.com
            </a>
          </div>

          <div className="contact-detail">
            <h3>Location</h3>
            <p>Pakistan</p>
          </div>
        </div>


        {/* Right Side */}
        <div className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
          ></textarea>

          <button type="button">
            Send Message
          </button>

        </div>

      </section>

    </main>
  );
}

export default Contact;