import styles from "./CartModal.module.css";
import { CartContext } from "../../store/cart-context.jsx";
import { use } from "react";

export default function CartModal({ ref, setIsOpen }) {
  const cartContext = use(CartContext);

  return (
    <dialog className={styles.modal} ref={ref}>
      <h2 className={styles.title}>Your Cart</h2>

      <ul className={styles.cartListing}>
        {Array.from(cartContext.cartItems).map(([itemKey, item]) => (
          <li key={itemKey} className={styles.cartItem}>
            <p className={styles.cartItemParagraph}>
              {item.name} - {item.quantity} x {item.price}€
            </p>
            <div className={styles.cartItemActions}>
              <button className={styles.cartItemActionsButton}>-</button>
              <p className={styles.cartItemParagraph}>{item.quantity}</p>
              <button className={styles.cartItemActionsButton}>+</button>
            </div>
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
        <button className="button">Go to Checkout</button>
      </div>
    </dialog>
  );
}
