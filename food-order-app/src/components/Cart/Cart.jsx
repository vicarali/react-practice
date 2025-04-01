import { useEffect, useRef, useState } from "react";
import CartModal from "../CartModal/CartModal.jsx";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) modalRef.current.showModal();
    else modalRef.current.close();
  }, [isOpen]);

  return (
    <>
      <button className="text-button" onClick={() => setIsOpen(true)}>
        Cart
      </button>
      <CartModal ref={modalRef} setIsOpen={setIsOpen}></CartModal>
    </>
  );
}
