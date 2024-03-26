import "./NewProjectForm.css";

export default function NewProjectForm({ open }) {
	return (
		<dialog className="new-project-form" open={open}>
			<div className="new-project-form__buttons-wrapper">
				<form method="dialog">
					<button>Cancel</button>
				</form>
				<button className="new-project-form__save">Save</button>
			</div>

			<form className="new-project-form__form">
				<label className="new-project-form__label">
					TITLE
					<input type="text" id="title" />
				</label>

				<label className="new-project-form__label">
					DESCRIPTION
					<textarea
						className="new-project-form__description"
						id="description"
						rows="3"
					></textarea>
				</label>

				<label className="new-project-form__label">
					DUE DATE
					<input type="date" id="date" />
				</label>
			</form>
		</dialog>
	);
}
