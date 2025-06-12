import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryNavbar.module.css";

const CategoryNavbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const navRef = useRef();

  const data = {
    Mobile: ["iPhone", "Samsung", "Infinix", "Xiaomi"],
    Laptop: ["Dell", "HP", "MacBook", "Lenovo"],
    "Smart Watches": ["Apple Watch", "Samsung Watch", "Fitbit"],
    Accessories: ["Chargers", "Covers", "Screen Protectors"],
    "Wireless Earbuds": ["AirPods", "Galaxy Buds", "Realme Buds"],
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className={styles.catnav} ref={navRef}>
      <div className={styles.left}>
        {Object.entries(data).map(([category, subcategories]) => (
          <div
            key={category}
            className={styles.categoryItem}
            onClick={() => handleCategoryClick(category)}
          >
            <p>{category}</p>
            {activeCategory === category && (
              <ul className={styles.subcategoryList}>
                {subcategories.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/category/${item.toLowerCase().replace(/\s+/g, "")}`}
                      onClick={() => setActiveCategory(null)} // close after click
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className={styles.right}>
        <button className={styles.btnInfo}>Wise Wheels</button>
        <button className={styles.btnDanger}>Auctions</button>
        <Link to="/cart" className={styles.btnInfo}>
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default CategoryNavbar;
