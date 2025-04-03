import { CartContext } from "../../store/cart-context.jsx";
import { use, useActionState } from "react";
import styles from "./CheckoutModal.module.css";

export default function CheckoutModal({ ref, setOrderState }) {
  const cartContext = use(CartContext);
  const [checkoutActionState, checkoutFormAction] = useActionState(
    checkoutAction,
    { errors: null },
  );

  return (
    <dialog className="modal" ref={ref}>
      <h2 className="modal__title">Checkout</h2>

      <p>Total amount: {cartContext.cartTotal}€</p>

      <form action={checkoutFormAction}>
        <div className={styles.control}>
          <label htmlFor="fullName" className={styles.controlLabel}>
            Full Name
          </label>
          <input
            type="text"
            className={styles.controlInput}
            name="fullName"
            defaultValue={checkoutActionState.formFields?.fullName}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="emailAddress" className={styles.controlLabel}>
            E-Mail Address
          </label>
          <input
            type="email"
            className={styles.controlInput}
            name="emailAddress"
            defaultValue={checkoutActionState.formFields?.emailAddress}
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
            defaultValue={checkoutActionState.formFields?.street}
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
              defaultValue={checkoutActionState.formFields?.postalCode}
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
              defaultValue={checkoutActionState.formFields?.city}
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

function checkoutAction(currentState, formData) {
  const fullName = formData.get("fullName");
  const emailAddress = formData.get("emailAddress");
  const street = formData.get("street");
  const postalCode = formData.get("postalCode");
  const city = formData.get("city");
  const formFields = {
    fullName,
    emailAddress,
    street,
    postalCode,
    city,
  };

  if (
    fullName === "" ||
    emailAddress === "" ||
    street === "" ||
    postalCode === "" ||
    city === ""
  )
    return { errors: "Please fill in all fields.", formFields };

  return { errors: null, formFields };
}
