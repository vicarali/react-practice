import { CartContext } from "../../store/cart-context.jsx";
import { use } from "react";
import styles from "./CheckoutModal.module.css";

export default function CheckoutModal({ ref, setOrderState }) {
  const cartContext = use(CartContext);

  return (
    <dialog className="modal" ref={ref}>
      <h2 className="modal__title">Checkout</h2>

      <p>Total amount: {cartContext.cartTotal}€</p>

      <form>
        <div className={styles.control}>
          <label htmlFor="full-name" className={styles.controlLabel}>
            Full Name
          </label>
          <input type="text" className={styles.controlInput} name="full-name" />
        </div>
        <div className={styles.control}>
          <label htmlFor="email-address" className={styles.controlLabel}>
            E-Mail Address
          </label>
          <input
            type="email"
            className={styles.controlInput}
            name="email-address"
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="street" className={styles.controlLabel}>
            Street
          </label>
          <input type="text" className={styles.controlInput} name="street" />
        </div>
        <div className={styles.controlRow}>
          <div className={styles.control}>
            <label htmlFor="postal-code" className={styles.controlLabel}>
              Postal Code
            </label>
            <input
              type="text"
              className={styles.controlInput}
              name="postal-code"
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="city" className={styles.controlLabel}>
              City
            </label>
            <input type="text" className={styles.controlInput} name="city" />
          </div>
        </div>

        <div className="modal__actions">
          <button
            type="button"
            className={"text-button modal__close-button"}
            onClick={() => setOrderState("ordering")}
          >
            Close
          </button>
          <button className="button" type="submit">
            Submit Order
          </button>
        </div>
      </form>
    </dialog>
  );
}
