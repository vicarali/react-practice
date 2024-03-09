import "./Header.css";
import logoImg from "../../assets/investment-calculator-logo.png";

function Header() {
	return (
		<header id="header">
			<img src={logoImg} alt="" />
			<h1>React Investment Calculator</h1>
		</header>
	);
}

export default Header;
