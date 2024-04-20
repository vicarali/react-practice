import headerImg from "../../assets/quiz-logo.png";
import "./Header.css";

function Header() {
	return (
		<header className="header">
			<img src={headerImg} alt="" className="header__img" />
			<h1 className="header__title">REACTQUIZ</h1>
		</header>
	);
}

export default Header;
