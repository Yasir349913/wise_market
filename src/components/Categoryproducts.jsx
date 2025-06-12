import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./Categoryproducts.module.css";
import { Cartcontext } from "../store/Cartcontext";

const CategoryProducts = () => {
  const { category } = useParams();
  const { addtoCart } = useContext(Cartcontext);

  // Folder name based on category (e.g., Samsung => samsung)
  const folderName = category.toLowerCase().replace(/\s+/g, "");

  // Generate 20 dummy product images with prices
  const images = Array.from({ length: 20 }, (_, i) => {
    const path = `/assets/images/products/${folderName}/${i + 1}.jpg`;
    return path;
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Showing {category.toUpperCase()} Products
      </h2>

      <div className={styles.grid}>
        {images.map((src, idx) => {
          const priceValue = 1000 + idx * 200;
          const oldPriceValue = priceValue + 500;

          const product = {
            title: `${category} ${idx + 1}`,
            image: src,
            price: `PKR ${priceValue}`,
            oldprice: `PKR ${oldPriceValue}`,
            deal: "Limited Offer",
          };

          return (
            <div key={idx} className={styles.card}>
              <img
                src={src}
                alt={product.title}
                onError={() => console.warn(`Image not found: ${src}`)}
              />
              <h4>{product.title}</h4>
              <p>Price: {product.price}</p>
              <button onClick={() => addtoCart(product)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProducts;
