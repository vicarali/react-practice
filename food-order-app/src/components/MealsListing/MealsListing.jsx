import {useEffect, useState} from "react";
import styles from "./MealsListing.module.css";
import MealItem from "../MealItem/MealItem.jsx";

export default function MealsListing() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3000/meals");
            const data = await response.json();
            setMeals(data);
        })()
    }, [])

    return (
        <ul className={styles.mealsListing}>
            {meals.map(meal => (
                <MealItem meal={meal} key={meal.id}/>
            ))}
        </ul>
    )
}