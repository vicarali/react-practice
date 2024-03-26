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
				<label>
					<input type="text" id="title" />
				</label>

				<label>
					<textarea
						className="new-project-form__description"
						id="description"
						rows="3"
					></textarea>
				</label>

				<label>
					<input type="date" id="date" />
				</label>
			</form>
		</dialog>
	);
}
