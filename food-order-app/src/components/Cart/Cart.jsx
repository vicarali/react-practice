import { use, useEffect, useRef, useState } from "react";
import CartModal from "../CartModal/CartModal.jsx";
import { CartContext } from "../../store/cart-context.jsx";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const numberOfCartItems = getTotalOfCartItems();

  useEffect(() => {
    if (isOpen) modalRef.current.showModal();
    else modalRef.current.close();
  }, [isOpen]);

  return (
    <>
      <button className="text-button" onClick={() => setIsOpen(true)}>
        Cart {numberOfCartItems > 0 ? `(${numberOfCartItems})` : ""}
      </button>
      <CartModal ref={modalRef} setIsOpen={setIsOpen}></CartModal>
    </>
  );
}

function getTotalOfCartItems() {
  const cartContext = use(CartContext);

  return Array.from(cartContext.cartItems).reduce((acc, [itemKey, item]) => {
    return acc + item.quantity;
  }, 0);
}
