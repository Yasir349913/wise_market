import { useState, useEffect } from "react";
import img3 from "/assets/images/mobileimg.webp";
import img4 from "/assets/images/laptopimg.avif";
import img5 from "/assets/images/watchesimg.webp";
import img6 from "/assets/images/earbudsimg.jpg";
import styles from "./Herosection.module.css";

const Herosection = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const images = [img3, img4, img5, img6];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className={styles.heroSection}>
      <img
        src={images[currIndex]}
        alt={`Slide ${currIndex + 1}`}
        className={styles.heroImage}
      />
      <div className={styles.overlayText}>
        <h1>Welcome to Wise Market</h1>
        <p>Explore top gadgets at the best prices!</p>
      </div>
    </section>
  );
};

export default Herosection;
