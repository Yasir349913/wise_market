import img1 from "/assets/images/topcat1.avif";
import img2 from "/assets/images/topcat2.jpg";
import img3 from "/assets/images/topcat3.avif";
import img4 from "/assets/images/topcat4.avif";
import img5 from "/assets/images/topcat5.webp";
import styles from "./Topcategories.module.css";

import { useContext, useState } from "react";
import { Cartcontext } from "../store/Cartcontext";
import { Link } from "react-router-dom";

let Topcategories = () => {
  const { addtoCart } = useContext(Cartcontext);
  const [addedIndex, setAddedIndex] = useState(null);

  const categories = [
    { title: "Earbuds", image: img1, price: "PKR 5,000" },
    { title: "Mobiles", image: img2, price: "PKR 30,000" },
    { title: "Laptop", image: img3, price: "PKR 90,000" },
    { title: "Smart Watch", image: img4, price: "PKR 15,000" },
    { title: "Gaming Laptop", image: img5, price: "PKR 150,000" },
  ];

  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.heading}>Top Categories</h2>
      <div className={styles.categoriesGrid}>
        {categories.map((item, index) => (
          <div className={styles.categoryCard} key={index}>
            <img src={item.image} alt={item.title} />
            <div className={styles.categoryTitle}>{item.title}</div>
            <div className={styles.price}>{item.price}</div>

            {addedIndex === index ? (
              <Link to="/cart" className={styles.btn}>
                View Cart
              </Link>
            ) : (
              <button
                type="button"
                className={styles.button}
                onClick={() => {
                  addtoCart(item);
                  setAddedIndex(index);
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Topcategories;
