import { useEffect, useState } from "react";
import "./Hero.css";

import banner1 from "../assets/images/banner1.webp";
import banner2 from "../assets/images/banner2.webp";
import banner3 from "../assets/images/banner3.webp";

const slides = [
  {
    image: banner1,
    badge: "NEW ARRIVAL",
    title: "Crystal Touch Lamp",
    subtitle:
      "Modern lighting that transforms your room with elegance and premium ambience.",
    button: "Shop Now",
  },
  {
    image: banner2,
    badge: "BEST SELLER",
    title: "2L Push Chopper",
    subtitle:
      "Make food preparation faster and easier with our premium kitchen collection.",
    button: "Explore",
  },
  {
    image: banner3,
    badge: "TRENDING",
    title: "Mini Vacuum Cleaner",
    subtitle:
      "Powerful cleaning solution for home, office and car with portable convenience.",
    button: "Buy Now",
  },
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
        src={slides[current].image}
        alt=""
        className="hero-banner"
      />

      <div className="hero-overlay">

        <span className="hero-badge">
          {slides[current].badge}
        </span>

        <h1>{slides[current].title}</h1>

        <p>{slides[current].subtitle}</p>

        <button className="hero-btn">
          {slides[current].button}
        </button>

      </div>

      <button className="prev" onClick={prevSlide}>
        ❮
      </button>

      <button className="next" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

    </section>
  );
}

export default Hero;