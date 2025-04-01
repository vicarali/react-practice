import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: new Map(),
  setCartItems: () => {},
});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(new Map());
  const contextValue = {
    cartItems,
    setCartItems,
  };

  return <CartContext value={contextValue}>{children}</CartContext>;
}
