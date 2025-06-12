import { useContext, useState } from "react";
import { Cartcontext } from "../store/Cartcontext";
import { Link } from "react-router-dom";
import styles from "./Featuredeals.module.css";

import img1 from "/assets/images/spowerbank.webp";
import img2 from "/assets/images/redminote.webp";
import img3 from "/assets/images/sgalaxyultra.webp";
import img4 from "/assets/images/boatimg.webp";
import img5 from "/assets/images/hpgaminglaptop.jpg";

let Featureddeals = () => {
  const { addtoCart } = useContext(Cartcontext);
  const [addedItems, setAddedItems] = useState([]);

  const Fdeals = [
    {
      title: "Samsung Powerbank",
      image: img1,
      oldprice: "PKR 4500",
      price: "PKR 3200",
      deal: "20% Off",
    },
    {
      title: "Redmi Note 13 Pro",
      image: img2,
      oldprice: "PKR 75000",
      price: "PKR 62,999",
      deal: "20% Off",
    },
    {
      title: "Samsung Galaxy S21 Ultra",
      image: img3,
      oldprice: "180,000",
      price: "142,999",
      deal: "20% Off",
    },
    {
      title: "Boat Wireless Earbuds",
      image: img4,
      oldprice: "12000",
      price: "7999",
      deal: "20% Off",
    },
    {
      title: "Hp Gaming laptop",
      image: img5,
      oldprice: "150,000",
      price: "120,999",
      deal: "20% Off",
    },
  ];

  const handleAdd = (product) => {
    addtoCart(product);
    setAddedItems([...addedItems, product.title]);
  };

  return (
    <section className={styles.featuredeals}>
      <h3 className={styles.heading}>Featured Deals</h3>
      <div className={styles.grid}>
        {Fdeals.map((product, index) => {
          const isAdded = addedItems.includes(product.title);
          return (
            <div className={styles.card} key={index}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
              <div className={styles.title}>{product.title}</div>
              <div className={styles.priceSection}>
                <span className={styles.oldprice}>{product.oldprice}</span>
                <span className={styles.newprice}>{product.price}</span>
              </div>
              <div className={styles.deal}>{product.deal}</div>

              {!isAdded ? (
                <button
                  className={styles.button}
                  onClick={() => handleAdd(product)}
                >
                  Add to Cart
                </button>
              ) : (
                <Link to="/cart" className={styles.btn}>
                  View Cart
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Featureddeals;
