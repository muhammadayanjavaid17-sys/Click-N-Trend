
import { useEffect, useState } from "react";
import "./Hero.css";

import banner1 from "../assets/images/banner1.webp";
import banner2 from "../assets/images/banner2.webp";
import banner3 from "../assets/images/banner3.webp";

const slides = [
  { image: banner1, alt: "Click N Trend home, kitchen, beauty and kids products" },
  { image: banner2, alt: "Click N Trend featured products banner" },
  { image: banner3, alt: "Click N Trend trending products banner" },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero">
      <img
        key={current}
        src={slides[current].image}
        alt={slides[current].alt}
        className="hero-banner"
      />

      <button
        className="prev"
        onClick={prevSlide}
        aria-label="Previous banner"
      >
        ❮
      </button>

      <button
        className="next"
        onClick={nextSlide}
        aria-label="Next banner"
      >
        ❯
      </button>

      <div className="dots">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
