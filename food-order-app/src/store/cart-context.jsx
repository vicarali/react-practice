import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: new Map(),
  setCartItems: () => {},
  cartTotal: 0,
  setCartTotal: () => {},
});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(new Map());
  const [cartTotal, setCartTotal] = useState(0);
  const contextValue = {
    cartItems,
    setCartItems,
    cartTotal,
    setCartTotal,
  };

  return <CartContext value={contextValue}>{children}</CartContext>;
}
