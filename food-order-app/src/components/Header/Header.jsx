import logo from '../../assets/logo.jpg';
import styles from "./Header.module.css";
import Cart from "../Cart/Cart.jsx";

export default function Header() {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.titleWrapper}>
                <img src={logo} alt="Reactfood" className={styles.logo}/>
                <h1 className={styles.title}>Reactfood</h1>
            </div>

            <Cart/>
        </header>
    )
}