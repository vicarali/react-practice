import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const contextValue = {
    cartItems,
    setCartItems,
  };

  return <CartContext value={contextValue}>{children}</CartContext>;
}
