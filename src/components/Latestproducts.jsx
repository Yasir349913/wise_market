import { useContext, useState } from "react";
import { Cartcontext } from "../store/Cartcontext";
import { Link } from "react-router-dom";
import styles from "./Latestproducts.module.css";
import img1 from "/assets/images/samsungsmart_phone.jpg";
import img2 from "/assets/images/hplaptop.webp";
import img3 from "/assets/images/redmi.webp";
import img4 from "/assets/images/samsungearbuds.jpg";
import img5 from "/assets/images/waterproofsmartwatch.jpg";

let Latestproducts = () => {
  const { addtoCart } = useContext(Cartcontext);
  const [addedIndex, setAddedIndex] = useState(null);

  const products = [
    {
      title: "Samsung Galaxy",
      image: img1,
      price: "PKR 40,000",
    },
    {
      title: "Hp Laptop",
      image: img2,
      price: "PKR 120,000",
    },
    {
      title: "Redmi Mobile",
      image: img3,
      price: "PKR 29,000",
    },
    {
      title: "Samsung Earbuds",
      image: img4,
      price: "PKR 12,000",
    },
    {
      title: "Smartwatch",
      image: img5,
      price: "PKR 20,000",
    },
  ];

  return (
    <section className={styles.latestproducts}>
      <div className={styles.heading}>
        <h3>Latest Products</h3>
      </div>
      <div className={styles.productsGrid}>
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
            <div className={styles.title}>{product.title}</div>
            <article className={styles.price}>{product.price}</article>

            {addedIndex === index ? (
              <Link to="/cart" className={styles.btn}>
                View Cart
              </Link>
            ) : (
              <button
                type="button"
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

export default Latestproducts;
