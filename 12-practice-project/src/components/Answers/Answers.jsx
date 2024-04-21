import "./Answers.css";

export function Answers({ children }) {
	return (
		<ul className="answers">
			{children.map((answer, index) => {
				return (
					<li className="answers__item" key={index}>
						<button className="answers__button">{answer}</button>
					</li>
				);
			})}
		</ul>
	);
}
