import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: new Map(),
  cartTotal: 0,
  addMealToCart: () => {},
  removeMealFromCart: () => {},
});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(new Map());
  const [cartTotal, setCartTotal] = useState(0);

  function addMealToCart(meal) {
    setCartItems((previousCartItems) => {
      const newCartItems = new Map(previousCartItems);

      if (previousCartItems.has(meal.id)) {
        const previousMeal = previousCartItems.get(meal.id);
        newCartItems.set(meal.id, {
          ...previousMeal,
          quantity: previousMeal.quantity + 1,
        });
      } else {
        newCartItems.set(meal.id, { ...meal, quantity: 1 });
      }

      setCartTotal(calculateCartPriceTotal(newCartItems));

      return newCartItems;
    });
  }

  function removeMealFromCart(meal) {
    setCartItems((previousCartItems) => {
      const newCartItems = new Map(previousCartItems);
      const previousMeal = previousCartItems.get(meal.id);

      if (previousMeal.quantity === 1) {
        newCartItems.delete(meal.id);
      } else {
        newCartItems.set(meal.id, {
          ...previousMeal,
          quantity: previousMeal.quantity - 1,
        });
      }

      setCartTotal(calculateCartPriceTotal(newCartItems));

      return newCartItems;
    });
  }

  const contextValue = {
    cartItems,
    cartTotal,
    addMealToCart,
    removeMealFromCart,
  };

  return <CartContext value={contextValue}>{children}</CartContext>;
}

function calculateCartPriceTotal(cartItems) {
  return Array.from(cartItems).reduce((acc, [itemKey, item]) => {
    return acc + Number(item.price) * item.quantity;
  }, 0);
}
