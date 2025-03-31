import logo from '../../assets/logo.jpg';
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.titleWrapper}>
                <img src={logo} alt="Reactfood" className={styles.logo}/>
                <h1 className={styles.title}>Reactfood</h1>
            </div>

            <button className="text-button">Cart</button>
        </header>
    )
}