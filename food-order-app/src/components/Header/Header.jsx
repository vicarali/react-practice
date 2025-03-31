import logo from '../../assets/logo.jpg';
import "./Header.css";

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Reactfood" className="logo"/>
                <h1>Reactfood</h1>
            </div>

            <button className="text-button">Cart</button>
        </header>
    )
}