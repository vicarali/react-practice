import "./AddProjectButton.css";

export default function AddProjectButton({ children, newProjectForm }) {
	return (
		<button
			className="add-project-button"
			onClick={() => newProjectForm.current.toggle()}
		>
			{children}
		</button>
	);
}
