import styles from "./CartModal.module.css";
import { CartContext } from "../../store/cart-context.jsx";
import { use } from "react";

export default function CartModal({ ref, setIsOpen }) {
  const cartContext = use(CartContext);

  return (
    <dialog className={styles.modal} ref={ref}>
      <h2 className={styles.title}>Your Cart</h2>

      <ul className={styles.cartListing}>
        {cartContext.cartItems.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <p className={styles.cartItemParagraph}>{item.name}</p>
          </li>
        ))}
      </ul>

      <div className={styles.modalActions}>
        <button
          className={`text-button ${styles.textButton}`}
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      </div>
    </dialog>
  );
}
