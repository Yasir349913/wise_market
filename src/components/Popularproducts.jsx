import img1 from "/assets/images/delllaptop.jpg";
import img2 from "/assets/images/infinixmobile.webp";
import img3 from "/assets/images/rgbmouse.png";
import img4 from "/assets/images/samsungpowerbank.jpg";
import img5 from "/assets/images/wireless headphones.jpg";
import styles from "./Popularproducts.module.css"; // CSS module

import { Cartcontext } from "../store/Cartcontext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

let Popularproducts = () => {
  const { addtoCart } = useContext(Cartcontext);
  const [addedIndex, setAddedIndex] = useState(null);

  const popproducts = [
    {
      title: "Dell Laptop",
      image: img1,
      price: "PKR 80,000",
    },
    {
      title: "Infinix Mobile",
      image: img2,
      price: "PKR 46,000",
    },
    {
      title: "RGB Mouse",
      image: img3,
      price: "PKR 7,000",
    },
    {
      title: "Samsung Powerbank",
      image: img4,
      price: "PKR 4,000",
    },
    {
      title: "Wireless Headphones",
      image: img5,
      price: "PKR 6,000",
    },
  ];

  return (
    <section className={styles.popularSection}>
      <h2 className={styles.heading}>Popular Products</h2>
      <div className={styles.grid}>
        {popproducts.map((product, index) => (
          <div className={styles.card} key={index}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>{product.price}</div>

            {addedIndex === index ? (
              <Link to="/cart" className={styles.btn}>
                View Cart
              </Link>
            ) : (
              <button
                className={styles.button}
                onClick={() => {
                  addtoCart(product);
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

export default Popularproducts;
