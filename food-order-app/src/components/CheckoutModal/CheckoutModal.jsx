import { CartContext } from "../../store/cart-context.jsx";
import { use, useActionState } from "react";
import styles from "./CheckoutModal.module.css";

export default function CheckoutModal({ ref, setOrderState }) {
  const [checkoutActionState, checkoutFormAction] = useActionState(
    checkoutAction,
    { errors: null },
  );

  const cartContext = use(CartContext);
  saveCartToLocalStorage(cartContext);

  return (
    <dialog className="modal" ref={ref}>
      <h2 className="modal__title">Checkout</h2>

      <p>Total amount: {cartContext.cartTotal}€</p>

      <form action={checkoutFormAction}>
        <div className={styles.control}>
          <label htmlFor="name" className={styles.controlLabel}>
            Full Name
          </label>
          <input
            type="text"
            className={styles.controlInput}
            name="name"
            defaultValue={checkoutActionState.customer?.name}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="email" className={styles.controlLabel}>
            E-Mail Address
          </label>
          <input
            type="email"
            className={styles.controlInput}
            name="email"
            defaultValue={checkoutActionState.customer?.email}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="street" className={styles.controlLabel}>
            Street
          </label>
          <input
            type="text"
            className={styles.controlInput}
            name="street"
            defaultValue={checkoutActionState.customer?.street}
          />
        </div>
        <div className={styles.controlRow}>
          <div className={styles.control}>
            <label htmlFor="postalCode" className={styles.controlLabel}>
              Postal Code
            </label>
            <input
              type="text"
              className={styles.controlInput}
              name="postalCode"
              defaultValue={checkoutActionState.customer?.postalCode}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="city" className={styles.controlLabel}>
              City
            </label>
            <input
              type="text"
              className={styles.controlInput}
              name="city"
              defaultValue={checkoutActionState.customer?.city}
            />
          </div>
        </div>

        {checkoutActionState.errors ? (
          <p className={styles.controlError}>{checkoutActionState.errors}</p>
        ) : (
          ""
        )}

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

function saveCartToLocalStorage(cartContext) {
  localStorage.setItem("cartTotal", JSON.stringify(cartContext.cartTotal));
  localStorage.setItem(
    "cartItems",
    JSON.stringify(Array.from(cartContext.cartItems)),
  );
}

function checkoutAction(currentState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const street = formData.get("street");
  const postalCode = formData.get("postalCode");
  const city = formData.get("city");
  const customer = {
    name,
    email,
    street,
    postalCode,
    city,
  };

  if (
    name === "" ||
    email === "" ||
    street === "" ||
    postalCode === "" ||
    city === ""
  )
    return { errors: "Please fill in all fields.", customer };
  else {
    const order = {
      order: {
        customer,
        cartTotal: localStorage.getItem("cartTotal"),
        items: localStorage.getItem("cartItems"),
      },
    };

    (async function () {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      const json = await response.json();

      console.log(json);
    })();
  }

  return { errors: null, customer };
}
