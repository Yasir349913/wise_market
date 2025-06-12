import { useContext } from "react";
import { Cartcontext } from "../store/Cartcontext";

import styles from "./Cart.module.css";

const Cart = () => {
  const { cartItems, addtoCart, removefromCart, clearCart } =
    useContext(Cartcontext);

  const totalPrice = cartItems.reduce((total, item) => {
    const price =
      parseInt(item.newprice?.replace(/[^0-9]/g, "")) ||
      parseInt(item.price?.replace(/[^0-9]/g, "")) ||
      0;
    return total + price * item.quantity;
  }, 0);

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.heading}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className={styles.empty}>Cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className={styles.cartItem} key={index}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.info}>
                <h3>{item.title}</h3>
                <p>Unit Price: {item.newprice || item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Total:{" "}
                  {(parseInt(item.newprice?.replace(/[^0-9]/g, "")) ||
                    parseInt(item.price?.replace(/[^0-9]/g, "")) ||
                    0) * item.quantity}{" "}
                  PKR
                </p>

                <div className={styles.buttons}>
                  <button onClick={() => removefromCart(item)}>-</button>
                  <button onClick={() => addtoCart(item)}>+</button>
                  <button
                    className={styles.removeButton}
                    onClick={() => removefromCart({ ...item, quantity: 1e9 })}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* ✅ Clear Cart & Total Price Section */}
          <div className={styles.totalSection}>
            <h3>Total Cart Price: {totalPrice} PKR</h3>
            <button onClick={clearCart} className={styles.clearCartButton}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
