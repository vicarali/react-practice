import { use, useEffect, useRef, useState } from "react";
import CartModal from "../CartModal/CartModal.jsx";
import { CartContext } from "../../store/cart-context.jsx";

export default function Cart() {
  const [orderState, setOrderState] = useState("ordering");
  const modalRef = useRef(null);
  const numberOfCartItems = getTotalOfCartItems();

  useEffect(() => {
    if (orderState === "cart") modalRef.current.showModal();
    else modalRef.current.close();
  }, [orderState]);

  return (
    <>
      <button className="text-button" onClick={() => setOrderState("cart")}>
        Cart {numberOfCartItems > 0 ? `(${numberOfCartItems})` : ""}
      </button>
      <CartModal ref={modalRef} setOrderState={setOrderState}></CartModal>
    </>
  );
}

function getTotalOfCartItems() {
  const cartContext = use(CartContext);

  return Array.from(cartContext.cartItems).reduce((acc, [itemKey, item]) => {
    return acc + item.quantity;
  }, 0);
}
