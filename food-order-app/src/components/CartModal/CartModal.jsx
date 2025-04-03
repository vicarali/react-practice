import styles from "./CartModal.module.css";
import { CartContext } from "../../store/cart-context.jsx";
import { use } from "react";

export default function CartModal({ ref, setOrderState }) {
  const cartContext = use(CartContext);

  return (
    <dialog className="modal" ref={ref}>
      <h2 className="modal__title">Your Cart</h2>

      <ul className={styles.cartListing}>
        {Array.from(cartContext.cartItems).map(([itemKey, item]) => (
          <li key={itemKey} className={styles.cartItem}>
            <p className={styles.cartItemParagraph}>
              {item.name} - {item.quantity} x {item.price}€
            </p>
            <div className={styles.cartItemActions}>
              <button
                className={styles.cartItemActionsButton}
                onClick={() => cartContext.removeMealFromCart(item)}
              >
                -
              </button>
              <p className={styles.cartItemParagraph}>{item.quantity}</p>
              <button
                className={styles.cartItemActionsButton}
                onClick={() => cartContext.addMealToCart(item)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      <p className={styles.cartTotal}>{cartContext.cartTotal}€</p>

      <div className="modal__actions">
        <button
          className={"text-button modal__close-button"}
          onClick={() => setOrderState("ordering")}
        >
          Close
        </button>
        <button className="button" onClick={() => setOrderState("checkout")}>
          Go to Checkout
        </button>
      </div>
    </dialog>
  );
}
