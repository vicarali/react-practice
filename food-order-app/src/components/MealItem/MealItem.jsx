import styles from "./MealItem.module.css";
import { CartContext } from "../../store/cart-context.jsx";
import { use } from "react";

const LOCAL_HOST_URL = "http://localhost:3000/";

export default function MealItem({ meal }) {
  const cartContext = use(CartContext);

  return (
    <li key={meal.id} className={styles.mealItem}>
      <article className={styles.mealInnerWrapper}>
        <img
          src={LOCAL_HOST_URL + meal.image}
          className={styles.mealImg}
          alt={meal.name}
        />
        <h2 className={styles.mealTitle}>{meal.name}</h2>
        <small className={styles.mealPrice}>{meal.price}€</small>
        <p className={styles.mealDescription}>{meal.description}</p>
        <button
          className={`button ${styles.mealActions}`}
          onClick={() => cartContext.addMealToCart(meal)}
        >
          Add to Cart
        </button>
      </article>
    </li>
  );
}
