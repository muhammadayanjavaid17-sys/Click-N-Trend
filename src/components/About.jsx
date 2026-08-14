import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* About Intro */}
      <section className="about-intro">
        <div className="about-container">
          <h1>About Click N Trend</h1>

          <p>
            Welcome to Click N Trend – your one-stop shop for
            smart, useful and trending products.
          </p>

          <p>
            We focus on bringing carefully selected products that
            make everyday life easier, smarter and more convenient.
          </p>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="why-choose">

        <div className="about-container">

          <h2>Why Choose Click N Trend?</h2>

          <div className="why-choose-grid">

            <div className="why-card">
              <div className="why-icon">🚚</div>

              <h3>Fast Delivery</h3>

              <p>
                Quick and reliable delivery all over Pakistan.
              </p>
            </div>


            <div className="why-card">
              <div className="why-icon">💯</div>

              <h3>Quality Products</h3>

              <p>
                Carefully selected products with a focus on quality.
              </p>
            </div>


            <div className="why-card">
              <div className="why-icon">🔒</div>

              <h3>Secure Shopping</h3>

              <p>
                A simple and secure shopping experience for every customer.
              </p>
            </div>


            <div className="why-card">
              <div className="why-icon">🤝</div>

              <h3>Customer Support</h3>

              <p>
                Friendly support whenever you need help with your order.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;