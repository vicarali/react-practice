import { use, useEffect, useRef, useState } from "react";
import CartModal from "../CartModal/CartModal.jsx";
import CheckoutModal from "../CheckoutModal/CheckoutModal.jsx";
import { CartContext } from "../../store/cart-context.jsx";

export default function Cart() {
  const [orderState, setOrderState] = useState("ordering");
  const cartModalRef = useRef(null);
  const checkoutModalRef = useRef(null);
  const numberOfCartItems = getTotalOfCartItems();

  useEffect(() => {
    if (orderState === "cart") cartModalRef.current.showModal();
    else if (orderState === "checkout") checkoutModalRef.current.showModal();
    else {
      cartModalRef.current.close();
      checkoutModalRef.current.close();
    }
  }, [orderState]);

  return (
    <>
      <button className="text-button" onClick={() => setOrderState("cart")}>
        Cart {numberOfCartItems > 0 ? `(${numberOfCartItems})` : ""}
      </button>
      <CartModal ref={cartModalRef} setOrderState={setOrderState} />
      <CheckoutModal ref={checkoutModalRef} setOrderState={setOrderState} />
    </>
  );
}

function getTotalOfCartItems() {
  const cartContext = use(CartContext);

  return Array.from(cartContext.cartItems).reduce((acc, [itemKey, item]) => {
    return acc + item.quantity;
  }, 0);
}
