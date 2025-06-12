import { createContext, useEffect, useState } from "react";

export const Cartcontext = createContext();

const CartProvider = ({ children }) => {
  // ✅ Load from localStorage safely (with error handling)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  });

  // ✅ Sync cart with localStorage on every change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Add to Cart
  const addtoCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.title === product.title
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Remove from Cart (decrease quantity or remove)
  const removefromCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.title === product.title
      );

      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevItems.filter((item) => item.title !== product.title);
      }
    });
  };

  // ✅ Clear cart completely
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Cartcontext.Provider
      value={{ cartItems, setCartItems, addtoCart, removefromCart, clearCart }}
    >
      {children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;
