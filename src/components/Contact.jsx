import "./Contact.css";
function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-section">

        <div className="contact-header">
          <h1>Contact Us</h1>

          <p>
            Have a question or need help with your order?
            We are here to help.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <h2>Get In Touch</h2>

            <p>
              Feel free to contact us for product information,
              orders or any other questions.
            </p>

            <div className="contact-detail">
              <strong>Phone</strong>
              <span>+92 XXX XXXXXXX</span>
            </div>

            <div className="contact-detail">
              <strong>Email</strong>
              <span>info@clickntrend.com</span>
            </div>

            <div className="contact-detail">
              <strong>Location</strong>
              <span>Pakistan</span>
            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We will contact you soon.");
            }}
          >

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="6"
              required
            />

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

export default Contact;