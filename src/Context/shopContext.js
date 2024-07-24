import { createContext, useState, useEffect } from "react";
import { Products } from "../Shopping/Products";

export const ShopContext = createContext(null);

const defaultCart = () => {
  let cart = {};
  for (let i = 1; i <= Products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const getInitialCart = () => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : defaultCart();
  };

  const [cartItems, setCartItems] = useState(getInitialCart());

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getItemLimit = (itemId) => {
    const item = Products.find((product) => product.id === Number(itemId));
    return item ? item.limit : Infinity;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const itemLimit = getItemLimit(itemId);
      if (prev[itemId] < itemLimit) {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      } else {
        alert(`You can only buy up to ${itemLimit} of this item.`);
        return prev;
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => {
      const itemLimit = getItemLimit(itemId);
      if (newAmount <= itemLimit) {
        return { ...prev, [itemId]: newAmount };
      } else {
        alert(`You can only buy up to ${itemLimit} of this item.`);
        return prev;
      }
    });
  };

  const checkout = () => {
    setCartItems(defaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
