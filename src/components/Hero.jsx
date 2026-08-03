import "./Hero.css";
import { useState, useEffect } from "react";

import vacuumCleaner from "../assets/Images/vacuum-cleaner.png";
import crystalLamp from "../assets/Images/crystal-lamp.webp";
import bubbleMiniFan from "../assets/Images/bubble-mini-fan.webp";
import flyingBall from "../assets/Images/flying-ball.webp";

const slides = [
  {
    id: 1,
    image: vacuumCleaner,
    title: "Smart Home & Trending Products",
    description:
      "Discover premium gadgets and everyday essentials carefully selected for your lifestyle.",
  },
  {
    id: 2,
    image: crystalLamp,
    title: "Modern Lifestyle Collection",
    description:
      "Premium products designed to make your home stylish, comfortable and smarter.",
  },
  {
    id: 3,
    image: bubbleMiniFan,
    title: "Everyday Smart Essentials",
    description:
      "Quality products that make your daily life easier and more convenient.",
  },
  {
    id: 4,
    image: flyingBall,
    title: "Trending Products Collection",
    description:
      "Explore the latest trending products loved by customers across Pakistan.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="hero">

      {/* LEFT CATEGORIES */}

      <div className="hero-categories">

        <h3>Categories</h3>

        <ul>
          <li>Home Essentials</li>
          <li>Kitchen Gadgets</li>
          <li>Beauty & Personal Care</li>
          <li>Kids Products</li>
          <li>Smart Gadgets</li>
          <li>Trending Products</li>
        </ul>

      </div>

      {/* CENTER SLIDER */}

      <div className="hero-slider">

        <div className="hero-content">

          <span className="hero-tag">
            Click N Trend
          </span>

          <h1>
            {slides[currentSlide].title}
          </h1>

          <p>
            {slides[currentSlide].description}
          </p>

          <button className="shop-btn">
            Shop Now
          </button>

        </div>

        <div className="hero-product">

          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
          />
                  </div>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={
                currentSlide === index
                  ? "dot active"
                  : "dot"
              }
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="hero-info">

        <div className="info-card">
          <h4>Premium Quality</h4>
          <p>
            Carefully selected products with reliable quality.
          </p>
        </div>

        <div className="info-card">
          <h4>Cash On Delivery</h4>
          <p>
            Convenient payment option available across Pakistan.
          </p>
        </div>

        <div className="info-card">
          <h4>Secure Shopping</h4>
          <p>
            Shop confidently with a smooth and trusted experience.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Hero;